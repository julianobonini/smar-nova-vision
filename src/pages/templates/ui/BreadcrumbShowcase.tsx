import { Home, ChevronRight, ArrowRight, Slash, MoreHorizontal } from 'lucide-react';
import { UIShowcaseLayout, ShowcaseSection } from './UIShowcaseLayout';

export default function BreadcrumbShowcase() {
  return (
    <UIShowcaseLayout title="Breadcrumb" description="Navegação hierárquica para indicar a localização atual no sistema.">
      <ShowcaseSection title="Breadcrumb Padrão">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1"><Home size={14} /> Início</a>
          <ChevronRight size={12} />
          <a href="#" className="hover:text-foreground transition-colors">Cadastros</a>
          <ChevronRight size={12} />
          <a href="#" className="hover:text-foreground transition-colors">Clientes</a>
          <ChevronRight size={12} />
          <span className="text-foreground font-medium">Detalhes</span>
        </nav>
      </ShowcaseSection>

      <ShowcaseSection title="Com Separador de Seta">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Início</a>
          <ArrowRight size={12} />
          <a href="#" className="hover:text-foreground transition-colors">Pedidos</a>
          <ArrowRight size={12} />
          <span className="text-foreground font-medium">#15558</span>
        </nav>
      </ShowcaseSection>

      <ShowcaseSection title="Com Separador Barra">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Início</a>
          <Slash size={12} />
          <a href="#" className="hover:text-foreground transition-colors">Produção</a>
          <Slash size={12} />
          <a href="#" className="hover:text-foreground transition-colors">Estoque</a>
          <Slash size={12} />
          <span className="text-foreground font-medium">Movimentação</span>
        </nav>
      </ShowcaseSection>

      <ShowcaseSection title="Com Collapse (Ellipsis)">
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1"><Home size={14} /></a>
          <ChevronRight size={12} />
          <button className="p-1 hover:bg-muted rounded transition-colors"><MoreHorizontal size={14} /></button>
          <ChevronRight size={12} />
          <a href="#" className="hover:text-foreground transition-colors">Configurações</a>
          <ChevronRight size={12} />
          <span className="text-foreground font-medium">Permissões</span>
        </nav>
      </ShowcaseSection>

      <ShowcaseSection title="Breadcrumb em Card">
        <div className="bg-surface-container-high/50 rounded-xl px-4 py-2.5 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Home size={12} />
          <ChevronRight size={10} />
          <span>Comercial</span>
          <ChevronRight size={10} />
          <span>Faturamento</span>
          <ChevronRight size={10} />
          <span className="text-foreground font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-md">NF #4521</span>
        </div>
      </ShowcaseSection>
    </UIShowcaseLayout>
  );
}
