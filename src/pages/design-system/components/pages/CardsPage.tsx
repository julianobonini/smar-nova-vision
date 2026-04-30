import { DollarSign, Users, Package, TrendingUp } from 'lucide-react';
import { KpiCard, AccentCard, ActivityCard } from '@/components/ui/cards';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ComponentDoc, DocSection, VariantSection, PropsTable } from '../_docs';

export default function CardsPage() {
  return (
    <ComponentDoc
      summary="Cards especializados: KpiCard (métrica com tendência), AccentCard (com borda lateral colorida em 10 cores × 3 tons) e ActivityCard (lista de eventos)."
      importPath="@/components/ui/cards"
    >
      <DocSection title="KpiCard" description="Métrica com label, valor, ícone e tendência opcional.">
        <VariantSection
          title="Variantes"
          preview={
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <KpiCard label="Faturamento" value="R$ 482k" change="+12,4%" trend="up" icon={DollarSign} iconColor="text-status-success" />
              <KpiCard label="Clientes" value="1.284" change="+8,2%" trend="up" icon={Users} iconColor="text-secondary" />
              <KpiCard label="Pedidos" value="312" change="-3,1%" trend="down" icon={Package} iconColor="text-warning" />
              <KpiCard label="Conversão" value="4,8%" icon={TrendingUp} iconColor="text-primary" />
            </div>
          }
          code={`<KpiCard
  label="Faturamento"
  value="R$ 482k"
  change="+12,4%"
  trend="up"
  icon={DollarSign}
  iconColor="text-status-success"
/>`}
        />
        <PropsTable
          rows={[
            { name: 'label', type: 'string', required: true, description: 'Rótulo da métrica.' },
            { name: 'value', type: 'string', required: true, description: 'Valor principal.' },
            { name: 'change', type: 'string', description: 'Texto da variação (ex: "+12.4%").' },
            { name: 'trend', type: '"up" | "down" | "neutral"', default: '"neutral"', description: 'Define cor/ícone da variação.' },
            { name: 'comparisonLabel', type: 'string', default: '"vs mês anterior"', description: 'Texto após a variação.' },
            { name: 'icon', type: 'LucideIcon', description: 'Ícone exibido no canto superior direito.' },
            { name: 'iconColor', type: 'string', default: '"text-primary"', description: 'Classe Tailwind para a cor.' },
          ]}
        />
      </DocSection>

      <DocSection title="AccentCard" description="Card com borda lateral em 10 cores × 3 tons.">
        <VariantSection
          title="Tons"
          preview={
            <div className="grid sm:grid-cols-3 gap-4">
              <AccentCard accent="primary" tone="soft" title="Soft" description="Borda + fundo /5" />
              <AccentCard accent="success" tone="solid" title="Solid" description="Fundo cheio na cor" />
              <AccentCard accent="warning" tone="outline" title="Outline" description="Apenas borda lateral" />
            </div>
          }
          code={`<AccentCard accent="primary" tone="soft" title="Soft" description="..." />
<AccentCard accent="success" tone="solid" title="Solid" description="..." />
<AccentCard accent="warning" tone="outline" title="Outline" description="..." />`}
        />
        <VariantSection
          title="Cores"
          preview={
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {(['primary', 'secondary', 'success', 'warning', 'destructive', 'info'] as const).map((c) => (
                <AccentCard key={c} accent={c} title={c.charAt(0).toUpperCase() + c.slice(1)} description="Conteúdo de exemplo do card." />
              ))}
            </div>
          }
          code={`<AccentCard accent="primary" title="Primary" />
<AccentCard accent="success" title="Success" />`}
        />
        <PropsTable
          rows={[
            { name: 'title', type: 'string', required: true, description: 'Título.' },
            { name: 'description', type: 'string', description: 'Subtítulo.' },
            { name: 'accent', type: 'AccentColor', default: '"secondary"', description: '10 cores semânticas.' },
            { name: 'tone', type: '"solid" | "soft" | "outline"', default: '"soft"', description: 'Tom da borda/fundo.' },
            { name: 'children', type: 'ReactNode', description: 'Conteúdo do CardContent.' },
            { name: 'footer', type: 'ReactNode', description: 'CardFooter opcional.' },
          ]}
        />
      </DocSection>

      <DocSection title="ActivityCard" description="Lista de eventos/atividades com badges e footer de ação.">
        <VariantSection
          title="Lista de atividades"
          preview={
            <ActivityCard
              title="Atividades recentes"
              description="Últimas movimentações"
              items={[
                { id: 1, text: 'Pedido #4821 faturado', time: '2 min', badge: 'Vendas' },
                { id: 2, text: 'Cliente Nova Smar atualizado', time: '15 min', badge: 'CRM', badgeVariant: 'secondary' },
                { id: 3, text: 'Nova proposta enviada', time: '1 h', badge: 'Comercial' },
                { id: 4, text: 'Pedido #4815 cancelado', time: '3 h', badge: 'Vendas', badgeVariant: 'destructive' },
              ]}
              onFooterClick={() => {}}
            />
          }
          code={`<ActivityCard
  title="Atividades recentes"
  items={[
    { text: 'Pedido faturado', time: '2 min', badge: 'Vendas' },
  ]}
  onFooterClick={() => navigate('/atividades')}
/>`}
        />
        <PropsTable
          rows={[
            { name: 'title', type: 'string', required: true, description: 'Título do card.' },
            { name: 'description', type: 'string', description: 'Subtítulo.' },
            { name: 'items', type: 'ActivityItem[]', required: true, description: '[{ id?, text, time, badge?, badgeVariant? }]' },
            { name: 'showMenu', type: 'boolean', default: 'true', description: 'Botão de menu no header.' },
            { name: 'onFooterClick', type: '() => void', description: 'Habilita o botão de "Ver todas".' },
            { name: 'footerLabel', type: 'string', default: '"Ver todas"', description: 'Texto do footer.' },
            { name: 'emptyState', type: 'ReactNode', description: 'Conteúdo quando items=[].' },
          ]}
        />
      </DocSection>

      <DocSection title="Card (primitivo)" description="Wrapper shadcn de baixo nível.">
        <VariantSection
          title="Card padrão"
          preview={
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Pedido #4821</CardTitle>
                <CardDescription>Cliente Nova Smar S/A · 12/04/2026</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Conjunto de 3 transmissores TT300.
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline">Ver detalhes</Button>
                <Button>Faturar</Button>
              </CardFooter>
            </Card>
          }
          code={`<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Subtítulo</CardDescription>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>...</CardFooter>
</Card>`}
        />
      </DocSection>
    </ComponentDoc>
  );
}
