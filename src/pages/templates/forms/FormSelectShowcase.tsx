import { useState } from 'react';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const estados = [
  'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Paraná', 'Rio Grande do Sul',
  'Santa Catarina', 'Bahia', 'Pernambuco', 'Ceará', 'Goiás',
];

const categorias = ['Metalúrgica', 'Automação', 'Elétrica', 'Hidráulica', 'Pneumática'];

export default function FormSelectShowcase() {
  return (
    <FormsShowcaseLayout title="Form Select" subtitle="Form Elements" description="Componentes de seleção nativa com variantes e estados.">
      <ShowcaseSection title="Select Padrão">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Estado</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Selecione um estado" /></SelectTrigger>
              <SelectContent>
                {estados.map(e => <SelectItem key={e} value={e}>{e}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Categoria</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Selecione a categoria" /></SelectTrigger>
              <SelectContent>
                {categorias.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Prioridade</Label>
            <Select defaultValue="media">
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="baixa">🟢 Baixa</SelectItem>
                <SelectItem value="media">🟡 Média</SelectItem>
                <SelectItem value="alta">🟠 Alta</SelectItem>
                <SelectItem value="critica">🔴 Crítica</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Tamanhos">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Small</Label>
            <Select>
              <SelectTrigger className="h-8 text-xs"><SelectValue placeholder="Selecione" /></SelectTrigger>
              <SelectContent>{categorias.map(c => <SelectItem key={c} value={c} className="text-xs">{c}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Default</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
              <SelectContent>{categorias.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Large</Label>
            <Select>
              <SelectTrigger className="h-12 text-base"><SelectValue placeholder="Selecione" /></SelectTrigger>
              <SelectContent>{categorias.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Estados">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Normal</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="Selecione" /></SelectTrigger>
              <SelectContent>{categorias.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Desabilitado</Label>
            <Select disabled>
              <SelectTrigger><SelectValue placeholder="Desabilitado" /></SelectTrigger>
              <SelectContent>{categorias.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Com erro</Label>
            <Select>
              <SelectTrigger className="border-destructive"><SelectValue placeholder="Selecione" /></SelectTrigger>
              <SelectContent>{categorias.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
            </Select>
            <p className="text-[11px] text-destructive mt-1">Seleção obrigatória</p>
          </div>
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
