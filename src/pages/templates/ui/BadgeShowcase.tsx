import { UIShowcaseLayout, ShowcaseSection } from './UIShowcaseLayout';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Clock, XCircle, AlertTriangle, Star, Zap, ArrowUp, ArrowDown } from 'lucide-react';

export default function BadgeShowcase() {
  return (
    <UIShowcaseLayout title="Badge" description="Badges para rotulagem, status e contadores.">
      <ShowcaseSection title="Variantes Padrão">
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Badges de Status">
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-status-success/10 text-status-success border border-status-success/20">
            <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse" /> Ativo
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-status-warning/10 text-status-warning border border-status-warning/20">
            <span className="w-1.5 h-1.5 rounded-full bg-status-warning" /> Pendente
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-destructive/10 text-destructive border border-destructive/20">
            <span className="w-1.5 h-1.5 rounded-full bg-destructive" /> Cancelado
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-status-info/10 text-status-info border border-status-info/20">
            <span className="w-1.5 h-1.5 rounded-full bg-status-info" /> Em análise
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" /> Inativo
          </span>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Badges com Ícone">
        <div className="flex flex-wrap gap-3">
          <Badge className="gap-1"><CheckCircle2 size={12} /> Aprovado</Badge>
          <Badge variant="secondary" className="gap-1"><Clock size={12} /> Aguardando</Badge>
          <Badge variant="destructive" className="gap-1"><XCircle size={12} /> Rejeitado</Badge>
          <Badge variant="outline" className="gap-1"><AlertTriangle size={12} /> Atenção</Badge>
          <Badge className="gap-1 bg-tertiary text-tertiary-foreground hover:bg-tertiary/80"><Star size={12} /> Premium</Badge>
          <Badge className="gap-1 bg-secondary text-secondary-foreground"><Zap size={12} /> Urgente</Badge>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Contadores / Notificações">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">
              <Star size={18} className="text-muted-foreground" />
            </div>
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center">3</span>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">
              <Star size={18} className="text-muted-foreground" />
            </div>
            <span className="absolute -top-1 -right-2 px-1.5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">99+</span>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center">
              <Star size={18} className="text-muted-foreground" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-status-success border-2 border-surface-container" />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Badges de Tendência">
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-status-success/10 text-status-success text-xs font-semibold">
            <ArrowUp size={12} /> +12.5%
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-destructive/10 text-destructive text-xs font-semibold">
            <ArrowDown size={12} /> -3.2%
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-muted text-muted-foreground text-xs font-semibold">
            0.0%
          </span>
        </div>
      </ShowcaseSection>
    </UIShowcaseLayout>
  );
}
