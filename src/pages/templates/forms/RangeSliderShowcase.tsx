import { useState } from 'react';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

export default function RangeSliderShowcase() {
  const [single, setSingle] = useState([50]);
  const [range, setRange] = useState([20, 80]);
  const [step, setStep] = useState([25]);
  const [price, setPrice] = useState([1000, 5000]);

  return (
    <FormsShowcaseLayout title="Range Slider" subtitle="Form Elements" description="Controles deslizantes para seleção de valores numéricos e faixas.">
      <ShowcaseSection title="Slider Simples">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Volume</Label>
              <span className="text-sm font-bold text-secondary">{single[0]}%</span>
            </div>
            <Slider value={single} onValueChange={setSingle} max={100} step={1} />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Steps (25)</Label>
              <span className="text-sm font-bold text-secondary">{step[0]}%</span>
            </div>
            <Slider value={step} onValueChange={setStep} max={100} step={25} />
            <div className="flex justify-between text-[10px] text-muted-foreground">
              {[0, 25, 50, 75, 100].map(v => <span key={v}>{v}%</span>)}
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Slider de Faixa (Range)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Faixa</Label>
              <span className="text-sm font-bold text-secondary">{range[0]} — {range[1]}</span>
            </div>
            <Slider value={range} onValueChange={setRange} max={100} step={1} />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-xs">Faixa de Preço</Label>
              <span className="text-sm font-bold text-secondary">R$ {price[0].toLocaleString()} — R$ {price[1].toLocaleString()}</span>
            </div>
            <Slider value={price} onValueChange={setPrice} min={0} max={10000} step={100} />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Estados">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <Label className="text-xs">Normal</Label>
            <Slider defaultValue={[40]} max={100} />
          </div>
          <div className="space-y-3 opacity-50">
            <Label className="text-xs">Desabilitado</Label>
            <Slider defaultValue={[60]} max={100} disabled />
          </div>
          <div className="space-y-3">
            <Label className="text-xs">Com marcações</Label>
            <Slider defaultValue={[50]} max={100} step={10} />
            <div className="flex justify-between text-[9px] text-muted-foreground px-1">
              {Array.from({ length: 11 }, (_, i) => <span key={i}>{i * 10}</span>)}
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
