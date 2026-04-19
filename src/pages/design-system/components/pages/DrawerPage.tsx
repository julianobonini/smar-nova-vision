import {
  Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Demo } from './Demo';

export default function DrawerPage() {
  return (
    <Demo title="Drawer (mobile-first bottom sheet)">
      <Drawer>
        <DrawerTrigger asChild><Button>Abrir drawer</Button></DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Filtros avançados</DrawerTitle>
            <DrawerDescription>Refine a listagem por campos.</DrawerDescription>
          </DrawerHeader>
          <div className="px-4 pb-4 text-sm">Conteúdo do drawer.</div>
          <DrawerFooter>
            <Button>Aplicar</Button>
            <DrawerClose asChild><Button variant="outline">Cancelar</Button></DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Demo>
  );
}
