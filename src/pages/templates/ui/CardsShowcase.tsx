import { UIShowcaseLayout, ShowcaseSection } from './UIShowcaseLayout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { KpiCard, AccentCard, ActivityCard } from '@/components/ui/cards';
import { TrendingUp, Users, Package, DollarSign, ShoppingCart } from 'lucide-react';

export default function CardsShowcase() {
  return (
    <UIShowcaseLayout title="Cards" description="Containers de conteúdo para agrupar informações relacionadas. Cada padrão é um componente reutilizável em src/components/ui/cards/.">
      <ShowcaseSection title="Card Básico (primitivos)">
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
              <CardTitle className="text-base">Card Sem Footer</CardTitle>
              <CardDescription>Apenas conteúdo informativo.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Informações complementares do módulo.</p>
            </CardContent>
          </Card>
          <AccentCard
            title="Card com Acento"
            description="Borda lateral colorida."
            accent="secondary"
          >
            <p className="text-sm text-muted-foreground">
              Use <code className="text-xs">&lt;AccentCard accent="secondary" /&gt;</code> para destaques.
            </p>
          </AccentCard>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="KPI Cards — <KpiCard />">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            label="Total Clientes"
            value="2.842"
            change="+12.5%"
            trend="up"
            icon={Users}
            iconColor="text-primary"
          />
          <KpiCard
            label="Pedidos Mês"
            value="384"
            change="+8.2%"
            trend="up"
            icon={ShoppingCart}
            iconColor="text-secondary"
          />
          <KpiCard
            label="Faturamento"
            value="R$ 1.2M"
            change="-3.1%"
            trend="down"
            icon={DollarSign}
            iconColor="text-tertiary"
          />
          <KpiCard
            label="Produtos Ativos"
            value="1.156"
            change="+2.4%"
            trend="up"
            icon={Package}
            iconColor="text-status-success"
          />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Card com Lista — <ActivityCard />">
        <ActivityCard
          className="max-w-md"
          title="Últimas Atividades"
          description="Ações recentes no sistema"
          items={[
            { text: 'Pedido #4521 aprovado', time: '2 min', badge: 'Sucesso' },
            { text: 'Novo cliente cadastrado', time: '15 min', badge: 'Novo' },
            { text: 'Estoque atualizado', time: '1h', badge: 'Info' },
          ]}
          onFooterClick={() => {}}
        />
      </ShowcaseSection>

      <ShowcaseSection title="Variantes de Acento — <AccentCard />">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AccentCard title="Sucesso" description="Operação concluída" accent="success">
            <p className="text-sm text-muted-foreground">3 pedidos faturados hoje.</p>
          </AccentCard>
          <AccentCard title="Atenção" description="Requer revisão" accent="warning">
            <p className="text-sm text-muted-foreground">5 propostas vencendo em 48h.</p>
          </AccentCard>
          <AccentCard title="Crítico" description="Ação imediata" accent="destructive">
            <p className="text-sm text-muted-foreground">2 estoques abaixo do mínimo.</p>
          </AccentCard>
        </div>
      </ShowcaseSection>
    </UIShowcaseLayout>
  );
}
