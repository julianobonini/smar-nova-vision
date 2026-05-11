import { useState } from 'react';
import { PagesLayout, PageSection } from './PagesLayout';
import {
  Mail, Phone, MapPin, Calendar, Briefcase, Camera, Save, X,
  Pencil, Building2, Globe, Linkedin, Shield, Bell, Lock, KeyRound,
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Mode = 'view' | 'edit';

const initialProfile = {
  firstName: 'Ana Paula',
  lastName: 'Ribeiro',
  email: 'ana.ribeiro@smarnet.com',
  phone: '+55 11 98765-4321',
  role: 'Gerente Comercial',
  department: 'Comercial',
  company: 'Nova Smar S/A',
  city: 'São Paulo, SP',
  since: '03/2019',
  website: 'smarnet.com.br',
  linkedin: 'in/anaribeiro',
  bio: 'Profissional com mais de 10 anos atuando em vendas industriais B2B, especializada em automação e instrumentação para o setor de Óleo & Gás.',
};

type Profile = typeof initialProfile;

const tabs = [
  { id: 'personal', label: 'Dados Pessoais', icon: Pencil },
  { id: 'security', label: 'Segurança', icon: Shield },
  { id: 'notifications', label: 'Notificações', icon: Bell },
];

export default function ProfileEditShowcase() {
  const [mode, setMode] = useState<Mode>('view');
  const [tab, setTab] = useState<string>('personal');
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [draft, setDraft] = useState<Profile>(initialProfile);

  const startEdit = () => {
    setDraft(profile);
    setMode('edit');
  };
  const cancel = () => {
    setDraft(profile);
    setMode('view');
  };
  const save = () => {
    setProfile(draft);
    setMode('view');
  };
  const set = <K extends keyof Profile>(k: K, v: Profile[K]) => setDraft((d) => ({ ...d, [k]: v }));

  const fullName = `${profile.firstName} ${profile.lastName}`;

  return (
    <PagesLayout title="Perfil — Consulta e Edição" description="Visualize e edite os dados do perfil de usuário." category="Páginas">
      {/* Header card */}
      <PageSection className="!p-0 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/10" />
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl bg-primary/20 text-primary flex items-center justify-center font-display text-2xl font-bold border-4 border-surface-container">
                {profile.firstName[0]}{profile.lastName[0]}
              </div>
              {mode === 'edit' && (
                <button className="absolute bottom-1 right-1 w-7 h-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  <Camera size={13} />
                </button>
              )}
            </div>
            <div className="flex-1 sm:pb-2 min-w-0">
              <h2 className="font-display text-xl font-bold text-foreground truncate">{fullName}</h2>
              <p className="text-sm text-muted-foreground truncate">
                {profile.role} · {profile.company}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {mode === 'view' ? (
                <button
                  onClick={startEdit}
                  className="flex items-center gap-2 px-4 h-9 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90"
                >
                  <Pencil size={13} /> Editar perfil
                </button>
              ) : (
                <>
                  <button
                    onClick={cancel}
                    className="flex items-center gap-2 px-4 h-9 rounded-lg bg-muted text-foreground text-xs font-semibold hover:bg-muted/80"
                  >
                    <X size={13} /> Cancelar
                  </button>
                  <button
                    onClick={save}
                    className="flex items-center gap-2 px-4 h-9 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90"
                  >
                    <Save size={13} /> Salvar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </PageSection>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Sidebar info */}
        <div className="lg:col-span-1 space-y-4">
          <PageSection title="Informações">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-muted-foreground"><Mail size={14} /> {profile.email}</li>
              <li className="flex items-center gap-3 text-muted-foreground"><Phone size={14} /> {profile.phone}</li>
              <li className="flex items-center gap-3 text-muted-foreground"><MapPin size={14} /> {profile.city}</li>
              <li className="flex items-center gap-3 text-muted-foreground"><Briefcase size={14} /> {profile.department}</li>
              <li className="flex items-center gap-3 text-muted-foreground"><Building2 size={14} /> {profile.company}</li>
              <li className="flex items-center gap-3 text-muted-foreground"><Calendar size={14} /> Desde {profile.since}</li>
              <li className="flex items-center gap-3 text-muted-foreground"><Globe size={14} /> {profile.website}</li>
              <li className="flex items-center gap-3 text-muted-foreground"><Linkedin size={14} /> {profile.linkedin}</li>
            </ul>
          </PageSection>

          <PageSection title="Bio">
            <p className="text-sm text-muted-foreground leading-relaxed">{profile.bio}</p>
          </PageSection>
        </div>

        {/* Main content */}
        <div className="lg:col-span-2 space-y-4">
          <PageSection className="!p-0 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-border/40 px-2">
              {tabs.map((t) => {
                const Icon = t.icon;
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(t.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      active
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon size={14} />
                    {t.label}
                  </button>
                );
              })}
            </div>

            <div className="p-6">
              {tab === 'personal' && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nome" value={mode === 'edit' ? draft.firstName : profile.firstName} mode={mode} onChange={(v) => set('firstName', v)} />
                  <Field label="Sobrenome" value={mode === 'edit' ? draft.lastName : profile.lastName} mode={mode} onChange={(v) => set('lastName', v)} />
                  <Field label="E-mail" type="email" value={mode === 'edit' ? draft.email : profile.email} mode={mode} onChange={(v) => set('email', v)} />
                  <Field label="Telefone" value={mode === 'edit' ? draft.phone : profile.phone} mode={mode} onChange={(v) => set('phone', v)} />
                  <Field label="Cargo" value={mode === 'edit' ? draft.role : profile.role} mode={mode} onChange={(v) => set('role', v)} />
                  <Field label="Departamento" value={mode === 'edit' ? draft.department : profile.department} mode={mode} onChange={(v) => set('department', v)} />
                  <Field label="Empresa" value={mode === 'edit' ? draft.company : profile.company} mode={mode} onChange={(v) => set('company', v)} />
                  <Field label="Cidade" value={mode === 'edit' ? draft.city : profile.city} mode={mode} onChange={(v) => set('city', v)} />
                  <Field label="Website" value={mode === 'edit' ? draft.website : profile.website} mode={mode} onChange={(v) => set('website', v)} />
                  <Field label="LinkedIn" value={mode === 'edit' ? draft.linkedin : profile.linkedin} mode={mode} onChange={(v) => set('linkedin', v)} />
                  <div className="sm:col-span-2">
                    <Label className="text-xs text-muted-foreground">Bio</Label>
                    {mode === 'edit' ? (
                      <textarea
                        value={draft.bio}
                        onChange={(e) => set('bio', e.target.value)}
                        rows={4}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-foreground leading-relaxed">{profile.bio}</p>
                    )}
                  </div>
                </div>
              )}

              {tab === 'security' && (
                <div className="space-y-4 max-w-md">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-low">
                    <Lock size={18} className="text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">Alterar senha</p>
                      <p className="text-xs text-muted-foreground">Última alteração há 3 meses</p>
                    </div>
                    <button className="px-3 h-8 rounded-md bg-primary text-primary-foreground text-xs font-semibold">Alterar</button>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-low">
                    <KeyRound size={18} className="text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">Autenticação em duas etapas</p>
                      <p className="text-xs text-muted-foreground">Aumenta a segurança da sua conta</p>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-success/10 text-success">Ativo</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-surface-container-low">
                    <Shield size={18} className="text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">Sessões ativas</p>
                      <p className="text-xs text-muted-foreground">3 dispositivos conectados</p>
                    </div>
                    <button className="px-3 h-8 rounded-md bg-muted text-foreground text-xs font-semibold">Gerenciar</button>
                  </div>
                </div>
              )}

              {tab === 'notifications' && (
                <ul className="space-y-3">
                  {[
                    { label: 'Novos pedidos', desc: 'Receber notificação ao chegar um novo pedido', enabled: true },
                    { label: 'Aprovação de orçamentos', desc: 'Alerta quando orçamentos forem aprovados', enabled: true },
                    { label: 'Resumo diário', desc: 'E-mail com indicadores do dia anterior', enabled: false },
                    { label: 'Avisos do sistema', desc: 'Manutenções e atualizações', enabled: true },
                  ].map((n) => (
                    <li key={n.label} className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground">{n.label}</p>
                        <p className="text-xs text-muted-foreground">{n.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked={n.enabled} className="sr-only peer" />
                        <div className="w-10 h-5 bg-muted peer-checked:bg-primary rounded-full transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-background after:rounded-full after:h-4 after:w-4 after:transition-transform peer-checked:after:translate-x-5" />
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </PageSection>
        </div>
      </div>
    </PagesLayout>
  );
}

function Field({
  label, value, mode, onChange, type = 'text',
}: {
  label: string;
  value: string;
  mode: Mode;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {mode === 'edit' ? (
        <Input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-1 h-9 text-sm"
        />
      ) : (
        <p className="mt-1 h-9 flex items-center text-sm text-foreground">{value}</p>
      )}
    </div>
  );
}
