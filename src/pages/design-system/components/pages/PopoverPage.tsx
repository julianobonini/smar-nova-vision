import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Demo } from './Demo';

export default function PopoverPage() {
  return (
    <Demo title="Popover">
      <Popover>
        <PopoverTrigger asChild><Button variant="outline">Abrir popover</Button></PopoverTrigger>
        <PopoverContent className="w-72">
          <div className="space-y-3">
            <h4 className="font-bold text-sm">Filtro rápido</h4>
            <div className="space-y-2">
              <Label htmlFor="p-search">Buscar</Label>
              <Input id="p-search" placeholder="Termo..." />
            </div>
            <Button size="sm" className="w-full">Aplicar</Button>
          </div>
        </PopoverContent>
      </Popover>
    </Demo>
  );
}
