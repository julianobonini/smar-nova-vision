import { UIShowcaseLayout, ShowcaseSection } from './UIShowcaseLayout';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { AlignLeft, AlignCenter, AlignRight, AlignJustify, Grid3X3, LayoutList, LayoutGrid, Bold, Italic, Underline, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ButtonGroupShowcase() {
  const [align, setAlign] = useState('left');
  const [view, setView] = useState('grid');

  return (
    <UIShowcaseLayout title="Button Group" description="Agrupamento de botões para ações relacionadas e seleção.">
      <ShowcaseSection title="Grupo Básico">
        <div className="inline-flex rounded-xl border border-border overflow-hidden">
          <Button variant="ghost" className="rounded-none border-r border-border">Dia</Button>
          <Button variant="ghost" className="rounded-none border-r border-border">Semana</Button>
          <Button variant="ghost" className="rounded-none border-r border-border">Mês</Button>
          <Button variant="ghost" className="rounded-none">Ano</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Seleção de Alinhamento">
        <div className="inline-flex rounded-xl border border-border overflow-hidden bg-surface-container-high/50">
          {[
            { key: 'left', icon: AlignLeft },
            { key: 'center', icon: AlignCenter },
            { key: 'right', icon: AlignRight },
            { key: 'justify', icon: AlignJustify },
          ].map(({ key, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setAlign(key)}
              className={`p-2.5 transition-colors ${align === key ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
            >
              <Icon size={16} />
            </button>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Toggle de Visualização">
        <div className="inline-flex rounded-xl border border-border overflow-hidden bg-surface-container-high/50">
          {[
            { key: 'list', icon: LayoutList, label: 'Lista' },
            { key: 'grid', icon: LayoutGrid, label: 'Grade' },
            { key: 'compact', icon: Grid3X3, label: 'Compacto' },
          ].map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => setView(key)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors ${view === key ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Toolbar de Formatação">
        <div className="inline-flex rounded-xl border border-border overflow-hidden bg-surface-container-high/50">
          <button className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border-r border-border"><Bold size={15} /></button>
          <button className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border-r border-border"><Italic size={15} /></button>
          <button className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"><Underline size={15} /></button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Paginação Simplificada">
        <div className="inline-flex items-center rounded-xl border border-border overflow-hidden bg-surface-container-high/50">
          <button className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border-r border-border"><ChevronLeft size={15} /></button>
          <span className="px-4 py-2 text-sm font-medium text-foreground">Página 3 de 12</span>
          <button className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border-l border-border"><ChevronRight size={15} /></button>
        </div>
      </ShowcaseSection>
    </UIShowcaseLayout>
  );
}
