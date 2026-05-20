// HTML email template — Comunicação interna (SmarNet Intranet)
// Compatível com clientes de e-mail (Outlook, Gmail, Apple Mail) e suporte a dark mode
// via @media (prefers-color-scheme: dark) e meta color-scheme.

export interface InternalEmailData {
  recipientName: string;
  date: string;        // "APRIL 22, 2026"
  subject: string;     // "PURCHASE ORDER - PO P2026/010 - SO 2026/01731"
  intro: string;       // "This purchase order was received today for your area:"
  fields: { label: string; value: string }[];
  detailsTitle?: string;
  detailsLines?: string[];
  detailsEmail?: string;
  signatureName: string; // "Inside Sales"
  closing?: string;      // "Best regards,"
}

export const internalEmailSample: InternalEmailData = {
  recipientName: 'Joao Luis Ancheschi',
  date: 'APRIL 22, 2026',
  subject: 'PURCHASE ORDER - PO P2026/010 - SO 2026/01731',
  intro: 'This purchase order was received today for your area:',
  fields: [
    { label: 'DIVISION', value: 'EXPORTACAO' },
    { label: 'P.O.', value: 'P2026/010' },
    { label: 'S.O.', value: '2026/01731' },
    { label: 'DATE', value: '04/22/2026' },
    { label: 'CUSTOMER', value: 'SMAR EUROPE BV' },
    { label: 'END USER', value: 'SMAR EUROPE BV' },
    { label: 'COUNTRY', value: 'PAÍSES BAIXOS' },
    { label: 'TOTAL ORDER', value: 'US$ 4,011.90' },
    { label: 'IQV', value: '' },
  ],
  detailsTitle: 'Made by Aparecido Gallo Junior',
  detailsLines: ['NOVA SMAR S/A'],
  detailsEmail: 'gallo@smar.com.br',
  closing: 'Best regards,',
  signatureName: 'Inside Sales',
};

