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
    "DNI/NIE",
    "Correo",
    "Curso",
    "Lección",
    "Marca Inicio Servidor",
    "Marca Fin Servidor",
    "Tiempo Registrado (s)",
    "Tiempo Mínimo Exigido (s)",
    "Test de Aprendizaje",
    "Nota Test (%)",
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
      `"${(student.dni_nie || "No especificado").replace(/"/g, '""')}"`,
      `"${(student.email || "").replace(/"/g, '""')}"`,
      `"${(les.courseTitle || "Curso").replace(/"/g, '""')}"`,
      `"${(les.title || item.lesson_id).replace(/"/g, '""')}"`,
      `"${item.started_at ? new Date(item.started_at).toLocaleString("es-ES") : "—"}"`,
      `"${item.completed_at ? new Date(item.completed_at).toLocaleString("es-ES") : "—"}"`,
      elapsed,
      minSecs,
      `"${(quiz ? quiz.title : "Sin Test").replace(/"/g, '""')}"`,
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
    "DNI/NIE",
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
      `"${(prof?.dni_nie || "No especificado").replace(/"/g, '""')}"`,
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
          <td style="padding: 10px 12px; font-size: 11px;">
            ${
              quiz
                ? `<div style="font-weight: 600; color: #334155;">${quiz.title}</div>
                   <div style="font-size: 10px; color: #64748b;">${latestAttempt ? `Nota: <strong>${latestAttempt.score_percentage}%</strong>` : "Sin realizar"}</div>`
                : `<span style="color: #94a3b8; font-size: 10px;">—</span>`
            }
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
        @page { size: A4 portrait; margin: 12mm; }
        body { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #0f172a; margin: 0; padding: 15px; font-size: 12px; line-height: 1.4; }
        .header { display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid #1a80ff; padding-bottom: 12px; margin-bottom: 16px; }
        .logo-title { font-size: 20px; font-weight: 900; color: #1a80ff; letter-spacing: -0.5px; }
        .sub-title { font-size: 10px; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; }
        .audit-badge { background: #0f172a; color: #fff; padding: 5px 12px; border-radius: 6px; font-size: 10px; font-weight: 800; font-family: monospace; }
        
        .student-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px 18px; margin-bottom: 16px; display: grid; grid-template-columns: 2.2fr 1fr; gap: 15px; }
        .student-name { font-size: 17px; font-weight: 800; color: #0f172a; margin: 0; }
        .student-meta { font-size: 11px; color: #475569; margin-top: 4px; line-height: 1.5; }
        
        .metrics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 18px; }
        .metric-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px; text-align: center; }
        .metric-val { font-size: 16px; font-weight: 900; color: #1a80ff; margin-top: 2px; }
        .metric-lbl { font-size: 9px; font-weight: 700; color: #64748b; text-transform: uppercase; }

        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 11px; }
        th { background: #f1f5f9; text-align: left; padding: 8px 10px; font-size: 9px; text-transform: uppercase; font-weight: 800; color: #475569; border-bottom: 2px solid #cbd5e1; }
        
        .paper-exam-card { background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 12px 16px; margin-bottom: 25px; page-break-inside: avoid; }
        .paper-exam-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin-bottom: 10px; }

        .footer-signatures { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-top: 25px; padding-top: 15px; border-top: 1px solid #e2e8f0; page-break-inside: avoid; }
        .sig-line { border-top: 1px dashed #94a3b8; margin-top: 35px; text-align: center; font-size: 10px; font-weight: 700; color: #334155; padding-top: 4px; }

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
          <div class="sub-title">Control de Formación Teórica Online y Expediente de Alumno (AESA / EASA)</div>
        </div>
        <div style="text-align: right;">
          <div class="audit-badge">${certHash}</div>
          <div style="font-size: 9px; color: #64748b; margin-top: 3px;">Emisión: ${nowStr}</div>
        </div>
      </div>

      <div class="student-box">
        <div>
          <div style="font-size: 9px; font-weight: 800; color: #1a80ff; text-transform: uppercase; letter-spacing: 0.5px;">Piloto Alumno Registrado</div>
          <h1 class="student-name">${student.full_name || "Piloto Alumno"}</h1>
          <div class="student-meta">
            <strong>DNI / NIE / Pasaporte:</strong> <span style="font-family: monospace; font-weight: 800; color: #0f172a; background: #e2e8f0; padding: 1px 6px; border-radius: 4px;">${student.dni_nie || "No especificado"}</span><br/>
            <strong>Correo Electrónico:</strong> <span style="font-family: monospace;">${student.email}</span> &nbsp;|&nbsp; 
            <strong>Centro:</strong> ATO Blue Team Aviation
          </div>
        </div>
        <div style="text-align: right; justify-self: end; align-self: center;">
          <span style="display: block; background: #dcfce7; color: #15803d; border: 1px solid #bbf7d0; padding: 6px 12px; border-radius: 999px; font-size: 11px; font-weight: 800; text-align: center;">
            ✓ Cumplimiento Horas: ${complianceRate}%
          </span>
          <span style="font-size: 9px; color: #16a34a; font-weight: 700; display: block; margin-top: 4px; text-align: center;">
            Fase Teórica Online Completada
          </span>
        </div>
      </div>

      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-lbl">Tiempo de Estudio Online Computado</div>
          <div class="metric-val">${Math.floor(totalSecs / 60)}m ${totalSecs % 60}s</div>
        </div>
        <div class="metric-card">
          <div class="metric-lbl">Lecciones Completadas</div>
          <div class="metric-val" style="color: #0f172a;">${completedCount}</div>
        </div>
        <div class="metric-card">
          <div class="metric-lbl">Verificación Servidor PostgreSQL</div>
          <div class="metric-val" style="color: #16a34a;">${compliantCount} / ${completedCount} Acreditadas</div>
        </div>
      </div>

      <h3 style="font-size: 12px; font-weight: 800; margin-bottom: 8px; color: #0f172a;">Historial de Tiempos en Servidor y Tests de Aprendizaje</h3>
      <table>
        <thead>
          <tr>
            <th>Curso / Lección</th>
            <th>Inicio Servidor</th>
            <th>Fin Servidor</th>
            <th>Tiempo Registrado</th>
            <th>Test Aprendizaje</th>
            <th>Estado Verificación</th>
          </tr>
        </thead>
        <tbody>
          ${tableRowsHtml}
        </tbody>
      </table>

      <!-- Acta Oficial de Evaluación Presencial en Papel (Exigida por AESA) -->
      <div class="paper-exam-card">
        <div class="paper-exam-header">
          <strong style="font-size: 11px; text-transform: uppercase; color: #0f172a; letter-spacing: 0.5px;">
            📝 Acta de Evaluación Presencial en Papel (Examen de Progreso / Final de Curso)
          </strong>
          <span style="font-size: 9px; color: #64748b; font-weight: 600;">Cumplimentar por el Instructor Evaluador</span>
        </div>
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 12px; font-size: 11px; align-items: center;">
          <div>
            <strong>Materia / Curso de Vuelo:</strong> ___________________________________
          </div>
          <div>
            <strong>Calificación:</strong> [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ] %
          </div>
          <div>
            <strong>Dictamen:</strong> &nbsp; [ &nbsp; ] APTO &nbsp;&nbsp; [ &nbsp; ] NO APTO
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 12px; font-size: 11px; margin-top: 8px;">
          <div>
            <strong>Observaciones / Incidencias:</strong> ________________________________________________
          </div>
          <div>
            <strong>Fecha Examen Presencial:</strong> _____ / _____ / 202___
          </div>
        </div>
      </div>

      <!-- Firmas Oficiales -->
      <div class="footer-signatures">
        <div>
          <div class="sig-line">
            Instructor Responsable de Formación<br/>
            <span style="font-size: 9px; font-weight: normal; color: #64748b;">Firma y Nº Licencia</span>
          </div>
        </div>
        <div>
          <div class="sig-line">
            Firma de Conformidad del Alumno<br/>
            <span style="font-size: 9px; font-weight: normal; color: #64748b;">Nombre y DNI / NIE</span>
          </div>
        </div>
        <div>
          <div class="sig-line">
            Jefe de Enseñanza / Dirección ATO<br/>
            <span style="font-size: 9px; font-weight: normal; color: #64748b;">Escuela de Aviación Blue Team</span>
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
