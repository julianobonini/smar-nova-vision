import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { Demo } from './Demo';

const data = [
  { mes: 'Jan', valor: 320 },
  { mes: 'Fev', valor: 410 },
  { mes: 'Mar', valor: 380 },
  { mes: 'Abr', valor: 520 },
  { mes: 'Mai', valor: 480 },
  { mes: 'Jun', valor: 610 },
];

const config = { valor: { label: 'Faturamento', color: 'hsl(var(--primary))' } };

export default function ChartPage() {
  return (
    <Demo title="Chart (recharts wrapper)" description="Wrapper oficial do shadcn sobre recharts com tema integrado.">
      <ChartContainer config={config} className="h-72 w-full max-w-2xl">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="mes" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="valor" fill="var(--color-valor)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </Demo>
  );
}
