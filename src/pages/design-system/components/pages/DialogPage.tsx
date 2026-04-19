import {
  Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Demo } from './Demo';

export default function DialogPage() {
  return (
    <Demo title="Dialog (modal)">
      <Dialog>
        <DialogTrigger asChild><Button>Abrir dialog</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar perfil</DialogTitle>
            <DialogDescription>Atualize suas informações cadastrais.</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div className="space-y-2"><Label htmlFor="d-name">Nome</Label><Input id="d-name" defaultValue="Maria Silva" /></div>
            <div className="space-y-2"><Label htmlFor="d-email">E-mail</Label><Input id="d-email" defaultValue="maria@empresa.com" /></div>
          </div>
          <DialogFooter>
            <Button variant="outline">Cancelar</Button>
            <Button>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Demo>
  );
}
