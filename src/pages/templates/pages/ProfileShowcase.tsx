import { PagesLayout, PageSection } from './PagesLayout';
import { Mail, Phone, MapPin, Calendar, Briefcase, Edit, Camera } from 'lucide-react';

const activities = [
  { date: '15/04', text: 'Aprovou pedido #PED-2401', tag: 'Comercial' },
  { date: '14/04', text: 'Atualizou cadastro de Petrobras', tag: 'Cadastros' },
  { date: '13/04', text: 'Gerou relatório mensal de faturamento', tag: 'Financeiro' },
  { date: '12/04', text: 'Cadastrou 5 novos produtos', tag: 'Produção' },
];

const stats = [
  { value: '128', label: 'Pedidos aprovados' },
  { value: '45', label: 'Clientes gerenciados' },
  { value: '92%', label: 'Taxa de aprovação' },
];

export default function ProfileShowcase() {
  return (
    <PagesLayout title="Perfil do Usuário" description="Suas informações pessoais e atividade recente." category="Páginas">
      <PageSection className="!p-0 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/10" />
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-primary/20 text-primary flex items-center justify-center font-display text-2xl font-bold border-4 border-surface-container">
                AR
              </div>
              <button className="absolute bottom-1 right-1 w-7 h-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center"><Camera size={13} /></button>
            </div>
            <div className="flex-1 sm:pb-2">
              <h2 className="font-display text-xl font-bold text-foreground">Ana Paula Ribeiro</h2>
              <p className="text-sm text-muted-foreground">Gerente Comercial · Nova Smar S/A</p>
            </div>
            <button className="flex items-center gap-2 px-4 h-9 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90">
              <Edit size={13} /> Editar perfil
            </button>
          </div>
        </div>
      </PageSection>

      <div className="grid md:grid-cols-3 gap-4">
        <PageSection title="Informações" className="md:col-span-1">
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 text-muted-foreground"><Mail size={14} /> ana.ribeiro@smarnet.com</li>
            <li className="flex items-center gap-3 text-muted-foreground"><Phone size={14} /> +55 11 98765-4321</li>
            <li className="flex items-center gap-3 text-muted-foreground"><MapPin size={14} /> São Paulo, SP</li>
            <li className="flex items-center gap-3 text-muted-foreground"><Briefcase size={14} /> Comercial · Sênior</li>
            <li className="flex items-center gap-3 text-muted-foreground"><Calendar size={14} /> Desde 03/2019</li>
          </ul>
        </PageSection>

        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface-container rounded-2xl border border-border/40 p-5 text-center">
                <p className="font-display text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <PageSection title="Atividade Recente">
            <ul className="space-y-3">
              {activities.map((a, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-xs text-muted-foreground font-mono w-12 shrink-0 mt-0.5">{a.date}</span>
                  <span className="flex-1 text-foreground">{a.text}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-primary/10 text-primary">{a.tag}</span>
                </li>
              ))}
            </ul>
          </PageSection>
        </div>
      </div>
    </PagesLayout>
  );
}
