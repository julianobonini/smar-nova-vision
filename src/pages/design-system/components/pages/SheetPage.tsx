import {
  Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Demo } from './Demo';

export default function SheetPage() {
  return (
    <Demo title="Sheet (slide-over lateral)">
      <div className="flex flex-wrap gap-3">
        {(['right', 'left', 'top', 'bottom'] as const).map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild><Button variant="outline">{side}</Button></SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>Painel {side}</SheetTitle>
                <SheetDescription>Conteúdo do drawer lateral.</SheetDescription>
              </SheetHeader>
              <div className="py-4 text-sm">Filtros, ações ou formulário aqui.</div>
              <SheetFooter><Button>Aplicar</Button></SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </Demo>
  );
}
