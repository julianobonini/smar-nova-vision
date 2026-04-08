import { UIShowcaseLayout, ShowcaseSection } from './UIShowcaseLayout';
import { Badge } from '@/components/ui/badge';
import { Users, Package, ShoppingCart, Settings, ChevronRight, Check } from 'lucide-react';

export default function ListGroupShowcase() {
  return (
    <UIShowcaseLayout title="List Group" description="Listas agrupadas para exibição de dados e navegação.">
      <ShowcaseSection title="Lista Básica">
        <div className="max-w-md rounded-xl border border-border overflow-hidden">
          {['Clientes', 'Fornecedores', 'Funcionários', 'Usuários', 'Produtos'].map((item, i) => (
            <div key={item} className={`px-4 py-3 text-sm text-foreground ${i < 4 ? 'border-b border-border' : ''} hover:bg-muted/50 cursor-pointer transition-colors`}>
              {item}
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Lista com Ícone e Badge">
        <div className="max-w-md rounded-xl border border-border overflow-hidden">
          {[
            { icon: Users, label: 'Clientes', badge: '452', active: true },
            { icon: Package, label: 'Produtos', badge: '1.156' },
            { icon: ShoppingCart, label: 'Pedidos', badge: '38' },
            { icon: Settings, label: 'Configurações' },
          ].map((item, i, arr) => (
            <div key={item.label}
              className={`flex items-center justify-between px-4 py-3 ${i < arr.length - 1 ? 'border-b border-border' : ''} ${item.active ? 'bg-primary/5 border-l-2 border-l-primary' : ''} hover:bg-muted/50 cursor-pointer transition-colors`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={16} className={item.active ? 'text-primary' : 'text-muted-foreground'} />
                <span className={`text-sm ${item.active ? 'font-semibold text-primary' : 'text-foreground'}`}>{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && <Badge variant="secondary" className="text-[10px]">{item.badge}</Badge>}
                <ChevronRight size={14} className="text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Lista de Seleção (Checkable)">
        <div className="max-w-md rounded-xl border border-border overflow-hidden">
          {['Metalurgia', 'Siderurgia', 'Automação', 'Instrumentação', 'Válvulas'].map((item, i, arr) => (
            <label key={item} className={`flex items-center gap-3 px-4 py-3 ${i < arr.length - 1 ? 'border-b border-border' : ''} hover:bg-muted/50 cursor-pointer transition-colors`}>
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${i < 2 ? 'bg-primary border-primary text-primary-foreground' : 'border-border'}`}>
                {i < 2 && <Check size={12} />}
              </div>
              <span className="text-sm text-foreground">{item}</span>
            </label>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Lista Flush (Sem Borda Externa)">
        <div className="max-w-md space-y-1">
          {['Item 1 — Descrição breve do item', 'Item 2 — Outra descrição', 'Item 3 — Mais um item da lista'].map((item) => (
            <div key={item} className="px-4 py-2.5 text-sm text-foreground rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
              {item}
            </div>
          ))}
        </div>
      </ShowcaseSection>
    </UIShowcaseLayout>
  );
}
