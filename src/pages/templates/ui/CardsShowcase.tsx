import { UIShowcaseLayout, ShowcaseSection } from './UIShowcaseLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Users, Package, DollarSign, ShoppingCart, MoreHorizontal, ArrowRight } from 'lucide-react';

export default function CardsShowcase() {
  return (
    <UIShowcaseLayout title="Cards" description="Containers de conteúdo para agrupar informações relacionadas.">
      <ShowcaseSection title="Card Básico">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Título do Card</CardTitle>
              <CardDescription>Descrição breve do conteúdo.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Conteúdo do card com informações detalhadas sobre o item.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Ação</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Card com Borda</CardTitle>
              <CardDescription>Exemplo com destaque lateral.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Informações complementares do módulo.</p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-secondary">
            <CardHeader>
              <CardTitle className="text-base">Card com Acento</CardTitle>
              <CardDescription>Borda lateral colorida.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Destaque visual para cards importantes.</p>
            </CardContent>
          </Card>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="KPI Cards">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Clientes', value: '2.842', change: '+12.5%', up: true, icon: Users, color: 'text-primary' },
            { label: 'Pedidos Mês', value: '384', change: '+8.2%', up: true, icon: ShoppingCart, color: 'text-secondary' },
            { label: 'Faturamento', value: 'R$ 1.2M', change: '-3.1%', up: false, icon: DollarSign, color: 'text-tertiary' },
            { label: 'Produtos Ativos', value: '1.156', change: '+2.4%', up: true, icon: Package, color: 'text-status-success' },
          ].map((kpi, i) => (
            <Card key={i}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">{kpi.label}</p>
                    <p className="text-2xl font-display font-bold text-foreground mt-1">{kpi.value}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center ${kpi.color}`}>
                    <kpi.icon size={18} />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-3">
                  {kpi.up ? <TrendingUp size={12} className="text-status-success" /> : <TrendingDown size={12} className="text-destructive" />}
                  <span className={`text-xs font-semibold ${kpi.up ? 'text-status-success' : 'text-destructive'}`}>{kpi.change}</span>
                  <span className="text-xs text-muted-foreground">vs mês anterior</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Card com Lista">
        <Card className="max-w-md">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Últimas Atividades</CardTitle>
              <CardDescription>Ações recentes no sistema</CardDescription>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal size={16} /></Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { text: 'Pedido #4521 aprovado', time: '2 min', badge: 'Sucesso' },
              { text: 'Novo cliente cadastrado', time: '15 min', badge: 'Novo' },
              { text: 'Estoque atualizado', time: '1h', badge: 'Info' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                <div>
                  <p className="text-sm text-foreground">{item.text}</p>
                  <p className="text-xs text-muted-foreground">{item.time} atrás</p>
                </div>
                <Badge variant="secondary" className="text-[10px]">{item.badge}</Badge>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full text-xs">Ver todas <ArrowRight size={12} /></Button>
          </CardFooter>
        </Card>
      </ShowcaseSection>
    </UIShowcaseLayout>
  );
}
