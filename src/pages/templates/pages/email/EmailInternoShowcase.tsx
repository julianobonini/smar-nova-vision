import { useMemo, useState } from 'react';
import { PagesLayout, PageSection } from '../PagesLayout';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Copy, Check } from 'lucide-react';
import { renderInternalEmail } from './templates/internalEmailTemplate';

export default function EmailInternoShowcase() {
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState(false);
  const html = useMemo(() => renderInternalEmail(undefined, window.location.origin), []);

  // Para o preview, injetamos data-ogsc para forçar dark mode visualmente.
  const previewHtml = dark ? html.replace('<body ', '<body data-ogsc ') : html;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <PagesLayout
      title="E-mail Interno"
      description="Modelo de e-mail transacional para notificações internas do SmarNet (PO, OS, alertas de sistema). HTML responsivo com suporte a dark mode nativo do cliente de e-mail."
      category="Páginas / Email"
    >
      <PageSection title="Preview">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <p className="text-xs text-muted-foreground">
            Alterne o tema para visualizar como o e-mail será renderizado em clientes com modo claro ou escuro
            (Apple Mail, Outlook iOS, Gmail dark, etc.).
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
            title="Preview e-mail interno"
            srcDoc={previewHtml}
            style={{ width: '100%', height: 820, border: 0, display: 'block' }}
          />
        </div>
      </PageSection>

      <PageSection title="Diretrizes de uso">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
          <li>Use para notificações automáticas de sistemas internos: pedidos de compra, ordens de venda, alertas operacionais.</li>
          <li>O cabeçalho fixo (logo SmarNet + identificação do sistema) reforça que é um e-mail automático corporativo.</li>
          <li>A barra vermelha+preta destaca a data e o assunto principal — mantenha o assunto curto (até 80 caracteres).</li>
          <li>Use o bloco lateral <strong>DETAILS</strong> para identificar o autor/origem do registro.</li>
          <li>Todas as cores e tipografia usam tons compatíveis com modo escuro via <code>prefers-color-scheme</code>.</li>
        </ul>
      </PageSection>
    </PagesLayout>
  );
}
