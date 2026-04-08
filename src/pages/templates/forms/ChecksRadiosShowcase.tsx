import { useState } from 'react';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';

export default function ChecksRadiosShowcase() {
  const [checks, setChecks] = useState({ a: true, b: false, c: false, d: true });
  const [radio, setRadio] = useState('opcao1');
  const [switches, setSwitches] = useState({ ativo: true, notif: false, dark: false });

  return (
    <FormsShowcaseLayout title="Checks & Radios" subtitle="Form Elements" description="Checkboxes, radio buttons e switches com variantes visuais.">
      <ShowcaseSection title="Checkboxes">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Padrão</p>
            {[
              { key: 'a', label: 'Opção selecionada' },
              { key: 'b', label: 'Opção não selecionada' },
              { key: 'c', label: 'Terceira opção' },
              { key: 'd', label: 'Opção com descrição' },
            ].map(item => (
              <div key={item.key} className="flex items-center gap-2.5">
                <Checkbox
                  id={`check-${item.key}`}
                  checked={checks[item.key as keyof typeof checks]}
                  onCheckedChange={(v) => setChecks(prev => ({ ...prev, [item.key]: !!v }))}
                />
                <Label htmlFor={`check-${item.key}`} className="text-sm cursor-pointer">{item.label}</Label>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Estados</p>
            <div className="flex items-center gap-2.5">
              <Checkbox id="check-disabled" disabled />
              <Label htmlFor="check-disabled" className="text-sm text-muted-foreground">Desabilitado</Label>
            </div>
            <div className="flex items-center gap-2.5">
              <Checkbox id="check-disabled-checked" disabled checked />
              <Label htmlFor="check-disabled-checked" className="text-sm text-muted-foreground">Desabilitado Marcado</Label>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Radio Buttons">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Vertical</p>
            <RadioGroup value={radio} onValueChange={setRadio} className="space-y-2.5">
              {['opcao1', 'opcao2', 'opcao3'].map((val, i) => (
                <div key={val} className="flex items-center gap-2.5">
                  <RadioGroupItem value={val} id={`radio-${val}`} />
                  <Label htmlFor={`radio-${val}`} className="text-sm cursor-pointer">Opção {i + 1}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Cards Radio</p>
            <RadioGroup value={radio} onValueChange={setRadio} className="grid grid-cols-3 gap-2">
              {[
                { val: 'opcao1', label: 'CIF', desc: 'Frete incluso' },
                { val: 'opcao2', label: 'FOB', desc: 'Frete por conta' },
                { val: 'opcao3', label: 'EXW', desc: 'Na fábrica' },
              ].map(item => (
                <label
                  key={item.val}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                    radio === item.val
                      ? 'border-secondary bg-secondary/10'
                      : 'border-border/40 hover:border-border'
                  }`}
                >
                  <RadioGroupItem value={item.val} className="sr-only" />
                  <span className="text-sm font-bold text-foreground">{item.label}</span>
                  <span className="text-[10px] text-muted-foreground">{item.desc}</span>
                </label>
              ))}
            </RadioGroup>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Switches (Toggle)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Padrão</p>
            {[
              { key: 'ativo', label: 'Sistema Ativo', desc: 'Ativar/desativar o sistema' },
              { key: 'notif', label: 'Notificações', desc: 'Receber alertas por email' },
              { key: 'dark', label: 'Modo Escuro', desc: 'Alternar tema visual' },
            ].map(item => (
              <div key={item.key} className="flex items-center justify-between p-3 rounded-xl bg-background border border-border/30">
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground">{item.desc}</p>
                </div>
                <Switch
                  checked={switches[item.key as keyof typeof switches]}
                  onCheckedChange={(v) => setSwitches(prev => ({ ...prev, [item.key]: v }))}
                />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Estados</p>
            <div className="flex items-center justify-between p-3 rounded-xl bg-background border border-border/30">
              <span className="text-sm text-muted-foreground">Desabilitado Off</span>
              <Switch disabled />
            </div>
            <div className="flex items-center justify-between p-3 rounded-xl bg-background border border-border/30">
              <span className="text-sm text-muted-foreground">Desabilitado On</span>
              <Switch disabled checked />
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
