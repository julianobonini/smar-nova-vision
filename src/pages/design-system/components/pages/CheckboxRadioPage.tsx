import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Demo } from './Demo';

export default function CheckboxRadioPage() {
  return (
    <>
      <Demo title="Checkbox">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Checkbox id="c1" defaultChecked /><Label htmlFor="c1">Receber notificações</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="c2" /><Label htmlFor="c2">Aceito os termos</Label>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="c3" disabled /><Label htmlFor="c3" className="opacity-50">Desabilitado</Label>
          </div>
        </div>
      </Demo>

      <Demo title="Radio group">
        <RadioGroup defaultValue="pix" className="space-y-2">
          <div className="flex items-center gap-3"><RadioGroupItem value="pix" id="r1" /><Label htmlFor="r1">PIX</Label></div>
          <div className="flex items-center gap-3"><RadioGroupItem value="boleto" id="r2" /><Label htmlFor="r2">Boleto</Label></div>
          <div className="flex items-center gap-3"><RadioGroupItem value="cartao" id="r3" /><Label htmlFor="r3">Cartão</Label></div>
        </RadioGroup>
      </Demo>
    </>
  );
}
