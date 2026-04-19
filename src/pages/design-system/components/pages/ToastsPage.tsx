import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { toast as sonnerToast } from 'sonner';
import { Demo } from './Demo';

export default function ToastsPage() {
  const { toast } = useToast();
  return (
    <>
      <Demo title="Toast (radix-based)">
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => toast({ title: 'Salvo', description: 'Alterações persistidas.' })}>Padrão</Button>
          <Button variant="destructive" onClick={() => toast({ variant: 'destructive', title: 'Erro', description: 'Falha ao salvar.' })}>Destrutivo</Button>
        </div>
      </Demo>

      <Demo title="Sonner (recomendado)">
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => sonnerToast('Mensagem padrão')}>Default</Button>
          <Button variant="success" onClick={() => sonnerToast.success('Sucesso!')}>Success</Button>
          <Button variant="warning" onClick={() => sonnerToast.warning('Atenção')}>Warning</Button>
          <Button variant="destructive" onClick={() => sonnerToast.error('Erro')}>Error</Button>
        </div>
      </Demo>
    </>
  );
}