export function renderInternalEmail(d: InternalEmailData = internalEmailSample): string {
  const fieldsHtml = d.fields
    .map(
      (f) =>
        `<div style="margin:0 0 4px 0;font-size:14px;line-height:1.5;color:#1f2937;"><strong style="color:#111827;">${f.label}:</strong> ${f.value}</div>`,
    )
    .join('');

  const detailsHtml = d.detailsTitle
    ? `
        <td valign="top" width="260" style="width:260px;padding:0 0 0 16px;" class="dets-cell">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f4f6;border-radius:6px;" class="dets-box">
            <tr><td style="padding:14px 16px;">
              <div style="font-size:10px;letter-spacing:0.18em;color:#6b7280;font-weight:700;margin-bottom:6px;" class="muted">DETAILS</div>
              <div style="font-size:14px;font-weight:700;color:#111827;margin-bottom:4px;" class="text">${d.detailsTitle}</div>
              ${(d.detailsLines || []).map((l) => `<div style="font-size:13px;color:#374151;" class="text">${l}</div>`).join('')}
              ${d.detailsEmail ? `<div style="font-size:13px;margin-top:4px;"><a href="mailto:${d.detailsEmail}" style="color:#2563eb;text-decoration:none;" class="link">${d.detailsEmail}</a></div>` : ''}
            </td></tr>
          </table>
        </td>`
    : '';

  return `<!doctype html>
<html lang="pt-br">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" />
<title>SmarNet - Automatic E-mail</title>
<style>
  body{margin:0;padding:0;background:#e9ecef;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;}
  a{color:#2563eb;}
  /* Dark mode */
  @media (prefers-color-scheme: dark){
    body, .bg-page{background:#0b1220 !important;}
    .card{background:#111827 !important;border-color:#1f2937 !important;}
    .text, .text *{color:#e5e7eb !important;}
    .muted, .muted *{color:#9ca3af !important;}
    .dets-box{background:#1f2937 !important;}
    .link{color:#60a5fa !important;}
    .preheader{color:#9ca3af !important;}
    .footer{background:#000 !important;}
  }
  [data-ogsc] body, [data-ogsc] .bg-page{background:#0b1220 !important;}
  [data-ogsc] .card{background:#111827 !important;}
  [data-ogsc] .text, [data-ogsc] .text *{color:#e5e7eb !important;}
  [data-ogsc] .muted, [data-ogsc] .muted *{color:#9ca3af !important;}
  [data-ogsc] .dets-box{background:#1f2937 !important;}
  [data-ogsc] .link{color:#60a5fa !important;}
  @media only screen and (max-width:600px){
    .dets-cell{display:block !important;width:100% !important;padding:16px 0 0 0 !important;}
    .body-cell{display:block !important;width:100% !important;}
  }
</style>
</head>
<body class="bg-page" style="background:#e9ecef;">
  <div class="preheader" style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">SmarNet - Automatic E-mail</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="bg-page" style="background:#e9ecef;padding:16px 0;">
    <tr><td align="center">
      <table role="presentation" width="780" cellpadding="0" cellspacing="0" border="0" style="max-width:780px;width:100%;">
        <tr><td align="center" style="padding:8px 0 12px 0;font-size:12px;color:#0f4c81;font-weight:700;" class="muted">SmarNet - Automatic E-mail</td></tr>
        <tr><td>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="card" style="background:#ffffff;border:1px solid #d1d5db;border-radius:2px;">
            <!-- Logo -->
            <tr><td style="padding:18px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
                <td style="font-family:Arial,Helvetica,sans-serif;font-size:28px;font-weight:700;color:#0f4c81;letter-spacing:-1px;" class="text">
                  smar<span style="color:#9ca3af;font-weight:400;">net</span>
                  <div style="font-size:9px;letter-spacing:0.5em;color:#9ca3af;font-weight:700;margin-top:-2px;" class="muted">INTRANET</div>
                </td>
                <td align="right" style="font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#0f4c81;" class="text">
                  SmarNet - Intranet Smar
                  <div style="font-size:11px;font-weight:400;color:#6b7280;margin-top:2px;" class="muted">E-mail notification of Smarnet systems</div>
                </td>
              </tr></table>
            </td></tr>
            <!-- Date + Subject bar -->
            <tr><td style="padding:0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
                <td width="160" style="background:#e74c3c;color:#fff;font-weight:700;font-size:12px;padding:10px 16px;letter-spacing:0.04em;">${d.date}</td>
                <td style="background:#2c2f33;color:#fff;font-weight:700;font-size:12px;padding:10px 16px;letter-spacing:0.04em;">${d.subject}</td>
              </tr></table>
            </td></tr>
            <!-- Body -->
            <tr><td style="padding:22px 24px 28px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
                <td valign="top" class="body-cell">
                  <div style="font-size:16px;font-weight:700;color:#111827;margin:0 0 12px 0;" class="text">Dear ${d.recipientName}</div>
                  <div style="font-size:14px;color:#1f2937;margin:0 0 12px 0;" class="text">${d.intro}</div>
                  ${fieldsHtml}
                  <div style="margin:24px 0 6px 0;font-size:14px;color:#1f2937;" class="text">${d.closing || ''}</div>
                  <div style="margin-top:18px;font-size:14px;"><a href="#" style="color:#2563eb;text-decoration:none;" class="link">${d.signatureName}</a></div>
                </td>
                ${detailsHtml}
              </tr></table>
              <hr style="border:none;border-top:1px dashed #d1d5db;margin:28px 0 0 0;" />
            </td></tr>
            <!-- Footer -->
            <tr><td class="footer" style="background:#111111;color:#cbd5e1;padding:22px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
                <td valign="top" style="font-size:11px;line-height:1.6;color:#cbd5e1;">
                  <div style="color:#fff;font-weight:700;font-size:13px;margin-bottom:8px;">IT Departament</div>
                  Tel.: +55 016 3946 3599<br/>
                  Fax: +55 016 3946 3514<br/>
                  Address: Rua Dr. Antônio Furlan Junior, 1028 Sertãozinho, SP, Brasil CEP 14.170-480<br/>
                  E-mail <a href="mailto:smarnet@smar.com.br" style="color:#60a5fa;text-decoration:none;">smarnet@smar.com.br</a>
                </td>
                <td valign="bottom" align="right" style="font-family:Arial,Helvetica,sans-serif;">
                  <div style="font-size:36px;font-weight:700;color:#1d8fd6;line-height:1;">smar</div>
                  <div style="font-size:11px;color:#fff;letter-spacing:0.06em;margin-top:2px;">www.smar.com.br</div>
                </td>
              </tr></table>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
