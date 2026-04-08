import { UIShowcaseLayout, ShowcaseSection } from './UIShowcaseLayout';
import { Button } from '@/components/ui/button';
import { Plus, Download, Trash2, Edit, Save, ChevronRight, Loader2, Mail, Search, Settings } from 'lucide-react';

export default function ButtonsShowcase() {
  return (
    <UIShowcaseLayout title="Buttons" description="Botões de ação com múltiplas variantes, tamanhos e estados.">
      <ShowcaseSection title="Variantes">
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Tamanhos">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Pequeno</Button>
          <Button size="default">Médio</Button>
          <Button size="lg">Grande</Button>
          <Button size="icon"><Plus size={16} /></Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Com Ícone">
        <div className="flex flex-wrap gap-3">
          <Button><Plus size={16} /> Novo Cliente</Button>
          <Button variant="outline"><Download size={16} /> Exportar</Button>
          <Button variant="destructive"><Trash2 size={16} /> Excluir</Button>
          <Button variant="secondary"><Edit size={16} /> Editar</Button>
          <Button><Save size={16} /> Salvar</Button>
          <Button variant="outline"><Mail size={16} /> Enviar e-mail</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Ícone à Direita">
        <div className="flex flex-wrap gap-3">
          <Button>Continuar <ChevronRight size={16} /></Button>
          <Button variant="outline">Ver detalhes <ChevronRight size={16} /></Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Estados">
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Desabilitado</Button>
          <Button disabled><Loader2 size={16} className="animate-spin" /> Processando...</Button>
          <Button variant="outline" disabled>Outline Desabilitado</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Botões de Ação Rápida (Icon Only)">
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="icon" className="h-9 w-9"><Search size={15} /></Button>
          <Button variant="outline" size="icon" className="h-9 w-9"><Settings size={15} /></Button>
          <Button variant="outline" size="icon" className="h-9 w-9"><Edit size={15} /></Button>
          <Button variant="outline" size="icon" className="h-9 w-9"><Trash2 size={15} /></Button>
          <Button variant="outline" size="icon" className="h-9 w-9"><Download size={15} /></Button>
          <Button size="icon" className="h-9 w-9"><Plus size={15} /></Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Gradiente / Custom">
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground gradient-primary hover:opacity-90 transition-opacity">
            <Plus size={16} /> Ação Principal
          </button>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-secondary-foreground bg-secondary hover:bg-secondary/90 transition-colors">
            <Save size={16} /> Ação Secundária
          </button>
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-tertiary-foreground bg-tertiary hover:bg-tertiary/90 transition-colors">
            <Download size={16} /> Ação Terciária
          </button>
        </div>
      </ShowcaseSection>
    </UIShowcaseLayout>
  );
}
