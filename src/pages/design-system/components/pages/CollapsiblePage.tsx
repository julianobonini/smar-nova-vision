import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Demo } from './Demo';

export default function CollapsiblePage() {
  return (
    <Demo title="Collapsible (toggle simples)">
      <Collapsible className="max-w-md">
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">Mostrar detalhes <ChevronDown /></Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 rounded-xl bg-surface-container p-4 text-sm">
          Conteúdo escondido revelado ao clicar. Útil para áreas opcionais em formulários.
        </CollapsibleContent>
      </Collapsible>
    </Demo>
  );
}
