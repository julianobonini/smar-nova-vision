import { useState } from 'react';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function maskCPF(v: string) {
  return v.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2').slice(0, 14);
}
function maskCNPJ(v: string) {
  return v.replace(/\D/g, '').replace(/^(\d{2})(\d)/, '$1.$2').replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3').replace(/\.(\d{3})(\d)/, '.$1/$2').replace(/(\d{4})(\d)/, '$1-$2').slice(0, 18);
}
function maskPhone(v: string) {
  const d = v.replace(/\D/g, '');
  if (d.length <= 10) return d.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2');
  return d.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2').slice(0, 15);
}
function maskCEP(v: string) {
  return v.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2').slice(0, 9);
}
function maskMoney(v: string) {
  const n = v.replace(/\D/g, '');
  const f = (parseInt(n || '0') / 100).toFixed(2);
  return f.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
function maskDate(v: string) {
  return v.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').replace(/(\d{2})(\d)/, '$1/$2').slice(0, 10);
}

export default function InputMasksShowcase() {
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [money, setMoney] = useState('');
  const [date, setDate] = useState('');

  return (
    <FormsShowcaseLayout title="Input Masks" subtitle="Form Elements" description="Campos com máscaras de formatação para CPF, CNPJ, telefone, CEP e mais.">
      <ShowcaseSection title="Documentos">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">CPF</Label>
            <Input placeholder="000.000.000-00" value={cpf} onChange={e => setCpf(maskCPF(e.target.value))} />
            <p className="text-[10px] text-muted-foreground mt-1">Formato: 000.000.000-00</p>
          </div>
          <div>
            <Label className="text-xs mb-1.5">CNPJ</Label>
            <Input placeholder="00.000.000/0000-00" value={cnpj} onChange={e => setCnpj(maskCNPJ(e.target.value))} />
            <p className="text-[10px] text-muted-foreground mt-1">Formato: 00.000.000/0000-00</p>
          </div>
          <div>
            <Label className="text-xs mb-1.5">IE (Inscrição Estadual)</Label>
            <Input placeholder="000.000.000.000" />
            <p className="text-[10px] text-muted-foreground mt-1">Varia por estado</p>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Contato & Endereço">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Telefone</Label>
            <Input placeholder="(00) 00000-0000" value={phone} onChange={e => setPhone(maskPhone(e.target.value))} />
          </div>
          <div>
            <Label className="text-xs mb-1.5">CEP</Label>
            <Input placeholder="00000-000" value={cep} onChange={e => setCep(maskCEP(e.target.value))} />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Data</Label>
            <Input placeholder="DD/MM/AAAA" value={date} onChange={e => setDate(maskDate(e.target.value))} />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Valores Monetários">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Valor (R$)</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-border bg-muted/30 text-muted-foreground text-sm font-semibold">R$</span>
              <Input placeholder="0,00" value={money} onChange={e => setMoney(maskMoney(e.target.value))} className="rounded-l-none font-mono" />
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Percentual</Label>
            <div className="flex">
              <Input placeholder="0,00" className="rounded-r-none font-mono" />
              <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-border bg-muted/30 text-muted-foreground text-sm font-semibold">%</span>
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Quantidade</Label>
            <div className="flex">
              <Input placeholder="0.000" className="rounded-r-none font-mono" />
              <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-border bg-muted/30 text-muted-foreground text-sm font-semibold">un</span>
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
