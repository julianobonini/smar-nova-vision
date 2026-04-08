import { useState } from 'react';
import { Search, Mail, Lock, Eye, EyeOff, User, Phone, DollarSign, AlertCircle, CheckCircle2 } from 'lucide-react';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function InputsShowcase() {
  const [showPass, setShowPass] = useState(false);

  return (
    <FormsShowcaseLayout title="Inputs" subtitle="Form Elements" description="Campos de entrada de texto com diferentes variantes, estados e tamanhos.">
      <ShowcaseSection title="Tamanhos">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Small</Label>
            <Input placeholder="Input small" className="h-8 text-xs" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Default</Label>
            <Input placeholder="Input default" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Large</Label>
            <Input placeholder="Input large" className="h-12 text-base" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Com Ícones">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Label className="text-xs mb-1.5">Busca</Label>
            <Search size={16} className="absolute left-3 top-[calc(50%+8px)] -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Pesquisar..." className="pl-9" />
          </div>
          <div className="relative">
            <Label className="text-xs mb-1.5">Email</Label>
            <Mail size={16} className="absolute left-3 top-[calc(50%+8px)] -translate-y-1/2 text-muted-foreground" />
            <Input type="email" placeholder="email@empresa.com" className="pl-9" />
          </div>
          <div className="relative">
            <Label className="text-xs mb-1.5">Senha</Label>
            <Lock size={16} className="absolute left-3 top-[calc(50%+8px)] -translate-y-1/2 text-muted-foreground" />
            <Input type={showPass ? 'text' : 'password'} placeholder="••••••••" className="pl-9 pr-9" />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-[calc(50%+8px)] -translate-y-1/2 text-muted-foreground hover:text-foreground">
              {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Estados">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Normal</Label>
            <Input placeholder="Campo normal" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Desabilitado</Label>
            <Input placeholder="Desabilitado" disabled />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Somente Leitura</Label>
            <Input value="Valor fixo" readOnly className="bg-muted/30" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Com valor</Label>
            <Input defaultValue="João Silva" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Validação">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Válido</Label>
            <div className="relative">
              <Input defaultValue="contato@empresa.com" className="border-status-success pr-9" />
              <CheckCircle2 size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-status-success" />
            </div>
            <p className="text-[11px] text-status-success mt-1">Email válido</p>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Inválido</Label>
            <div className="relative">
              <Input defaultValue="email-invalido" className="border-destructive pr-9" />
              <AlertCircle size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-destructive" />
            </div>
            <p className="text-[11px] text-destructive mt-1">Formato de email inválido</p>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Obrigatório</Label>
            <Input placeholder="Campo obrigatório *" className="border-status-warning" />
            <p className="text-[11px] text-status-warning mt-1">Este campo é obrigatório</p>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Prefixo e Sufixo">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Moeda</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-border bg-muted/30 text-muted-foreground text-sm">R$</span>
              <Input placeholder="0,00" className="rounded-l-none" />
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Peso</Label>
            <div className="flex">
              <Input placeholder="0.000" className="rounded-r-none" />
              <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-border bg-muted/30 text-muted-foreground text-sm">kg</span>
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">URL</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-border bg-muted/30 text-muted-foreground text-xs">https://</span>
              <Input placeholder="www.site.com.br" className="rounded-l-none" />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Textarea">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Observações</Label>
            <Textarea placeholder="Digite suas observações aqui..." className="min-h-[120px] resize-y" />
            <p className="text-[11px] text-muted-foreground mt-1">Máximo 500 caracteres</p>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Descrição (Desabilitado)</Label>
            <Textarea placeholder="Textarea desabilitado" disabled className="min-h-[120px]" />
          </div>
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
