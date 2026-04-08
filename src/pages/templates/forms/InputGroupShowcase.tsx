import { Search, Mail, DollarSign, Percent, Calendar, Globe, Phone } from 'lucide-react';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default function InputGroupShowcase() {
  return (
    <FormsShowcaseLayout title="Input Group" subtitle="Form Elements" description="Combinações de inputs com prefixos, sufixos, botões e ícones.">
      <ShowcaseSection title="Prefixo de Texto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Moeda</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-border bg-muted/30 text-muted-foreground text-sm font-semibold">R$</span>
              <Input placeholder="0,00" className="rounded-l-none" />
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Dólar</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-border bg-muted/30 text-muted-foreground text-sm font-semibold">US$</span>
              <Input placeholder="0.00" className="rounded-l-none" />
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Euro</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-border bg-muted/30 text-muted-foreground text-sm font-semibold">€</span>
              <Input placeholder="0,00" className="rounded-l-none" />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Sufixo de Texto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Peso', suffix: 'kg' },
            { label: 'Comprimento', suffix: 'mm' },
            { label: 'Temperatura', suffix: '°C' },
          ].map(item => (
            <div key={item.label}>
              <Label className="text-xs mb-1.5">{item.label}</Label>
              <div className="flex">
                <Input placeholder="0" className="rounded-r-none" />
                <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-border bg-muted/30 text-muted-foreground text-sm font-semibold">{item.suffix}</span>
              </div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Com Ícone Prefixo">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Pesquisar', icon: Search, placeholder: 'Buscar...' },
            { label: 'Email', icon: Mail, placeholder: 'email@empresa.com' },
            { label: 'Telefone', icon: Phone, placeholder: '(00) 00000-0000' },
          ].map(item => (
            <div key={item.label}>
              <Label className="text-xs mb-1.5">{item.label}</Label>
              <div className="relative">
                <item.icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder={item.placeholder} className="pl-9" />
              </div>
            </div>
          ))}
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
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-border bg-muted/30 text-muted-foreground text-xs">https://</span>
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
              <div className="flex flex-1">
                <span className="inline-flex items-center px-2 rounded-l-lg border border-r-0 border-border bg-muted/30 text-muted-foreground text-xs">R$</span>
                <Input placeholder="Min" className="rounded-l-none" />
              </div>
              <span className="text-muted-foreground text-xs">até</span>
              <div className="flex flex-1">
                <span className="inline-flex items-center px-2 rounded-l-lg border border-r-0 border-border bg-muted/30 text-muted-foreground text-xs">R$</span>
                <Input placeholder="Max" className="rounded-l-none" />
              </div>
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Desconto</Label>
            <div className="flex">
              <Input placeholder="0" className="rounded-r-none" />
              <span className="inline-flex items-center px-3 border-y border-border bg-muted/30 text-muted-foreground text-sm"><Percent size={14} /></span>
              <Input placeholder="Valor final" className="rounded-l-none" readOnly />
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
