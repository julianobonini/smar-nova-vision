import { Button } from '@/components/ui/button';
import { Loader2, Mail, Plus } from 'lucide-react';
import { Demo } from './Demo';

export default function ButtonsPage() {
  return (
    <>
      <Demo title="Variantes semânticas" description="Use a variante de acordo com a hierarquia e a intenção da ação.">
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </Demo>

      <Demo title="Estados / cores de status" description="Sucesso, atenção, alerta, erro e informativo.">
        <div className="flex flex-wrap gap-3">
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="alert">Alert</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="info">Info</Button>
        </div>
      </Demo>

      <Demo title="Tamanhos">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="add"><Plus /></Button>
        </div>
      </Demo>

      <Demo title="Com ícone e loading">
        <div className="flex flex-wrap gap-3">
          <Button><Mail /> Enviar</Button>
          <Button variant="outline"><Plus /> Adicionar</Button>
          <Button disabled><Loader2 className="animate-spin" /> Carregando</Button>
        </div>
      </Demo>
    </>
  );
}
