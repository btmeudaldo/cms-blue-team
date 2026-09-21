/* global process, console, fetch, URLSearchParams */
/**
 * @file clean-vercel-deployments.mjs
 * @description Política automatizada de retención de despliegues en Vercel para CMS Blue Team.
 * Conserva estrictamente las N últimas versiones de producción y las M últimas de preview,
 * purgando los despliegues históricos obsoletos para mantenerse siempre dentro de la cuota gratuita de Vercel.
 */

/**
 * Filtra y calcula qué despliegues se deben conservar y cuáles eliminar según la política.
 *
 * @param {Array} deployments - Lista de objetos de despliegue devueltos por la API de Vercel.
 * @param {Object} options
 * @param {number} [options.keepProd=2] - Número de despliegues de producción a conservar.
 * @param {number} [options.keepPreview=1] - Número de despliegues de preview a conservar.
 * @returns {{ toKeep: Array, toDelete: Array }}
 */
export function determineDeploymentsToDelete(
  deployments = [],
  { keepProd = 2, keepPreview = 1 } = {},
) {
  if (!Array.isArray(deployments) || deployments.length === 0) {
    return { toKeep: [], toDelete: [] };
  }

  // Despliegues protegidos en construcción
  const isProtectedState = (d) =>
    d.state === "BUILDING" || d.state === "INITIALIZING";

  // Separar en producción y preview
  const prodDeployments = deployments
    .filter((d) => d.target === "production")
    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

  const previewDeployments = deployments
    .filter((d) => d.target !== "production")
    .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

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

/**
 * Consulta los despliegues de Vercel y ejecuta la purga de los obsoletos.
 */
export async function cleanVercelDeployments({
  token = process.env.VERCEL_TOKEN,
  projectName = process.env.VERCEL_PROJECT_NAME || "cms-blue-team",
  teamId = process.env.VERCEL_TEAM_ID || "team_N2yQOBjjUNNmxUbs4jeK0vWY",
  keepProd = 2,
  keepPreview = 1,
  dryRun = process.env.DRY_RUN === "true",
} = {}) {
  if (!token) {
    throw new Error("Falta el token de autenticación VERCEL_TOKEN");
  }

  const queryParams = new URLSearchParams({
    limit: "100",
  });
  if (projectName && projectName !== "all") {
    queryParams.append("app", projectName);
  }
  if (teamId) {
    queryParams.append("teamId", teamId);
  }

  const listUrl = `https://api.vercel.com/v6/deployments?${queryParams.toString()}`;

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  console.log(
    `🔍 Consultando despliegues en Vercel (Proyecto: ${projectName || "todos"})...`,
  );
  const res = await fetch(listUrl, { headers });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(
      `Error al listar despliegues de Vercel (${res.status}): ${errText}`,
    );
  }

  const data = await res.json();
  const deployments = data.deployments || [];
  console.log(`📋 Se encontraron ${deployments.length} despliegues en total.`);

  const { toKeep, toDelete } = determineDeploymentsToDelete(deployments, {
    keepProd,
    keepPreview,
  });

  console.log(`✅ Despliegues conservados (${toKeep.length}):`);
  for (const d of toKeep) {
    const date = new Date(d.createdAt).toISOString();
    console.log(
      `   - [${d.target || "preview"}] ${d.uid} (${d.name}) | ${date} | Estado: ${d.state}`,
    );
  }

  console.log(`\n🗑️ Despliegues a eliminar (${toDelete.length}):`);
  let deletedCount = 0;

  for (const d of toDelete) {
    const date = new Date(d.createdAt).toISOString();
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

  return {
    totalFound: deployments.length,
    keptCount: toKeep.length,
    deletedCount,
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
      console.log(
        `\n✨ Limpieza finalizada: ${result.deletedCount} eliminados, ${result.keptCount} conservados.`,
      );
      process.exit(0);
    })
    .catch((err) => {
      console.error("\n❌ Error durante la limpieza de Vercel:", err.message);
      process.exit(1);
    });
}
