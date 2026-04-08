import { UIShowcaseLayout, ShowcaseSection } from './UIShowcaseLayout';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function PaginationShowcase() {
  const [page, setPage] = useState(3);

  return (
    <UIShowcaseLayout title="Pagination" description="Navegação paginada para listas e tabelas de dados.">
      <ShowcaseSection title="Paginação Básica">
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" className="h-8 w-8"><ChevronLeft size={14} /></Button>
          {[1,2,3,4,5].map(p => (
            <Button key={p} variant={p === page ? 'default' : 'outline'} size="icon" className="h-8 w-8 text-xs" onClick={() => setPage(p)}>{p}</Button>
          ))}
          <Button variant="outline" size="icon" className="h-8 w-8"><ChevronRight size={14} /></Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Com Primeiro/Último">
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" className="h-8 w-8"><ChevronsLeft size={14} /></Button>
          <Button variant="outline" size="icon" className="h-8 w-8"><ChevronLeft size={14} /></Button>
          {[1,2,3].map(p => (
            <Button key={p} variant={p === 1 ? 'default' : 'outline'} size="icon" className="h-8 w-8 text-xs">{p}</Button>
          ))}
          <span className="px-2 text-sm text-muted-foreground">...</span>
          <Button variant="outline" size="icon" className="h-8 w-8 text-xs">45</Button>
          <Button variant="outline" size="icon" className="h-8 w-8"><ChevronRight size={14} /></Button>
          <Button variant="outline" size="icon" className="h-8 w-8"><ChevronsRight size={14} /></Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Paginação com Informação">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Exibindo <span className="font-semibold text-foreground">21-30</span> de <span className="font-semibold text-foreground">452</span> registros</p>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="sm" className="h-8"><ChevronLeft size={14} /> Anterior</Button>
            <Button variant="outline" size="sm" className="h-8">Próxima <ChevronRight size={14} /></Button>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Seleção de Registros por Página">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Exibir</span>
            <select className="h-8 px-2 rounded-lg border border-border bg-background text-sm text-foreground">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <span className="text-sm text-muted-foreground">por página</span>
          </div>
          <p className="text-sm text-muted-foreground">Página 3 de 45</p>
        </div>
      </ShowcaseSection>
    </UIShowcaseLayout>
  );
}
