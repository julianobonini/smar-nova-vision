import { useState } from 'react';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { FloatingLabelInput } from '@/components/ui/forms';
import { Label } from '@/components/ui/label';

function FloatingSelect({ label, options }: { label: string; options: string[] }) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <select
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full h-12 px-3 pt-4 pb-1 rounded-md border text-sm bg-background text-foreground transition-all outline-none appearance-none
          ${focused ? 'border-secondary ring-2 ring-secondary/20' : 'border-input'}`}
      >
        <option value="" />
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <Label className={`absolute left-3 transition-all pointer-events-none
        ${hasValue || focused ? 'top-1 text-[10px] font-bold text-secondary' : 'top-3.5 text-sm text-muted-foreground'}`}>
        {label}
      </Label>
    </div>
  );
}

function FloatingTextarea({ label }: { label: string }) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`peer w-full min-h-[100px] px-3 pt-5 pb-2 rounded-md border text-sm bg-background text-foreground transition-all outline-none resize-y
          ${focused ? 'border-secondary ring-2 ring-secondary/20' : 'border-input'}`}
      />
      <Label className={`absolute left-3 transition-all pointer-events-none
        ${hasValue || focused ? 'top-1 text-[10px] font-bold text-secondary' : 'top-3 text-sm text-muted-foreground'}`}>
        {label}
      </Label>
    </div>
  );
}

export default function FloatingLabelsShowcase() {
  return (
    <FormsShowcaseLayout title="Floating Labels" description="Campos com labels flutuantes que se movem ao receber foco ou valor.">
      <ShowcaseSection title="Inputs com Label Flutuante">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FloatingLabelInput label="Razão Social" />
          <FloatingLabelInput label="CNPJ" />
          <FloatingLabelInput label="Email" type="email" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Com Valor Padrão">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FloatingLabelInput label="Nome Fantasia" defaultValue="Nova Smar S/A" />
          <FloatingLabelInput label="Cidade" defaultValue="São Paulo" />
          <FloatingLabelInput label="UF" defaultValue="SP" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Select & Textarea">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FloatingSelect label="Estado" options={['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Paraná']} />
          <FloatingSelect label="Categoria" options={['Metalúrgica', 'Automação', 'Elétrica']} />
        </div>
        <div className="mt-4">
          <FloatingTextarea label="Observações" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Estados">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FloatingLabelInput label="Normal" />
          <FloatingLabelInput label="Desabilitado" disabled />
          <FloatingLabelInput label="Com Erro" defaultValue="valor-invalido" error="Formato inválido" />
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
