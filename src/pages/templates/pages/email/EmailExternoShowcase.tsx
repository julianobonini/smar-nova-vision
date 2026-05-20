import { useMemo, useState } from 'react';
import { PagesLayout, PageSection } from '../PagesLayout';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Copy, Check } from 'lucide-react';
import { renderExternalEmail } from './templates/externalEmailTemplate';

export default function EmailExternoShowcase() {
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState(false);
  const html = useMemo(() => renderExternalEmail(), []);

  const previewHtml = dark ? html.replace('<body ', '<body data-ogsc ') : html;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <PagesLayout
      title="E-mail Externo"
      description="Modelo de e-mail institucional para comunicação com clientes e fornecedores (aceite de pedido, cotações, pós-venda). Identidade Smar Technology Company, HTML responsivo e suporte a dark mode."
      category="Páginas / Email"
    >
      <PageSection title="Preview">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <p className="text-xs text-muted-foreground">
            O e-mail respeita a preferência do destinatário: clientes com tema escuro (Apple Mail, Outlook iOS,
            Gmail dark) recebem a versão adaptada automaticamente.
          </p>
          <div className="flex items-center gap-2">
            <Button variant={dark ? 'outline' : 'default'} size="sm" className="gap-2" onClick={() => setDark(false)}>
              <Sun size={14} /> Claro
            </Button>
            <Button variant={dark ? 'default' : 'outline'} size="sm" className="gap-2" onClick={() => setDark(true)}>
              <Moon size={14} /> Escuro
            </Button>
            <Button variant="outline" size="sm" className="gap-2" onClick={handleCopy}>
              {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copiado' : 'Copiar HTML'}
            </Button>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-border/40" style={{ background: dark ? '#0b1220' : '#e9ecef' }}>
          <iframe
            title="Preview e-mail externo"
            srcDoc={previewHtml}
            style={{ width: '100%', height: 980, border: 0, display: 'block' }}
          />
        </div>
      </PageSection>

      <PageSection title="Diretrizes de uso">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
          <li>Use para qualquer comunicação enviada a destinatários fora da Smar — clientes, fornecedores, parceiros.</li>
          <li>Identidade visual completa: marca <strong>smar Technology Company</strong>, banda azul + laranja institucional.</li>
          <li>O rodapé com contatos por área (Comercial, Pós-venda, Compras, Assistência Técnica) é obrigatório.</li>
          <li>Inclua sempre saudação, contexto do pedido/assunto, prazo destacado e assinatura nominal com cargo.</li>
          <li>Cores e contrastes ajustam automaticamente para modo escuro do cliente de e-mail.</li>
        </ul>
      </PageSection>
    </PagesLayout>
  );
}
