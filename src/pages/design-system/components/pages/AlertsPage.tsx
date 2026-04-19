import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { Demo } from './Demo';

export default function AlertsPage() {
  return (
    <Demo title="Alerts contextuais">
      <div className="space-y-3">
        <Alert className="bg-info/10 border-info/30">
          <Info className="h-4 w-4 text-info" />
          <AlertTitle>Informação</AlertTitle>
          <AlertDescription>Sincronização agendada para 02:00.</AlertDescription>
        </Alert>
        <Alert className="bg-success/10 border-success/30">
          <CheckCircle2 className="h-4 w-4 text-success" />
          <AlertTitle>Sucesso</AlertTitle>
          <AlertDescription>Pedido #4821 faturado com sucesso.</AlertDescription>
        </Alert>
        <Alert className="bg-warning/10 border-warning/30">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <AlertTitle>Atenção</AlertTitle>
          <AlertDescription>Estoque do SKU-203 abaixo do mínimo.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>Falha ao conectar ao serviço de NFe.</AlertDescription>
        </Alert>
      </div>
    </Demo>
  );
}
