import { generateCertificateVerificationCode } from "./course-completion";

export type CertificateData = {
  studentName: string;
  studentDni: string;
  studentEmail: string;
  courseTitle: string;
  courseCode?: string;
  accreditedHours?: number;
  examType: "in_person" | "online" | "none";
  examTitle: string;
  examDate: string;
  examScore: number;
  examinerName?: string;
  classroom?: string;
  issueDate?: string;
};

export function exportOfficialCertificatePDF(data: CertificateData) {
  const printWin = window.open("", "_blank", "width=1100,height=850");
  if (!printWin) {
    alert(
      "Por favor permite las ventanas emergentes (popups) para generar e imprimir el diploma oficial.",
    );
    return;
  }

  const issueDateFormatted = new Date(data.issueDate || Date.now()).toLocaleDateString(
    "es-ES",
    { day: "numeric", month: "long", year: "numeric" },
  );

  const examDateFormatted = new Date(data.examDate).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const verificationCode = generateCertificateVerificationCode(
    data.studentDni || data.studentEmail,
    data.courseTitle,
    data.issueDate || new Date().toISOString(),
  );

  const hours = data.accreditedHours || 25;

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Certificado Oficial ATO - ${data.studentName} - ${data.courseTitle}</title>
  <style>
    @page {
      size: A4 landscape;
      margin: 10mm;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Georgia', 'Cambria', serif;
      background: #f8fafc;
      color: #0a224a;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 10px;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .diploma-card {
      width: 100%;
      max-width: 1040px;
      height: 720px;
      background: #ffffff;
      border: 12px double #0a224a;
      outline: 3px solid #d4af37;
      outline-offset: -7px;
      padding: 40px 50px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      box-shadow: 0 15px 35px rgba(10,34,74,0.15);
    }
    .corner-decor {
      position: absolute;
      width: 35px;
      height: 35px;
      border: 3px solid #d4af37;
    }
    .corner-tl { top: 12px; left: 12px; border-right: none; border-bottom: none; }
    .corner-tr { top: 12px; right: 12px; border-left: none; border-bottom: none; }
    .corner-bl { bottom: 12px; left: 12px; border-right: none; border-top: none; }
    .corner-br { bottom: 12px; right: 12px; border-left: none; border-top: none; }

    /* Header */
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 15px;
    }
    .school-brand {
      text-align: left;
    }
    .school-title {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 2px;
      color: #0a224a;
    }
    .school-sub {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      font-size: 10px;
      font-weight: 700;
      color: #64748b;
      letter-spacing: 1.5px;
      margin-top: 2px;
    }
    .ato-badge {
      text-align: right;
      font-family: 'Helvetica Neue', Arial, sans-serif;
      font-size: 10px;
      font-weight: 800;
      color: #0a224a;
      line-height: 1.4;
    }
    .ato-badge span {
      display: inline-block;
      background: #0a224a;
      color: #ffffff;
      padding: 3px 8px;
      border-radius: 4px;
      letter-spacing: 1px;
    }

    /* Certificate Body */
    .cert-heading {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 4px;
      color: #b8860b;
      text-transform: uppercase;
      margin-top: 10px;
    }
    .cert-main-title {
      font-size: 32px;
      font-weight: 800;
      color: #0a224a;
      letter-spacing: 1px;
      margin: 4px 0 10px 0;
    }
    .cert-intro {
      font-size: 14px;
      font-style: italic;
      color: #475569;
    }
    .student-name {
      font-size: 28px;
      font-weight: 900;
      color: #0a224a;
      border-bottom: 2px solid #d4af37;
      display: inline-block;
      padding: 2px 25px;
      margin: 8px auto;
    }
    .student-id {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      font-size: 12px;
      font-weight: 700;
      color: #334155;
      letter-spacing: 1px;
    }
    .cert-statement {
      font-size: 14px;
      color: #334155;
      max-width: 820px;
      margin: 10px auto;
      line-height: 1.5;
    }
    .course-name {
      font-size: 20px;
      font-weight: 800;
      color: #0a224a;
      font-style: italic;
      margin: 4px 0;
    }

    /* Verification Box */
    .exam-verification-strip {
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 8px 16px;
      margin: 6px auto;
      display: inline-flex;
      align-items: center;
      gap: 20px;
      font-family: 'Helvetica Neue', Arial, sans-serif;
      font-size: 11px;
      color: #1e293b;
    }
    .exam-verification-strip strong {
      color: #0a224a;
    }

    /* Signatures */
    .signatures-block {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 15px;
      padding-top: 10px;
    }
    .sig-col {
      width: 250px;
      text-align: center;
    }
    .sig-line {
      border-bottom: 1.5px solid #0a224a;
      margin-bottom: 6px;
      height: 35px;
    }
    .sig-title {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      font-size: 11px;
      font-weight: 800;
      color: #0a224a;
    }
    .sig-sub {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      font-size: 9px;
      color: #64748b;
    }
    .seal-center {
      text-align: center;
      width: 140px;
    }
    .seal-badge {
      width: 70px;
      height: 70px;
      border: 3px double #d4af37;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto 6px auto;
      background: #faf8f0;
      color: #0a224a;
      font-family: 'Helvetica Neue', Arial, sans-serif;
      font-size: 9px;
      font-weight: 900;
      letter-spacing: 0.5px;
    }

    /* Footer & Verification Code */
    .cert-footer {
      border-top: 1px solid #e2e8f0;
      padding-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: 'Helvetica Neue', Arial, sans-serif;
      font-size: 9px;
      color: #64748b;
    }
    .csv-code {
      font-family: monospace;
      font-weight: 700;
      color: #0a224a;
      letter-spacing: 1px;
    }

    /* Action bar on screen */
    .screen-action-bar {
      position: fixed;
      top: 15px;
      right: 15px;
      z-index: 100;
      display: flex;
      gap: 10px;
    }
    .btn-print {
      background: #0a224a;
      color: #ffffff;
      border: none;
      padding: 10px 18px;
      border-radius: 8px;
      font-family: 'Helvetica Neue', Arial, sans-serif;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .btn-print:hover {
      background: #1a80ff;
    }
    @media print {
      body {
        background: transparent;
        padding: 0;
      }
      .screen-action-bar {
        display: none !important;
      }
      .diploma-card {
        box-shadow: none;
        width: 100%;
        height: 100vh;
        max-width: none;
      }
    }
  </style>
</head>
<body>
  <div class="screen-action-bar">
    <button class="btn-print" onclick="window.print()">🖨️ Imprimir / Guardar en PDF</button>
  </div>

  <div class="diploma-card">
    <div class="corner-decor corner-tl"></div>
    <div class="corner-decor corner-tr"></div>
    <div class="corner-decor corner-bl"></div>
    <div class="corner-decor corner-br"></div>

    <!-- Header -->
    <div class="header">
      <div class="school-brand">
        <div class="school-title">BLUE TEAM FLIGHT SCHOOL</div>
        <div class="school-sub">ACADEMIA SUPERIOR DE AVIACIÓN Y CIBERSEGURIDAD</div>
      </div>
      <div class="ato-badge">
        <span>ORGANIZACIÓN DE ENTRENAMIENTO ATO</span>
        <div style="margin-top: 3px; color: #475569;">Aprobación Oficial AESA / EASA</div>
      </div>
    </div>

    <!-- Body -->
    <div>
      <div class="cert-heading">Certificado Oficial de Aprovechamiento</div>
      <h1 class="cert-main-title">DIPLOMA DE FORMACIÓN TEÓRICA</h1>
      <p class="cert-intro">La Dirección de Instrucción y el Claustro Docente de Blue Team certifican que:</p>

      <div class="student-name">${data.studentName}</div>
      <div class="student-id">DNI / NIE / PASAPORTE: ${data.studentDni || "REGISTRADO EN EXPEDIENTE"}</div>

      <p class="cert-statement">
        Ha cursado y superado con pleno aprovechamiento todas las lecciones y requisitos del programa oficial de:
      </p>

      <div class="course-name">${data.courseTitle}</div>

      <div class="exam-verification-strip">
        <div><strong>Horas Lectivas Acreditadas:</strong> ${hours} h</div>
        <div><strong>Tipo de Evaluación:</strong> ${
          data.examType === "none"
            ? "Acreditación por Cumplimiento de Lectura (Examen no aplica)"
            : data.examType === "in_person"
              ? "Examen Presencial en Papel"
              : "Evaluación Teórica"
        }</div>
        <div><strong>Calificación:</strong> ${
          data.examType === "none"
            ? "Acreditado 100% Lectura"
            : `${data.examScore}% (Apto &ge; 75%)`
        }</div>
        <div><strong>Fecha:</strong> ${examDateFormatted}</div>
        ${data.examinerName ? `<div><strong>Supervisor / Examinador:</strong> ${data.examinerName}</div>` : ""}
      </div>
    </div>

    <!-- Signatures -->
    <div class="signatures-block">
      <div class="sig-col">
        <div class="sig-line"></div>
        <div class="sig-title">${data.examinerName || "Instructor Examinador"}</div>
        <div class="sig-sub">Examinador / Responsable de Convocatoria</div>
      </div>

      <div class="seal-center">
        <div class="seal-badge">
          <span>BLUE TEAM</span>
          <span style="font-size: 7px; color: #b8860b;">ATO OFICIAL</span>
          <span style="font-size: 8px;">★ ★ ★</span>
        </div>
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 9px; font-weight: bold; color: #0a224a;">
          VALIDEZ AESA
        </div>
      </div>

      <div class="sig-col">
        <div class="sig-line"></div>
        <div class="sig-title">Jefatura de Enseñanza (HT)</div>
        <div class="sig-sub">Head of Training & Director ATO</div>
      </div>
    </div>

    <!-- Footer -->
    <div class="cert-footer">
      <div>Expedido en Madrid a ${issueDateFormatted}</div>
      <div>Código Seguro de Verificación (CSV): <span class="csv-code">${verificationCode}</span></div>
      <div>Reglamento (UE) 1178/2011 Part-ORA / Part-FCL</div>
    </div>
  </div>
</body>
</html>`;

  printWin.document.open();
  printWin.document.write(html);
  printWin.document.close();
}
