import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Demo } from './Demo';

export default function InputsPage() {
  return (
    <>
      <Demo title="Input — variantes">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="i1">Texto</Label>
            <Input id="i1" placeholder="Digite..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="i2">E-mail</Label>
            <Input id="i2" type="email" placeholder="contato@empresa.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="i3">Senha</Label>
            <Input id="i3" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="i4">Desabilitado</Label>
            <Input id="i4" disabled defaultValue="Não editável" />
          </div>
        </div>
      </Demo>

      <Demo title="Textarea">
        <div className="space-y-2">
          <Label htmlFor="t1">Mensagem</Label>
          <Textarea id="t1" rows={4} placeholder="Escreva uma observação..." />
        </div>
      </Demo>
    </>
  );
}
