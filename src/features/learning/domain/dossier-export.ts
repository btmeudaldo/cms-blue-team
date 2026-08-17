import { evaluateLessonCompletion } from "./quiz-evaluation";

export function exportDossierCSV(
  student: any,
  records: any[],
  lessonMap: Map<string, any>,
  quizzes: any[] = [],
  quizAttempts: any[] = [],
) {
  const headers = [
    "Alumno",
    "Correo",
    "Curso",
    "Lección",
    "Marca Inicio Servidor",
    "Marca Fin Servidor",
    "Tiempo Registrado (s)",
    "Tiempo Mínimo Exigido (s)",
    "Examen Asociado",
    "Nota Examen (%)",
    "Dictamen de Verificación",
  ];

  const rows = records.map((item: any) => {
    const les = lessonMap.get(item.lesson_id) || {
      title: item.lesson_id,
      min_seconds: 30,
      courseTitle: "Curso General",
    };
    const minSecs = les.min_seconds || 30;
    const elapsed = item.elapsed_seconds || 0;
    const isCompleted = item.is_completed;

    const quiz = (quizzes || []).find(
      (q: any) =>
        q.lesson_id === item.lesson_id ||
        q.lesson_slug === item.lesson_id ||
        q.id === item.lesson_id ||
        q.id === `quiz-${item.lesson_id}` ||
        (les?.id && q.lesson_id === les.id) ||
        (les?.slug && q.lesson_slug === les.slug),
    );

    const userAttempts = (quizAttempts || []).filter((qa: any) => {
      const userMatch =
        qa.user_id === item.user_id ||
        qa.user_id === student?.email ||
        qa.user_id === student?.id;

      if (!userMatch) return false;

      if (quiz) {
        return (
          qa.quiz_id === quiz.id ||
          qa.quiz_id === quiz.lesson_id ||
          qa.quiz_id === quiz.lesson_slug ||
          qa.lesson_id === item.lesson_id ||
          qa.lesson_slug === item.lesson_id ||
          (les?.id && qa.lesson_id === les.id) ||
          (les?.slug && qa.lesson_slug === les.slug)
        );
      }
      return (
        qa.quiz_id === item.lesson_id ||
        qa.lesson_id === item.lesson_id ||
        qa.lesson_slug === item.lesson_id ||
        (les?.id && qa.lesson_id === les.id) ||
        (les?.slug && qa.lesson_slug === les.slug)
      );
    });

    const passedAttempt = userAttempts.find((qa: any) => qa.passed);
    const latestAttempt =
      passedAttempt ||
      (userAttempts.length > 0 ? userAttempts[userAttempts.length - 1] : null);

    const evaluation = evaluateLessonCompletion(
      elapsed,
      minSecs,
      isCompleted,
      quiz || null,
      latestAttempt || null,
    );

    return [
      `"${(student.full_name || "Piloto Alumno").replace(/"/g, '""')}"`,
      `"${(student.email || "").replace(/"/g, '""')}"`,
      `"${(les.courseTitle || "Curso").replace(/"/g, '""')}"`,
      `"${(les.title || item.lesson_id).replace(/"/g, '""')}"`,
      `"${item.started_at ? new Date(item.started_at).toLocaleString("es-ES") : "—"}"`,
      `"${item.completed_at ? new Date(item.completed_at).toLocaleString("es-ES") : "—"}"`,
      elapsed,
      minSecs,
      `"${(quiz ? quiz.title : "Sin Examen").replace(/"/g, '""')}"`,
      latestAttempt ? `${latestAttempt.score_percentage}%` : "—",
      `"${evaluation.statusLabel.replace(/"/g, '""')}"`,
    ].join(",");
  });

  const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const filename = `Expediente_Academico_${(student.full_name || "Alumno").replace(/\s+/g, "_")}_${new Date().toISOString().slice(0, 10)}.csv`;
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function exportGlobalAuditCSV(
  records: any[],
  profileMap: Map<string, any>,
  lessonMap: Map<string, any>,
  profiles: any[],
) {
  const headers = [
    "ID Usuario",
    "Estudiante",
    "Correo",
    "Curso",
    "Lección",
    "Inicio Servidor",
    "Fin Servidor",
    "Tiempo Registrado (s)",
    "Tiempo Mínimo (s)",
    "Estado Verificación",
  ];

  const rows = records.map((item: any) => {
    const prof =
      profileMap.get(item.user_id) ||
      profiles.find(
        (p: any) => p.id === item.user_id || p.email === item.user_id,
      ) ||
      profiles[0];
    const les = lessonMap.get(item.lesson_id) || {
      title: item.lesson_id,
      min_seconds: 30,
      courseTitle: "Curso",
    };
    const minSecs = les.min_seconds || 30;
    const elapsed = item.elapsed_seconds || 0;
    const isCompleted = item.is_completed;
    const isCompliant = elapsed >= minSecs && isCompleted;

    const statusStr = isCompliant
      ? "Verificado en Servidor"
      : isCompleted
        ? "Finalizado (Tiempo Incompleto)"
        : "En Progreso";

    return [
      `"${item.user_id}"`,
      `"${(prof?.full_name || "Estudiante").replace(/"/g, '""')}"`,
      `"${(prof?.email || "").replace(/"/g, '""')}"`,
      `"${(les.courseTitle || "Curso").replace(/"/g, '""')}"`,
      `"${(les.title || item.lesson_id).replace(/"/g, '""')}"`,
      `"${item.started_at ? new Date(item.started_at).toLocaleString("es-ES") : "—"}"`,
      `"${item.completed_at ? new Date(item.completed_at).toLocaleString("es-ES") : "—"}"`,
      elapsed,
      minSecs,
      `"${statusStr}"`,
    ].join(",");
  });

  const csvContent = "\uFEFF" + [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const filename = `Auditoria_Global_BlueTeam_${new Date().toISOString().slice(0, 10)}.csv`;
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function exportDossierPDF(
  student: any,
  records: any[],
  lessonMap: Map<string, any>,
  quizzes: any[] = [],
  quizAttempts: any[] = [],
) {
  const printWin = window.open("", "_blank", "width=900,height=1000");
  if (!printWin) {
    alert(
      "Por favor permite las ventanas emergentes (popups) para descargar el expediente en PDF.",
    );
    return;
  }

  let totalSecs = 0;
  let completedCount = 0;
  let compliantCount = 0;

  for (const pr of records) {
    const secs = pr.elapsed_seconds || 0;
    totalSecs += secs;
    if (pr.is_completed) {
      completedCount++;
      const les = lessonMap.get(pr.lesson_id);
      if (secs >= (les?.min_seconds || 30)) compliantCount++;
    }
  }

  const complianceRate =
    completedCount > 0
      ? Math.round((compliantCount / completedCount) * 100)
      : 100;

  const nowStr = new Date().toLocaleString("es-ES", {
    dateStyle: "full",
    timeStyle: "medium",
  });
  const certHash = `BT-AUDIT-2026-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

  const tableRowsHtml = records
    .map((item: any, idx: number) => {
      const les = lessonMap.get(item.lesson_id) || {
        title: item.lesson_id,
        min_seconds: 30,
        courseTitle: "Curso General",
      };
      const minSecs = les.min_seconds || 30;
      const elapsed = item.elapsed_seconds || 0;
      const isCompleted = item.is_completed;

      const quiz = (quizzes || []).find(
        (q: any) =>
          q.lesson_id === item.lesson_id ||
          q.lesson_slug === item.lesson_id ||
          q.id === item.lesson_id ||
          q.id === `quiz-${item.lesson_id}` ||
          (les?.id && q.lesson_id === les.id) ||
          (les?.slug && q.lesson_slug === les.slug),
      );

      const userAttempts = (quizAttempts || []).filter((qa: any) => {
        const userMatch =
          qa.user_id === item.user_id ||
          qa.user_id === student?.email ||
          qa.user_id === student?.id;

        if (!userMatch) return false;

        if (quiz) {
          return (
            qa.quiz_id === quiz.id ||
            qa.quiz_id === quiz.lesson_id ||
            qa.quiz_id === quiz.lesson_slug ||
            qa.lesson_id === item.lesson_id ||
            qa.lesson_slug === item.lesson_id ||
            (les?.id && qa.lesson_id === les.id) ||
            (les?.slug && qa.lesson_slug === les.slug)
          );
        }
        return (
          qa.quiz_id === item.lesson_id ||
          qa.lesson_id === item.lesson_id ||
          qa.lesson_slug === item.lesson_id ||
          (les?.id && qa.lesson_id === les.id) ||
          (les?.slug && qa.lesson_slug === les.slug)
        );
      });

      const passedAttempt = userAttempts.find((qa: any) => qa.passed);
      const latestAttempt =
        passedAttempt ||
        (userAttempts.length > 0
          ? userAttempts[userAttempts.length - 1]
          : null);

      const evaluation = evaluateLessonCompletion(
        elapsed,
        minSecs,
        isCompleted,
        quiz || null,
        latestAttempt || null,
      );

      return `
        <tr style="border-bottom: 1px solid #e2e8f0;">
          <td style="padding: 10px 12px; font-weight: bold; color: #0f172a;">
            ${idx + 1}. ${les.title}<br/>
            <span style="font-size: 11px; color: #1a80ff; font-weight: normal;">${les.courseTitle}</span>
          </td>
          <td style="padding: 10px 12px; font-family: monospace; font-size: 11px; color: #475569;">
            ${item.started_at ? new Date(item.started_at).toLocaleString("es-ES") : "—"}
          </td>
          <td style="padding: 10px 12px; font-family: monospace; font-size: 11px; color: #475569;">
            ${item.completed_at ? new Date(item.completed_at).toLocaleString("es-ES") : "—"}
          </td>
          <td style="padding: 10px 12px; font-size: 12px; color: #0f172a;">
            <strong>${isCompleted ? `${elapsed}s` : "En curso..."}</strong><br/>
            <span style="font-size: 10px; color: #64748b;">Mín. ${minSecs}s</span>
          </td>
          <td style="padding: 10px 12px;">
            <span style="display: inline-block; padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: bold; ${
              evaluation.statusBadgeVariant === "success"
                ? "background: #dcfce7; color: #15803d; border: 1px solid #bbf7d0;"
                : evaluation.statusBadgeVariant === "error"
                  ? "background: #ffe4e6; color: #be123c; border: 1px solid #fecdd3;"
                  : evaluation.statusBadgeVariant === "warning"
                    ? "background: #fef3c7; color: #b45309; border: 1px solid #fde68a;"
                    : "background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe;"
            }">
              ${evaluation.statusLabel}
            </span>
          </td>
        </tr>
      `;
    })
    .join("");

  const printHtml = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>Expediente_Academico_${(student.full_name || "Alumno").replace(/\s+/g, "_")}</title>
      <style>
        @page { size: A4 portrait; margin: 15mm; }
        body { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0f172a; margin: 0; padding: 20px; font-size: 13px; line-height: 1.5; }
        .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid #1a80ff; padding-bottom: 15px; margin-bottom: 20px; }
        .logo-title { font-size: 20px; font-weight: 900; color: #1a80ff; letter-spacing: -0.5px; }
        .sub-title { font-size: 11px; color: #64748b; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
        .audit-badge { background: #0f172a; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 11px; font-weight: 800; font-family: monospace; }
        
        .student-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 15px 20px; margin-bottom: 20px; display: grid; grid-template-columns: 2fr 1fr; gap: 15px; }
        .student-name { font-size: 18px; font-weight: 800; color: #0f172a; margin: 0; }
        .student-email { font-size: 12px; color: #475569; font-family: monospace; margin-top: 2px; }
        
        .metrics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 25px; }
        .metric-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 12px; text-align: center; }
        .metric-val { font-size: 18px; font-weight: 900; color: #1a80ff; margin-top: 4px; }
        .metric-lbl { font-size: 10px; font-weight: 700; color: #64748b; text-transform: uppercase; }

        table { width: 100%; border-collapse: collapse; margin-bottom: 30px; font-size: 12px; }
        th { background: #f1f5f9; text-align: left; padding: 10px 12px; font-size: 10px; text-transform: uppercase; font-weight: 800; color: #475569; border-bottom: 2px solid #cbd5e1; }
        
        .footer-signatures { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; page-break-inside: avoid; }
        .sig-line { border-top: 1px dashed #94a3b8; margin-top: 40px; text-align: center; font-size: 11px; font-weight: 700; color: #334155; padding-top: 6px; }

        @media print {
          body { padding: 0; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div>
          <div class="logo-title">✈️ ESCUELA DE AVIACIÓN BLUE TEAM</div>
          <div class="sub-title">Expediente Académico e Inspección de Auditoría (DGAC / EASA / FAA)</div>
        </div>
        <div style="text-align: right;">
          <div class="audit-badge">${certHash}</div>
          <div style="font-size: 10px; color: #64748b; margin-top: 4px;">Emisión: ${nowStr}</div>
        </div>
      </div>

      <div class="student-box">
        <div>
          <div style="font-size: 10px; font-weight: 800; color: #1a80ff; text-transform: uppercase;">Piloto Alumno Registrado</div>
          <h1 class="student-name">${student.full_name || "Piloto Alumno"}</h1>
          <div class="student-email">${student.email}</div>
        </div>
        <div style="text-align: right; justify-self: end; align-self: center;">
          <span style="background: #dcfce7; color: #15803d; border: 1px solid #bbf7d0; padding: 6px 12px; border-radius: 999px; font-size: 11px; font-weight: 800;">
            ✓ Cumplimiento: ${complianceRate}%
          </span>
        </div>
      </div>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-lbl">Tiempo Estudio Acumulado</div>
          <div class="metric-val">${Math.floor(totalSecs / 60)}m ${totalSecs % 60}s</div>
        </div>
        <div class="metric-card">
          <div class="metric-lbl">Lecciones Completadas</div>
          <div class="metric-val" style="color: #0f172a;">${completedCount}</div>
        </div>
        <div class="metric-card">
          <div class="metric-lbl">Verificación Servidor</div>
          <div class="metric-val" style="color: #16a34a;">${compliantCount} / ${completedCount}</div>
        </div>
      </div>

      <h3 style="font-size: 14px; font-weight: 800; margin-bottom: 10px; color: #0f172a;">Historial Atómico de Tiempos y Evaluaciones Teóricas</h3>
      <table>
        <thead>
          <tr>
            <th>Curso / Lección</th>
            <th>Inicio Servidor</th>
            <th>Fin Servidor</th>
            <th>Tiempo Registrado</th>
            <th>Estado Verificación</th>
          </tr>
        </thead>
        <tbody>
          ${tableRowsHtml}
        </tbody>
      </table>

      <div class="footer-signatures">
        <div>
          <div class="sig-line">
            Director de Instrucción de Vuelo<br/>
            <span style="font-size: 10px; font-weight: normal; color: #64748b;">Escuela de Aviación Blue Team</span>
          </div>
        </div>
        <div>
          <div class="sig-line">
            Inspector de Seguridad Operacional<br/>
            <span style="font-size: 10px; font-weight: normal; color: #64748b;">Auditoría Técnica Certificada</span>
          </div>
        </div>
      </div>

      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `;

  printWin.document.open();
  printWin.document.write(printHtml);
  printWin.document.close();
}
