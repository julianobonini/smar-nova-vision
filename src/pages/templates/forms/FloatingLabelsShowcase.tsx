import { useState } from 'react';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';

function FloatingField({ label, type = 'text', defaultValue = '', disabled = false }: { label: string; type?: string; defaultValue?: string; disabled?: boolean }) {
  const [value, setValue] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        disabled={disabled}
        className={`peer w-full h-12 px-3 pt-4 pb-1 rounded-lg border text-sm bg-background text-foreground transition-all outline-none
          ${focused ? 'border-secondary ring-2 ring-secondary/20' : 'border-border'}
          ${disabled ? 'opacity-50 cursor-not-allowed bg-muted/30' : ''}`}
      />
      <label className={`absolute left-3 transition-all pointer-events-none
        ${hasValue || focused
          ? 'top-1 text-[10px] font-bold text-secondary'
          : 'top-3.5 text-sm text-muted-foreground'}`}>
        {label}
      </label>
    </div>
  );
}

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
        className={`peer w-full h-12 px-3 pt-4 pb-1 rounded-lg border text-sm bg-background text-foreground transition-all outline-none appearance-none
          ${focused ? 'border-secondary ring-2 ring-secondary/20' : 'border-border'}`}
      >
        <option value="" />
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <label className={`absolute left-3 transition-all pointer-events-none
        ${hasValue || focused
          ? 'top-1 text-[10px] font-bold text-secondary'
          : 'top-3.5 text-sm text-muted-foreground'}`}>
        {label}
      </label>
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
        className={`peer w-full min-h-[100px] px-3 pt-5 pb-2 rounded-lg border text-sm bg-background text-foreground transition-all outline-none resize-y
          ${focused ? 'border-secondary ring-2 ring-secondary/20' : 'border-border'}`}
      />
      <label className={`absolute left-3 transition-all pointer-events-none
        ${hasValue || focused
          ? 'top-1 text-[10px] font-bold text-secondary'
          : 'top-3 text-sm text-muted-foreground'}`}>
        {label}
      </label>
    </div>
  );
}

export default function FloatingLabelsShowcase() {
  return (
    <FormsShowcaseLayout title="Floating Labels" description="Campos com labels flutuantes que se movem ao receber foco ou valor.">
      <ShowcaseSection title="Inputs com Label Flutuante">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FloatingField label="Razão Social" />
          <FloatingField label="CNPJ" />
          <FloatingField label="Email" type="email" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Com Valor Padrão">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FloatingField label="Nome Fantasia" defaultValue="Nova Smar S/A" />
          <FloatingField label="Cidade" defaultValue="São Paulo" />
          <FloatingField label="UF" defaultValue="SP" />
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
          <FloatingField label="Normal" />
          <FloatingField label="Desabilitado" disabled />
          <FloatingField label="Com Valor" defaultValue="Somente leitura" />
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
