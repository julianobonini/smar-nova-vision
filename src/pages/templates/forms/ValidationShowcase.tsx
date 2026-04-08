import { useState } from 'react';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

function ValidatedField({ label, placeholder, validate, hint }: {
  label: string; placeholder: string; validate: (v: string) => string | null; hint?: string;
}) {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const error = touched ? validate(value) : null;
  const valid = touched && !error && value.length > 0;

  return (
    <div>
      <Label className="text-xs mb-1.5">{label}</Label>
      <div className="relative">
        <Input
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder={placeholder}
          className={cn(error && 'border-destructive', valid && 'border-status-success')}
        />
        {valid && <CheckCircle2 size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-status-success" />}
        {error && <AlertCircle size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-destructive" />}
      </div>
      {error && <p className="text-[11px] text-destructive mt-1 flex items-center gap-1"><AlertCircle size={11} /> {error}</p>}
      {valid && <p className="text-[11px] text-status-success mt-1 flex items-center gap-1"><CheckCircle2 size={11} /> Campo válido</p>}
      {hint && !error && !valid && <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1"><Info size={11} /> {hint}</p>}
    </div>
  );
}

export default function ValidationShowcase() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <FormsShowcaseLayout title="Validation" description="Padrões de validação de formulários com feedback visual em tempo real.">
      <ShowcaseSection title="Validação em Tempo Real">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ValidatedField
            label="Nome Completo"
            placeholder="Digite seu nome"
            validate={v => v.length === 0 ? 'Campo obrigatório' : v.length < 3 ? 'Mínimo 3 caracteres' : null}
            hint="Mínimo 3 caracteres"
          />
          <ValidatedField
            label="Email"
            placeholder="email@empresa.com"
            validate={v => v.length === 0 ? 'Campo obrigatório' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Email inválido' : null}
            hint="Formato: nome@dominio.com"
          />
          <ValidatedField
            label="CNPJ"
            placeholder="00.000.000/0000-00"
            validate={v => v.length === 0 ? 'Campo obrigatório' : v.replace(/\D/g, '').length !== 14 ? 'CNPJ deve ter 14 dígitos' : null}
            hint="Apenas números"
          />
          <ValidatedField
            label="Telefone"
            placeholder="(00) 00000-0000"
            validate={v => v.length === 0 ? 'Campo obrigatório' : v.replace(/\D/g, '').length < 10 ? 'Telefone incompleto' : null}
          />
          <ValidatedField
            label="CEP"
            placeholder="00000-000"
            validate={v => v.length === 0 ? 'Campo obrigatório' : v.replace(/\D/g, '').length !== 8 ? 'CEP deve ter 8 dígitos' : null}
          />
          <ValidatedField
            label="Senha"
            placeholder="Mínimo 8 caracteres"
            validate={v => {
              if (v.length === 0) return 'Campo obrigatório';
              if (v.length < 8) return 'Mínimo 8 caracteres';
              if (!/[A-Z]/.test(v)) return 'Deve conter letra maiúscula';
              if (!/[0-9]/.test(v)) return 'Deve conter número';
              return null;
            }}
            hint="Mínimo 8 caracteres, 1 maiúscula, 1 número"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Formulário com Validação no Submit">
        <div className="max-w-lg space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-xs mb-1.5">Nome *</Label>
              <Input placeholder="Nome" className={submitted ? 'border-destructive' : ''} />
              {submitted && <p className="text-[11px] text-destructive mt-1">Campo obrigatório</p>}
            </div>
            <div>
              <Label className="text-xs mb-1.5">Sobrenome *</Label>
              <Input placeholder="Sobrenome" className={submitted ? 'border-destructive' : ''} />
              {submitted && <p className="text-[11px] text-destructive mt-1">Campo obrigatório</p>}
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Email *</Label>
            <Input placeholder="email@empresa.com" className={submitted ? 'border-destructive' : ''} />
            {submitted && <p className="text-[11px] text-destructive mt-1">Email inválido</p>}
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => setSubmitted(true)}>Enviar</Button>
            <Button variant="ghost" onClick={() => setSubmitted(false)}>Limpar</Button>
          </div>
          {submitted && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
              <AlertCircle size={16} />
              <span>Corrija os campos destacados antes de enviar.</span>
            </div>
          )}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Indicador de Força da Senha">
        <PasswordStrength />
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}

function PasswordStrength() {
  const [pass, setPass] = useState('');
  const checks = [
    { label: 'Mínimo 8 caracteres', ok: pass.length >= 8 },
    { label: 'Letra maiúscula', ok: /[A-Z]/.test(pass) },
    { label: 'Letra minúscula', ok: /[a-z]/.test(pass) },
    { label: 'Número', ok: /[0-9]/.test(pass) },
    { label: 'Caractere especial', ok: /[^a-zA-Z0-9]/.test(pass) },
  ];
  const strength = checks.filter(c => c.ok).length;
  const strengthColor = strength <= 1 ? 'bg-destructive' : strength <= 3 ? 'bg-status-warning' : 'bg-status-success';

  return (
    <div className="max-w-sm space-y-3">
      <div>
        <Label className="text-xs mb-1.5">Nova Senha</Label>
        <Input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="Digite sua senha" />
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className={cn('h-1.5 flex-1 rounded-full transition-colors', i < strength ? strengthColor : 'bg-muted/30')} />
        ))}
      </div>
      <div className="space-y-1.5">
        {checks.map(c => (
          <div key={c.label} className="flex items-center gap-2 text-xs">
            {c.ok ? <CheckCircle2 size={13} className="text-status-success" /> : <div className="w-[13px] h-[13px] rounded-full border border-muted-foreground/30" />}
            <span className={c.ok ? 'text-foreground' : 'text-muted-foreground'}>{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
