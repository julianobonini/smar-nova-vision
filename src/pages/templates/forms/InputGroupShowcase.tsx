import { Search, Mail, Phone, Globe, Percent } from 'lucide-react';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/ui/forms';

export default function InputGroupShowcase() {
  return (
    <FormsShowcaseLayout title="Input Group" subtitle="Form Elements" description="Combinações de inputs com prefixos, sufixos, botões e ícones.">
      <ShowcaseSection title="Prefixo de Texto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormInput label="Moeda" prefix="R$" placeholder="0,00" />
          <FormInput label="Dólar" prefix="US$" placeholder="0.00" />
          <FormInput label="Euro" prefix="€" placeholder="0,00" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sufixo de Texto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormInput label="Peso" suffix="kg" placeholder="0" />
          <FormInput label="Comprimento" suffix="mm" placeholder="0" />
          <FormInput label="Temperatura" suffix="°C" placeholder="0" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Com Ícone Prefixo">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormInput label="Pesquisar" placeholder="Buscar..." startIcon={<Search size={16} />} />
          <FormInput label="Email" placeholder="email@empresa.com" startIcon={<Mail size={16} />} />
          <FormInput label="Telefone" placeholder="(00) 00000-0000" startIcon={<Phone size={16} />} />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Com Botão">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Busca com ação</Label>
            <div className="flex">
              <Input placeholder="Pesquisar código..." className="rounded-r-none" />
              <Button className="rounded-l-none">
                <Search size={16} />
              </Button>
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">URL com botão</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted/40 text-muted-foreground text-xs">https://</span>
              <Input placeholder="www.exemplo.com" className="rounded-none" />
              <Button variant="secondary" className="rounded-l-none">
                <Globe size={16} className="mr-1" /> Ir
              </Button>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Combinados">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Faixa de Preço</Label>
            <div className="flex items-center gap-2">
              <FormInput containerClassName="flex-1" prefix="R$" placeholder="Min" />
              <span className="text-muted-foreground text-xs">até</span>
              <FormInput containerClassName="flex-1" prefix="R$" placeholder="Max" />
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Desconto</Label>
            <div className="flex">
              <Input placeholder="0" className="rounded-r-none" />
              <span className="inline-flex items-center px-3 border-y border-input bg-muted/40 text-muted-foreground text-sm"><Percent size={14} /></span>
              <Input placeholder="Valor final" className="rounded-l-none" readOnly />
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
