import { useState } from 'react';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const presetColors = [
  { name: 'Primary', value: 'hsl(213, 55%, 17%)' },
  { name: 'Secondary', value: 'hsl(185, 78%, 55%)' },
  { name: 'Accent', value: 'hsl(40, 96%, 64%)' },
  { name: 'Success', value: 'hsl(152, 60%, 52%)' },
  { name: 'Warning', value: 'hsl(38, 92%, 50%)' },
  { name: 'Error', value: 'hsl(0, 84%, 60%)' },
  { name: 'Info', value: 'hsl(210, 90%, 60%)' },
];

export default function ColorPickerShowcase() {
  const [color1, setColor1] = useState('#2dd4bf');
  const [color2, setColor2] = useState('#1e3a5f');

  return (
    <FormsShowcaseLayout title="Color Pickers" subtitle="Form Elements" description="Seletores de cor para personalização e configuração visual.">
      <ShowcaseSection title="Color Picker Nativo">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <Label className="text-xs mb-1.5">Cor Principal</Label>
            <div className="flex items-center gap-3">
              <input type="color" value={color1} onChange={e => setColor1(e.target.value)} className="w-12 h-10 rounded-lg border border-border cursor-pointer" />
              <Input value={color1} onChange={e => setColor1(e.target.value)} className="font-mono text-sm flex-1" />
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Cor Secundária</Label>
            <div className="flex items-center gap-3">
              <input type="color" value={color2} onChange={e => setColor2(e.target.value)} className="w-12 h-10 rounded-lg border border-border cursor-pointer" />
              <Input value={color2} onChange={e => setColor2(e.target.value)} className="font-mono text-sm flex-1" />
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Preview</Label>
            <div className="h-10 rounded-lg flex overflow-hidden border border-border">
              <div className="flex-1" style={{ backgroundColor: color1 }} />
              <div className="flex-1" style={{ backgroundColor: color2 }} />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Cores do Design System">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {presetColors.map(c => (
            <div key={c.name} className="text-center">
              <div className="w-full aspect-square rounded-xl border border-border/30 mb-2 shadow-sm" style={{ backgroundColor: c.value }} />
              <p className="text-[11px] font-semibold text-foreground">{c.name}</p>
              <p className="text-[9px] text-muted-foreground font-mono">{c.value}</p>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Swatches (Seleção Rápida)">
        <div>
          <Label className="text-xs mb-2">Selecione uma cor</Label>
          <div className="flex flex-wrap gap-2">
            {['#ef4444', '#f97316', '#eab308', '#22c55e', '#14b8a6', '#3b82f6', '#8b5cf6', '#ec4899', '#6b7280', '#1e293b'].map(c => (
              <button
                key={c}
                onClick={() => setColor1(c)}
                className={`w-9 h-9 rounded-xl border-2 transition-all ${color1 === c ? 'border-foreground scale-110 shadow-lg' : 'border-transparent hover:scale-105'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-2">Selecionada: <span className="font-mono font-bold text-foreground">{color1}</span></p>
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
