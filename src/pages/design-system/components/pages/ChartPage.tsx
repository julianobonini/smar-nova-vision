import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart, Area, AreaChart, Pie, PieChart, Cell } from 'recharts';
import { ComponentDoc, DocSection, VariantSection, PropsTable, UsageNote, type PropDef } from '../_docs';

const data = [
  { mes: 'Jan', valor: 320, meta: 400 },
  { mes: 'Fev', valor: 410, meta: 400 },
  { mes: 'Mar', valor: 380, meta: 420 },
  { mes: 'Abr', valor: 520, meta: 450 },
  { mes: 'Mai', valor: 480, meta: 480 },
  { mes: 'Jun', valor: 610, meta: 500 },
];

const pieData = [
  { name: 'Aprovados', value: 412, fill: 'hsl(var(--success))' },
  { name: 'Pendentes', value: 128, fill: 'hsl(var(--warning))' },
  { name: 'Cancelados', value: 38, fill: 'hsl(var(--destructive))' },
];

const barConfig = { valor: { label: 'Faturamento', color: 'hsl(var(--primary))' } };
const comboConfig = {
  valor: { label: 'Realizado', color: 'hsl(var(--primary))' },
  meta: { label: 'Meta', color: 'hsl(var(--secondary))' },
};
const areaConfig = { valor: { label: 'Faturamento', color: 'hsl(var(--secondary))' } };

const containerProps: PropDef[] = [
  { name: 'config', type: 'ChartConfig', required: true, description: 'Mapeamento dataKey → { label, color, icon } usado por tooltip e legenda.' },
  { name: 'className', type: 'string', description: 'Geralmente define h-* (altura) e max-w-* (largura).' },
];

export default function ChartPage() {
  return (
    <ComponentDoc
      summary="Wrapper oficial shadcn sobre Recharts — integra tema (cores, fonte, tooltip) automaticamente via tokens semânticos. Suporta modo claro/escuro nativamente."
      importPath="import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'"
    >
      <DocSection title="Chart">
        <VariantSection
          title="Bar Chart simples"
          description="Comparativo mensal — barras com gradiente de cantos arredondados e grid sutil."
          preview={
            <ChartContainer config={barConfig} className="h-72 w-full max-w-2xl">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="mes" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="valor" fill="var(--color-valor)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ChartContainer>
          }
          code={`<ChartContainer config={{ valor: { label: 'Faturamento', color: 'hsl(var(--primary))' } }}>
  <BarChart data={data}>
    <CartesianGrid stroke="hsl(var(--border))" />
    <XAxis dataKey="mes" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="valor" fill="var(--color-valor)" radius={[8, 8, 0, 0]} />
  </BarChart>
</ChartContainer>`}
        />

        <VariantSection
          title="Combo Bar + Line (realizado vs meta)"
          description="Compare execução contra meta. As cores vêm dos tokens primary/secondary — adaptam ao tema."
          preview={
            <ChartContainer config={comboConfig} className="h-72 w-full max-w-2xl">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="mes" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="valor" fill="var(--color-valor)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="meta" fill="var(--color-meta)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ChartContainer>
          }
          code={`<ChartContainer config={comboConfig}>
  <BarChart data={data}>
    <Bar dataKey="valor" fill="var(--color-valor)" />
    <Bar dataKey="meta" fill="var(--color-meta)" />
    <ChartLegend content={<ChartLegendContent />} />
  </BarChart>
</ChartContainer>`}
        />

        <VariantSection
          title="Area Chart"
          description="Visualização de tendência ao longo do tempo, com gradiente sutil."
          preview={
            <ChartContainer config={areaConfig} className="h-72 w-full max-w-2xl">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="fillValor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="mes" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area type="monotone" dataKey="valor" stroke="hsl(var(--secondary))" strokeWidth={2} fill="url(#fillValor)" />
              </AreaChart>
            </ChartContainer>
          }
          code={`<AreaChart data={data}>
  <defs>
    <linearGradient id="fillValor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.6} />
      <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0.05} />
    </linearGradient>
  </defs>
  <Area type="monotone" dataKey="valor" stroke="hsl(var(--secondary))" fill="url(#fillValor)" />
</AreaChart>`}
        />

        <VariantSection
          title="Line Chart"
          description="Para séries com pontos discretos — destaque variações sutis."
          preview={
            <ChartContainer config={barConfig} className="h-72 w-full max-w-2xl">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="mes" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="valor" stroke="var(--color-valor)" strokeWidth={2.5} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ChartContainer>
          }
          code={`<LineChart data={data}>
  <Line type="monotone" dataKey="valor" stroke="var(--color-valor)" strokeWidth={2.5} />
</LineChart>`}
        />

        <VariantSection
          title="Pie Chart com cores semânticas"
          description="Distribuição categórica — usa tokens success/warning/destructive para significado imediato."
          preview={
            <ChartContainer
              config={{
                Aprovados: { label: 'Aprovados', color: 'hsl(var(--success))' },
                Pendentes: { label: 'Pendentes', color: 'hsl(var(--warning))' },
                Cancelados: { label: 'Cancelados', color: 'hsl(var(--destructive))' },
              }}
              className="h-72 w-full max-w-md mx-auto"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
                <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90} strokeWidth={2}>
                  {pieData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
                </Pie>
                <ChartLegend content={<ChartLegendContent nameKey="name" />} />
              </PieChart>
            </ChartContainer>
          }
          code={`<PieChart>
  <Pie data={data} dataKey="value" nameKey="name" innerRadius={50} outerRadius={90}>
    {data.map((e, i) => <Cell key={i} fill={e.fill} />)}
  </Pie>
  <ChartLegend content={<ChartLegendContent />} />
</PieChart>`}
        />

        <PropsTable rows={containerProps} title="ChartContainer" />

        <UsageNote type="tip">
          Sempre defina cores via <code className="font-mono text-[11px]">hsl(var(--token))</code>. O wrapper injeta variáveis CSS <code className="font-mono text-[11px]">--color-{'{'}dataKey{'}'}</code> automaticamente — use-as em <code className="font-mono text-[11px]">fill</code>/<code className="font-mono text-[11px]">stroke</code>.
        </UsageNote>

        <UsageNote type="info">
          O tooltip e a legenda do shadcn já lidam com modo escuro, formatação de número e ícones. Evite reimplementar versões customizadas.
        </UsageNote>

        <UsageNote type="warning">
          Para datasets grandes (&gt;500 pontos), prefira amostragem ou virtualização. Recharts re-renderiza todos os elementos SVG a cada mudança.
        </UsageNote>
      </DocSection>
    </ComponentDoc>
  );
}
