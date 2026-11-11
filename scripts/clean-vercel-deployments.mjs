/* global process, console, fetch, URLSearchParams */
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execSync } from "node:child_process";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
dotenv.config();

/**
 * @file clean-vercel-deployments.mjs
 * @description Política automatizada de retención de despliegues en Vercel para Blue Team.
 * Conserva estrictamente las N últimas versiones de producción y las M últimas de preview,
 * purgando los despliegues históricos obsoletos para mantenerse siempre dentro de la cuota gratuita de Vercel.
 */

/**
 * Filtra y calcula qué despliegues se deben conservar y cuáles eliminar según la política.
 *
 * @param {Array} deployments - Lista de objetos de despliegue devueltos por la API de Vercel.
 * @param {Object} options
 * @param {number} [options.keepProd=3] - Número de despliegues de producción a conservar.
 * @param {number} [options.keepPreview=2] - Número de despliegues de preview a conservar.
 * @returns {{ toKeep: Array, toDelete: Array }}
 */
export function determineDeploymentsToDelete(
  deployments = [],
  { keepProd = 3, keepPreview = 2 } = {},
) {
  if (!Array.isArray(deployments) || deployments.length === 0) {
    return { toKeep: [], toDelete: [] };
  }

  // Despliegues protegidos en construcción
  const isProtectedState = (d) =>
    d.state === "BUILDING" || d.state === "INITIALIZING";

  const getTimestamp = (d) => d.createdAt || d.created || 0;

  // Separar en producción y preview
  const prodDeployments = deployments
    .filter((d) => d.target === "production")
    .sort((a, b) => getTimestamp(b) - getTimestamp(a));

  const previewDeployments = deployments
    .filter((d) => d.target !== "production")
    .sort((a, b) => getTimestamp(b) - getTimestamp(a));

  // Seleccionar los que se conservan
  const keptProd = prodDeployments.slice(0, keepProd);
  const candidateDeleteProd = prodDeployments.slice(keepProd);

  const keptPreview = previewDeployments.slice(0, keepPreview);
  const candidateDeletePreview = previewDeployments.slice(keepPreview);

  const toKeep = [...keptProd, ...keptPreview];
  const toDelete = [...candidateDeleteProd, ...candidateDeletePreview].filter(
    (d) => !isProtectedState(d),
  );

  return { toKeep, toDelete };
}

function resolveVercelToken() {
  if (process.env.VERCEL_TOKEN) {
    return process.env.VERCEL_TOKEN;
  }
  const candidatePaths = [
    process.env.APPDATA
      ? path.join(process.env.APPDATA, "com.vercel.cli", "Data", "auth.json")
      : null,
    path.join(os.homedir(), ".local", "share", "com.vercel.cli", "auth.json"),
    path.join(os.homedir(), ".vercel", "auth.json"),
    path.join(
      os.homedir(),
      "Library",
      "Application Support",
      "com.vercel.cli",
      "auth.json",
    ),
  ].filter(Boolean);

  for (const p of candidatePaths) {
    try {
      if (fs.existsSync(p)) {
        const raw = fs.readFileSync(p, "utf8");
        const json = JSON.parse(raw);
        if (json.token) return json.token;
      }
    } catch {}
  }

  return undefined;
}

