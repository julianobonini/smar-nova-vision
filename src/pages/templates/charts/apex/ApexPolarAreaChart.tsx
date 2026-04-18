import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, PolarGrid, PolarAngleAxis, RadialBarChart, RadialBar } from 'recharts';
import { ChartsLayout, ChartSection } from '../ChartsLayout';
import { pieData, palette } from '../chartData';

export default function ApexPolarAreaChart() {
  // Polar area: pie with equal angles, varying radius. Approximated using RadialBarChart.
  const polarData = pieData.map((d, i) => ({ ...d, fill: palette[i % palette.length] }));

  return (
    <ChartsLayout title="Polararea Charts" description="Áreas polares com ângulos iguais e raios variáveis.">
      <ChartSection title="Distribuição Polar">
        <ResponsiveContainer width="100%" height={420}>
          <PieChart>
            <Pie
              data={polarData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={(entry: any) => 60 + (entry.value / Math.max(...pieData.map(p => p.value))) * 90}
              label
            >
              {polarData.map((d, i) => <Cell key={i} fill={d.fill} fillOpacity={0.7} stroke={d.fill} strokeWidth={2} />)}
            </Pie>
            <Tooltip contentStyle={{ background: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: 12 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
          </PieChart>
        </ResponsiveContainer>
      </ChartSection>
    </ChartsLayout>
  );
}
