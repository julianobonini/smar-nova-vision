import { UtilitiesLayout, ShowcaseSection } from './UtilitiesLayout';

const semanticColors = [
  { name: 'background', cls: 'bg-background', text: 'text-foreground' },
  { name: 'foreground', cls: 'bg-foreground', text: 'text-background' },
  { name: 'primary', cls: 'bg-primary', text: 'text-primary-foreground' },
  { name: 'secondary', cls: 'bg-secondary', text: 'text-secondary-foreground' },
  { name: 'muted', cls: 'bg-muted', text: 'text-muted-foreground' },
  { name: 'accent', cls: 'bg-accent', text: 'text-accent-foreground' },
  { name: 'destructive', cls: 'bg-destructive', text: 'text-destructive-foreground' },
  { name: 'card', cls: 'bg-card', text: 'text-card-foreground' },
  { name: 'popover', cls: 'bg-popover', text: 'text-popover-foreground' },
];

const statusColors = [
  { name: 'Success', bg: 'bg-success', text: 'text-success' },
  { name: 'Warning', bg: 'bg-warning', text: 'text-warning' },
  { name: 'Destructive', bg: 'bg-destructive', text: 'text-destructive' },
  { name: 'Info (Primary)', bg: 'bg-primary', text: 'text-primary' },
];

export default function ColorsShowcase() {
  return (
    <UtilitiesLayout title="Colors" description="Paleta de cores semânticas do design system.">
      <ShowcaseSection title="Cores Semânticas">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {semanticColors.map(c => (
            <div key={c.name} className="flex items-stretch rounded-lg overflow-hidden border border-border/40">
              <div className={`${c.cls} ${c.text} w-20 flex items-center justify-center text-xs font-mono shrink-0`}>Aa</div>
              <div className="px-4 py-3 flex-1">
                <div className="text-sm font-semibold text-foreground">{c.name}</div>
                <code className="text-xs text-muted-foreground">{c.cls}</code>
              </div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Cores de Status">
        <div className="flex flex-wrap gap-4">
          {statusColors.map(c => (
            <div key={c.name} className="flex flex-col items-center gap-2">
              <div className={`w-16 h-16 rounded-xl ${c.bg}`} />
              <span className={`text-xs font-semibold ${c.text}`}>{c.name}</span>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Opacidades">
        <div className="flex flex-wrap gap-3">
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(o => (
            <div key={o} className="flex flex-col items-center gap-1">
              <div className={`w-14 h-14 rounded-lg bg-primary/${o}`} />
              <code className="text-[10px] text-muted-foreground">{o}%</code>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Texto sobre Backgrounds">
        <div className="space-y-2">
          {[
            { bg: 'bg-background', fg: 'text-foreground', label: 'Default' },
            { bg: 'bg-primary', fg: 'text-primary-foreground', label: 'Primary' },
            { bg: 'bg-secondary', fg: 'text-secondary-foreground', label: 'Secondary' },
            { bg: 'bg-muted', fg: 'text-muted-foreground', label: 'Muted' },
            { bg: 'bg-destructive', fg: 'text-destructive-foreground', label: 'Destructive' },
          ].map(c => (
            <div key={c.label} className={`${c.bg} ${c.fg} px-4 py-3 rounded-lg text-sm font-medium`}>
              {c.label}: Texto de exemplo sobre fundo {c.label.toLowerCase()}
            </div>
          ))}
        </div>
      </ShowcaseSection>
    </UtilitiesLayout>
  );
}
