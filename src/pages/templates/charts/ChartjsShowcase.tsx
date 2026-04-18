import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, AreaChart, Area } from 'recharts';
import { ChartsLayout, ChartSection } from './ChartsLayout';
import { monthly, pieData, palette, chartColors } from './chartData';

export default function ChartjsShowcase() {
  return (
    <ChartsLayout title="Chartjs Charts" description="Estilo Chart.js — gráficos clean e responsivos." category="Chartjs">
      <ChartSection title="Line Chart">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthly}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip contentStyle={{ background: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: 12 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="a" name="Vendas" stroke={chartColors.primary} strokeWidth={2} />
            <Line type="monotone" dataKey="b" name="Custo" stroke={chartColors.warning} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </ChartSection>

      <ChartSection title="Bar Chart">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthly.slice(0, 6)}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip cursor={{ fill: 'hsl(var(--muted))' }} contentStyle={{ background: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: 12 }} />
            <Bar dataKey="a" fill={chartColors.secondary} radius={[6, 6, 0, 0]} />
            <Bar dataKey="b" fill={chartColors.accent} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartSection>

      <ChartSection title="Doughnut">
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={120}>
              {pieData.map((_, i) => <Cell key={i} fill={palette[i % palette.length]} />)}
            </Pie>
            <Tooltip contentStyle={{ background: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: 12 }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
          </PieChart>
        </ResponsiveContainer>
      </ChartSection>

      <ChartSection title="Area Chart">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={monthly}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
            <Tooltip contentStyle={{ background: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: 12 }} />
            <Area type="monotone" dataKey="a" stroke={chartColors.primary} fill={chartColors.primary} fillOpacity={0.3} />
            <Area type="monotone" dataKey="b" stroke={chartColors.accent} fill={chartColors.accent} fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartSection>
    </ChartsLayout>
  );
}