async function fetchAllDeployments({ token, teamId, projectId, appName }) {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let allDeployments = [];
  let nextTimestamp = null;

  while (true) {
    const queryParams = new URLSearchParams({ limit: "100" });
    if (projectId) queryParams.append("projectId", projectId);
    else if (appName) queryParams.append("app", appName);
    if (teamId) queryParams.append("teamId", teamId);
    if (nextTimestamp) queryParams.append("until", nextTimestamp);

    const listUrl = `https://api.vercel.com/v6/deployments?${queryParams.toString()}`;
    const res = await fetch(listUrl, { headers });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Error al listar despliegues (${res.status}): ${errText}`);
    }

    const data = await res.json();
    const batch = data.deployments || [];
    if (batch.length === 0) break;
    allDeployments.push(...batch);

    if (!data.pagination || !data.pagination.next) break;
    nextTimestamp = data.pagination.next;
  }

  return allDeployments;
}

function runViaGitHubActions({ projectName = "all", dryRun = false } = {}) {
  try {
    execSync("gh auth status", { stdio: "ignore" });
  } catch {
    return false;
  }

  console.log("ℹ️ VERCEL_TOKEN no encontrado en el entorno local ni en .env.local.");
  console.log("🚀 Delegando automáticamente en el workflow oficial de GitHub Actions (clean-vercel-storage.yml) con secrets.VERCEL_TOKEN...");

  try {
    const dryRunStr = dryRun ? "true" : "false";
    const projStr = projectName || "all";
    execSync(
      `gh workflow run clean-vercel-storage.yml -f project_name="${projStr}" -f dry_run="${dryRunStr}"`,
      { stdio: "inherit" },
    );
    console.log("⏳ Disparo registrado. Esperando a que el runner inicie el trabajo...");

    let runId = null;
    for (let attempt = 0; attempt < 8; attempt++) {
      try {
        const out = execSync(
          "gh run list --workflow=clean-vercel-storage.yml --limit 1 --json databaseId,status",
          { encoding: "utf8" },
        );
        const runs = JSON.parse(out);
        if (runs && runs.length > 0) {
          runId = runs[0].databaseId;
          break;
        }
      } catch {}
      // Pequeña espera sincrónica de 2s
      const end = Date.now() + 2000;
      while (Date.now() < end) {}
    }

    if (runId) {
      console.log(`🔗 Monitorizando ejecución en tiempo real (ID: ${runId})...`);
      execSync(`gh run watch ${runId}`, { stdio: "inherit" });
      try {
        console.log("\n📄 Resumen del registro de ejecución:");
        const logOutput = execSync(`gh run view ${runId} --log`, {
          encoding: "utf8",
        });
        const relevantLines = logOutput
          .split("\n")
          .filter(
            (l) =>
              l.includes("Procesando") ||
              l.includes("Total de despliegues") ||
              l.includes("Eliminado:") ||
              l.includes("Limpieza finalizada") ||
              l.includes("Completado para"),
          )
          .map((l) => l.replace(/^.*?\t.*?\t/, "   "));
        console.log(relevantLines.join("\n"));
      } catch {}
    } else {
      console.log("✅ El workflow de limpieza ha sido encolado en GitHub Actions.");
    }
    return true;
  } catch (err) {
    console.warn("⚠️ No se pudo completar la ejecución vía GitHub Actions:", err.message);
    return false;
  }
}

/**
 * Consulta los despliegues de Vercel y ejecuta la purga de los obsoletos.
 */
export async function cleanVercelDeployments({
  token = resolveVercelToken(),
  projectName = process.env.VERCEL_PROJECT_NAME || "all",
  teamId = process.env.VERCEL_TEAM_ID || "team_N2yQOBjjUNNmxUbs4jeK0vWY",
  keepProd = Number(process.env.KEEP_PROD) || 3,
  keepPreview = Number(process.env.KEEP_PREVIEW) || 2,
  dryRun = process.env.DRY_RUN === "true",
} = {}) {
  if (!token) {
    if (runViaGitHubActions({ projectName, dryRun })) {
      return {
        totalFound: 0,
        keptCount: 0,
        deletedCount: 0,
        delegatedToGitHub: true,
      };
    }
    throw new Error(
      "Falta el token de autenticación VERCEL_TOKEN (no encontrado en variables de entorno, .env.local, auth.json ni vía GitHub CLI)",
    );
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let targetProjects = [];

  // Si projectName es "all" o el valor por defecto "cms-blue-team",
  // obtenemos todos los proyectos del equipo (cms-blue-team y blue-team-web)
  if (projectName === "all" || projectName === "cms-blue-team" || !projectName) {
    const projectsUrl = teamId
      ? `https://api.vercel.com/v9/projects?teamId=${teamId}`
      : `https://api.vercel.com/v9/projects`;
    try {
      const res = await fetch(projectsUrl, { headers });
      if (res.ok) {
        const data = await res.json();
        targetProjects = (data.projects || []).map((p) => ({ id: p.id, name: p.name }));
        console.log(`🔍 Modo automático ("${projectName}"): Encontrados ${targetProjects.length} proyectos en Vercel.`);
      }
    } catch (e) {
      console.warn("No se pudieron listar todos los proyectos, recurriendo a proyecto individual:", e.message);
    }
  }

  if (targetProjects.length === 0) {
    targetProjects = [{ id: null, name: projectName || "cms-blue-team" }];
  }

  let totalFoundGlobal = 0;
  let keptCountGlobal = 0;
  let deletedCountGlobal = 0;

  for (const proj of targetProjects) {
    console.log(`\n========================================`);
    console.log(`📦 Procesando proyecto: ${proj.name}`);

    const deployments = await fetchAllDeployments({
      token,
      teamId,
      projectId: proj.id,
      appName: proj.id ? undefined : proj.name,
    });

    console.log(`📋 Total de despliegues encontrados: ${deployments.length}`);
    totalFoundGlobal += deployments.length;

    const { toKeep, toDelete } = determineDeploymentsToDelete(deployments, {
      keepProd,
      keepPreview,
    });

    keptCountGlobal += toKeep.length;

    console.log(`✅ Despliegues conservados (${toKeep.length}):`);
    for (const d of toKeep) {
      const date = new Date(d.createdAt || d.created).toISOString();
      console.log(
        `   - [${d.target || "preview"}] ${d.uid} (${d.name}) | ${date} | Estado: ${d.state}`,
      );
    }

    console.log(`\n🗑️ Despliegues a eliminar (${toDelete.length}):`);
    let deletedCount = 0;

    for (const d of toDelete) {
      const date = new Date(d.createdAt || d.created).toISOString();
      if (dryRun) {
        console.log(
          `   [DRY RUN] Se eliminaría: [${d.target || "preview"}] ${d.uid} (${d.name}) | ${date}`,
        );
        deletedCount++;
        continue;
      }

      const delUrl = teamId
        ? `https://api.vercel.com/v13/deployments/${d.uid}?teamId=${teamId}`
        : `https://api.vercel.com/v13/deployments/${d.uid}`;

      try {
        const delRes = await fetch(delUrl, {
          method: "DELETE",
          headers,
        });

        if (delRes.ok) {
          console.log(
            `   ✓ Eliminado: [${d.target || "preview"}] ${d.uid} (${d.name}) | ${date}`,
          );
          deletedCount++;
        } else {
          const errorMsg = await delRes.text();
          console.warn(
            `   ⚠️ No se pudo eliminar ${d.uid} (${delRes.status}): ${errorMsg}`,
          );
        }
      } catch (err) {
        console.error(`   ❌ Error de red al eliminar ${d.uid}:`, err.message);
      }
    }

    deletedCountGlobal += deletedCount;
    console.log(`Completado para ${proj.name}: ${deletedCount} eliminados.`);
  }

  return {
    totalFound: totalFoundGlobal,
    keptCount: keptCountGlobal,
    deletedCount: deletedCountGlobal,
  };
}

// Ejecución directa CLI si se llama como script principal
if (
  process.argv[1] &&
  (process.argv[1].endsWith("clean-vercel-deployments.mjs") ||
    process.argv[1].includes("clean-vercel-deployments"))
) {
  const args = process.argv.slice(2);
  const isDryRun = args.includes("--dry-run") || process.env.DRY_RUN === "true";
  const projectArgIndex = args.indexOf("--project");
  const projectArg =
    projectArgIndex !== -1 ? args[projectArgIndex + 1] : undefined;

  cleanVercelDeployments({
    dryRun: isDryRun,
    projectName: projectArg,
  })
    .then((result) => {
      if (result.delegatedToGitHub) {
        console.log(
          "\n✨ Limpieza de Vercel finalizada con éxito a través de GitHub Actions.",
        );
      } else {
        console.log(
          `\n✨ Limpieza finalizada: ${result.deletedCount} eliminados, ${result.keptCount} conservados.`,
        );
      }
      process.exit(0);
    })
    .catch((err) => {
      console.error("\n❌ Error durante la limpieza de Vercel:", err.message);
      process.exit(1);
    });
}
