import { AlertCircle, CheckCircle2, Info, AlertTriangle, X, Bell } from 'lucide-react';
import { useState } from 'react';
import { UIShowcaseLayout, ShowcaseSection } from './UIShowcaseLayout';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export default function AlertsShowcase() {
  const [dismissible, setDismissible] = useState(true);

  return (
    <UIShowcaseLayout title="Alerts" description="Alertas e notificações contextuais para feedback do usuário.">
      <ShowcaseSection title="Alertas Padrão">
        <div className="space-y-3">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Informação</AlertTitle>
            <AlertDescription>Esta é uma mensagem informativa padrão do sistema.</AlertDescription>
          </Alert>
          <Alert className="border-status-success/30 bg-status-success/5">
            <CheckCircle2 className="h-4 w-4 text-status-success" />
            <AlertTitle className="text-status-success">Sucesso</AlertTitle>
            <AlertDescription>Operação realizada com sucesso! O registro foi salvo.</AlertDescription>
          </Alert>
          <Alert className="border-status-warning/30 bg-status-warning/5">
            <AlertTriangle className="h-4 w-4 text-status-warning" />
            <AlertTitle className="text-status-warning">Atenção</AlertTitle>
            <AlertDescription>Existem campos obrigatórios não preenchidos no formulário.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Erro</AlertTitle>
            <AlertDescription>Não foi possível processar a solicitação. Tente novamente.</AlertDescription>
          </Alert>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Alertas com Ações">
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-xl border border-status-info/30 bg-status-info/5">
            <Info className="h-5 w-5 text-status-info shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">Atualização disponível</p>
              <p className="text-xs text-muted-foreground mt-1">Uma nova versão do sistema está disponível. Atualize para obter as correções mais recentes.</p>
              <div className="flex gap-2 mt-3">
                <Button size="sm" className="h-7 text-xs">Atualizar agora</Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs">Mais tarde</Button>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl border border-status-warning/30 bg-status-warning/5">
            <AlertTriangle className="h-5 w-5 text-status-warning shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">Estoque baixo</p>
              <p className="text-xs text-muted-foreground mt-1">15 produtos estão com estoque abaixo do mínimo configurado.</p>
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline" className="h-7 text-xs">Ver produtos</Button>
              </div>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Alerta Dispensável">
        {dismissible ? (
          <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-surface-container-high/50 relative">
            <Bell className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="flex-1 pr-8">
              <p className="text-sm font-semibold text-foreground">Bem-vindo ao SmarNET</p>
              <p className="text-xs text-muted-foreground mt-1">Clique no X para fechar este alerta. Ele pode ser dispensado pelo usuário.</p>
            </div>
            <button
              onClick={() => setDismissible(false)}
              className="absolute top-3 right-3 p-1 rounded-lg hover:bg-muted transition-colors"
            >
              <X size={14} className="text-muted-foreground" />
            </button>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-sm text-muted-foreground mb-3">Alerta dispensado.</p>
            <Button variant="outline" size="sm" onClick={() => setDismissible(true)}>Mostrar novamente</Button>
          </div>
        )}
      </ShowcaseSection>

      <ShowcaseSection title="Alertas Inline (Compactos)">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-status-info/10 text-status-info text-xs font-medium">
            <Info size={12} /> Informativo
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-status-success/10 text-status-success text-xs font-medium">
            <CheckCircle2 size={12} /> Sucesso
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-status-warning/10 text-status-warning text-xs font-medium">
            <AlertTriangle size={12} /> Atenção
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-destructive/10 text-destructive text-xs font-medium">
            <AlertCircle size={12} /> Erro
          </span>
        </div>
      </ShowcaseSection>
    </UIShowcaseLayout>
  );
}
