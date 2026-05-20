// HTML email template — Comunicação externa (clientes e fornecedores - marca Smar)
// Compatível com clientes de e-mail e com suporte a dark mode via @media (prefers-color-scheme: dark).

export interface ExternalEmailData {
  preheader?: string;
  date: string;      // "19 DE MAIO DE 2026"
  subject: string;   // "Smar - Aceite do Pedido Nro: 4103884358"
  title: string;
  greeting: string;  // "Caros Sr(as),"
  intro: string;
  highlight?: string; // "Fique atento ao prazo de entrega ..."
  fields: { label: string; value: string }[];
  body: string;
  closing: string;
  signatureName: string;
  signatureRole: string;
  contacts: { dept: string; phone: string; email: string }[];
  address: string;
  copyright: string;
}

export const externalEmailSample: ExternalEmailData = {
  preheader: 'Aceite do seu pedido junto à Smar',
  date: '19 DE MAIO DE 2026',
  subject: 'Smar - Aceite do Pedido Nro: 4103884358',
  title: 'Smar - Aceite do Pedido Nro: 4103884358 O.S.:2026/02098 Para: BUNGE ALIMENTOS S.A.',
  greeting: 'Caros Sr(as),',
  intro: 'Informamos que demos entrada no seu pedido com os seguintes comentários abaixo.',
  highlight: 'Fique atento ao <strong>prazo de entrega</strong> do seu pedido para data <strong>19/06/2026</strong>.',
  fields: [
    { label: 'PARA', value: 'BUNGE ALIMENTOS S.A.' },
    { label: 'ATTN', value: 'SR. EDSON RODRIGUES' },
    { label: 'ASSUNTO', value: 'Aceite de Pedido' },
    { label: 'REF', value: 'Seu pedido 4103884358' },
    { label: 'Nossa O.S.', value: '2026/02098, Valor (Sem Impostos): R$ 11.542,68.' },
  ],
  body: 'Agradecemos a preferência e colocamo-nos à disposição para quaisquer esclarecimentos que se fizerem necessários.',
  closing: 'Saudações,',
  signatureName: 'Sr. Fernando Jose Campos Anselmo',
  signatureRole: 'Pós-Venda',
  contacts: [
    { dept: 'Comercial', phone: '+55 16 3946-3599', email: 'orcamento@smar.com.br' },
    { dept: 'Pós-venda', phone: '+55 16 3946-3599', email: 'pedido@smar.com.br' },
    { dept: 'Compras', phone: '+55 16 3946-3599', email: 'divisaodecompras@smar.com.br' },
    { dept: 'Assistência Técnica', phone: '+55 16 3946-3509', email: 'assistencia.tecnica@smar.com.br' },
  ],
  address: 'Rua Dr. Antônio Furlan Junior, 1028 / Sertãozinho, SP 14170-480 Brasil',
  copyright: 'Copyright © 2025 Nova Smar S/A - Smar Technology Company',
};

