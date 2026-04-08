import { UIShowcaseLayout, ShowcaseSection } from './UIShowcaseLayout';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { toast as sonnerToast } from 'sonner';
import { CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react';

export default function ToastsShowcase() {
  const { toast } = useToast();

  return (
    <UIShowcaseLayout title="Toasts" description="Notificações temporárias para feedback de ações.">
      <ShowcaseSection title="Toasts com Shadcn (useToast)">
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => toast({ title: 'Informação', description: 'Este é um toast informativo padrão.' })}>
            Toast Padrão
          </Button>
          <Button variant="outline" onClick={() => toast({ title: 'Sucesso!', description: 'Registro salvo com sucesso.', variant: 'default' })}>
            Toast Sucesso
          </Button>
          <Button variant="outline" onClick={() => toast({ title: 'Erro!', description: 'Não foi possível salvar o registro.', variant: 'destructive' })}>
            Toast Erro
          </Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Toasts com Sonner">
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => sonnerToast.success('Registro salvo com sucesso!')}>Sucesso (Sonner)</Button>
          <Button variant="outline" onClick={() => sonnerToast.error('Falha ao processar a requisição.')}>Erro (Sonner)</Button>
          <Button variant="outline" onClick={() => sonnerToast.warning('Campos obrigatórios não preenchidos.')}>Atenção (Sonner)</Button>
          <Button variant="outline" onClick={() => sonnerToast.info('Nova versão disponível.')}>Info (Sonner)</Button>
          <Button variant="outline" onClick={() => sonnerToast.loading('Processando pedido...')}>Loading (Sonner)</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Toast com Ação">
        <Button variant="outline" onClick={() => sonnerToast('Registro excluído', {
          description: 'O registro foi removido.',
          action: { label: 'Desfazer', onClick: () => sonnerToast.success('Ação desfeita!') },
        })}>
          Toast com Desfazer
        </Button>
      </ShowcaseSection>

      <ShowcaseSection title="Exemplos Visuais (Estáticos)">
        <div className="space-y-3 max-w-sm">
          {[
            { icon: CheckCircle2, color: 'text-status-success', bg: 'bg-status-success/5 border-status-success/20', title: 'Sucesso', desc: 'Operação concluída.' },
            { icon: Info, color: 'text-status-info', bg: 'bg-status-info/5 border-status-info/20', title: 'Informação', desc: 'Dados atualizados.' },
            { icon: AlertTriangle, color: 'text-status-warning', bg: 'bg-status-warning/5 border-status-warning/20', title: 'Atenção', desc: 'Verifique os campos.' },
            { icon: XCircle, color: 'text-destructive', bg: 'bg-destructive/5 border-destructive/20', title: 'Erro', desc: 'Falha na conexão.' },
          ].map(t => (
            <div key={t.title} className={`flex items-start gap-3 p-3 rounded-xl border ${t.bg}`}>
              <t.icon size={18} className={`${t.color} shrink-0 mt-0.5`} />
              <div>
                <p className="text-sm font-semibold text-foreground">{t.title}</p>
                <p className="text-xs text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ShowcaseSection>
    </UIShowcaseLayout>
  );
}