export function renderExternalEmail(d: ExternalEmailData = externalEmailSample): string {
  const fieldsHtml = d.fields
    .map(
      (f) => `
        <tr>
          <td valign="top" width="110" style="padding:3px 8px 3px 0;font-size:14px;font-weight:700;color:#111827;white-space:nowrap;" class="text">${f.label}:</td>
          <td valign="top" style="padding:3px 0;font-size:14px;color:#1f2937;" class="text">${f.value}</td>
        </tr>`,
    )
    .join('');

  const contactsHtml = d.contacts
    .map(
      (c) => `
        <td valign="top" align="left" style="padding:0 10px;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
          <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:4px;">${c.dept}</div>
          <div style="font-size:12px;color:#dbeafe;margin-bottom:2px;">${c.phone}</div>
          <div style="font-size:12px;"><a href="mailto:${c.email}" style="color:#fbbf24;text-decoration:none;">${c.email}</a></div>
        </td>`,
    )
    .join('');

  return `<!doctype html>
<html lang="pt-br">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" />
<title>${d.subject}</title>
<style>
  body{margin:0;padding:0;background:#e9ecef;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;}
  a{color:#1d4ed8;}
  @media (prefers-color-scheme: dark){
    body, .bg-page{background:#0b1220 !important;}
    .card{background:#0f172a !important;}
    .text, .text *{color:#e5e7eb !important;}
    .muted{color:#9ca3af !important;}
    .brand-blue{background:#0a2a5e !important;}
    .brand-orange{background:#b8651a !important;}
    .footer-blue{background:#0a2a5e !important;}
    .footer-bottom{background:#072049 !important;color:#dbeafe !important;}
    .copy{color:#94a3b8 !important;}
  }
  [data-ogsc] body, [data-ogsc] .bg-page{background:#0b1220 !important;}
  [data-ogsc] .card{background:#0f172a !important;}
  [data-ogsc] .text, [data-ogsc] .text *{color:#e5e7eb !important;}
  @media only screen and (max-width:600px){
    .contact-cell{display:block !important;width:100% !important;padding:8px 0 !important;}
    .header-blue-shape{display:none !important;}
  }
</style>
</head>
<body class="bg-page" style="background:#e9ecef;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${d.preheader || ''}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="bg-page" style="background:#e9ecef;padding:16px 0;">
    <tr><td align="center">
      <table role="presentation" width="820" cellpadding="0" cellspacing="0" border="0" style="max-width:820px;width:100%;">
        <tr><td align="center" style="padding:6px 0 12px 0;font-size:12px;color:#6b7280;" class="muted">E-mail automático - SmarNet</td></tr>
        <tr><td>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" class="card" style="background:#ffffff;border-radius:2px;overflow:hidden;">
            <!-- Header brand band -->
            <tr><td style="padding:0;background:#ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
                <td class="brand-blue header-blue-shape" style="background:#1d4ed8;height:80px;width:55%;color:#fff;font-family:Arial,Helvetica,sans-serif;padding:18px 24px;vertical-align:middle;">
                  &nbsp;
                </td>
                <td align="right" valign="middle" style="background:#ffffff;padding:18px 24px;font-family:Arial,Helvetica,sans-serif;">
                  <div style="font-size:36px;font-weight:700;color:#1d4ed8;line-height:1;">smar</div>
                  <div style="font-size:11px;color:#6b7280;letter-spacing:0.04em;margin-top:2px;" class="muted">Technology Company</div>
                </td>
              </tr></table>
            </td></tr>
            <!-- Date + subject bar -->
            <tr><td>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
                <td class="brand-orange" width="180" style="background:#f59e0b;color:#1f2937;font-weight:700;font-size:12px;padding:10px 16px;">${d.date}</td>
                <td style="background:#111111;color:#fff;font-weight:700;font-size:13px;padding:10px 16px;">Assunto: ${d.subject}</td>
              </tr></table>
            </td></tr>
            <!-- Body -->
            <tr><td style="padding:24px 28px 28px 28px;">
              <div style="font-size:15px;font-weight:700;color:#1d4ed8;margin:0 0 16px 0;" class="text">${d.title}</div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${fieldsHtml}</table>
              <div style="margin-top:22px;font-size:14px;color:#1f2937;" class="text">${d.greeting}</div>
              <div style="margin-top:8px;font-size:14px;color:#1f2937;line-height:1.6;" class="text">${d.intro}</div>
              ${d.highlight ? `<div style="margin-top:8px;font-size:14px;color:#1f2937;line-height:1.6;" class="text">${d.highlight}</div>` : ''}
              <div style="margin-top:22px;font-size:14px;color:#1f2937;line-height:1.7;text-align:justify;" class="text">${d.body}</div>
              <div style="margin-top:26px;font-size:14px;color:#1f2937;" class="text">${d.closing}</div>
              <div style="margin-top:24px;font-size:14px;font-weight:700;color:#111827;" class="text">${d.signatureName}</div>
              <div style="font-size:13px;color:#374151;" class="text">${d.signatureRole}</div>
            </td></tr>
            <!-- Social band -->
            <tr><td style="padding:0;background:#ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
                <td class="brand-orange" width="55%" style="background:#f59e0b;padding:14px 24px;font-family:Arial,Helvetica,sans-serif;">
                  <span style="display:inline-block;width:32px;height:32px;border-radius:50%;border:2px solid #fff;color:#fff;font-weight:700;text-align:center;line-height:28px;font-size:13px;margin-right:6px;">in</span>
                  <span style="display:inline-block;width:32px;height:32px;border-radius:50%;border:2px solid #fff;color:#fff;font-weight:700;text-align:center;line-height:28px;font-size:13px;margin-right:6px;">IG</span>
                  <span style="display:inline-block;width:32px;height:32px;border-radius:50%;border:2px solid #fff;color:#fff;font-weight:700;text-align:center;line-height:28px;font-size:13px;margin-right:6px;">f</span>
                  <span style="display:inline-block;width:32px;height:32px;border-radius:50%;border:2px solid #fff;color:#fff;font-weight:700;text-align:center;line-height:28px;font-size:13px;margin-right:6px;">X</span>
                  <span style="display:inline-block;width:32px;height:32px;border-radius:50%;border:2px solid #fff;color:#fff;font-weight:700;text-align:center;line-height:28px;font-size:13px;">▶</span>
                </td>
                <td class="brand-blue" align="right" valign="middle" style="background:#1d4ed8;padding:14px 24px;font-family:Arial,Helvetica,sans-serif;">
                  <div style="font-size:30px;font-weight:700;color:#fff;line-height:1;">smar</div>
                  <div style="font-size:11px;color:#dbeafe;letter-spacing:0.04em;">Technology Company</div>
                </td>
              </tr></table>
            </td></tr>
            <!-- Contacts -->
            <tr><td class="footer-blue" style="background:#1d4ed8;padding:20px 14px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
                ${contactsHtml.replace(/<td valign="top"/g, '<td class="contact-cell" valign="top"')}
              </tr></table>
            </td></tr>
            <!-- Address + copyright -->
            <tr><td class="footer-bottom" style="background:#fff;padding:0;">
              <div style="background:#0a2a5e;color:#fff;padding:10px 16px;font-size:12px;text-align:center;font-family:Arial,Helvetica,sans-serif;">${d.address}</div>
              <div class="copy" style="background:#ffffff;color:#6b7280;padding:10px 16px;font-size:11px;text-align:center;font-family:Arial,Helvetica,sans-serif;">${d.copyright}</div>
            </td></tr>
          </table>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
