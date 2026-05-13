import { PagesLayout, PageSection } from './PagesLayout';
import { Mail, Linkedin, Github, MoreVertical, UserPlus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/buttons';

interface TeamMember {
  name: string;
  role: string;
  dept: string;
  email: string;
  followers: number;
  following: number;
  bio: string;
  cover: string;
  avatar: string;
}

const team: TeamMember[] = [
  { name: 'Carlos Eduardo Mendes', role: 'CEO & Fundador', dept: 'Diretoria', email: 'carlos@smarnet.com', followers: 1284, following: 312, bio: 'Lidera a SmarNet há 12 anos com foco em inovação industrial e cultura de pessoas.', cover: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600', avatar: 'https://i.pravatar.cc/150?img=12' },
  { name: 'Ana Paula Ribeiro', role: 'CTO', dept: 'Tecnologia', email: 'ana@smarnet.com', followers: 942, following: 188, bio: 'Arquiteta de plataformas distribuídas, apaixonada por DX e times de alta performance.', cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600', avatar: 'https://i.pravatar.cc/150?img=47' },
  { name: 'Roberto Silva', role: 'COO', dept: 'Operações', email: 'roberto@smarnet.com', followers: 612, following: 220, bio: 'Especialista em manufatura enxuta e operações industriais em escala global.', cover: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600', avatar: 'https://i.pravatar.cc/150?img=33' },
  { name: 'Marina Costa', role: 'CFO', dept: 'Financeiro', email: 'marina@smarnet.com', followers: 530, following: 140, bio: 'Estrutura financeira e estratégica, com passagem por grandes grupos industriais.', cover: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600', avatar: 'https://i.pravatar.cc/150?img=44' },
  { name: 'Pedro Santos', role: 'Head de Engenharia', dept: 'Tecnologia', email: 'pedro@smarnet.com', followers: 478, following: 305, bio: 'Constrói squads de engenharia que entregam software industrial de classe mundial.', cover: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600', avatar: 'https://i.pravatar.cc/150?img=15' },
  { name: 'Juliana Almeida', role: 'Head de Produto', dept: 'Tecnologia', email: 'juliana@smarnet.com', followers: 690, following: 410, bio: 'Conecta dores reais de chão de fábrica a uma visão de produto orientada a outcomes.', cover: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600', avatar: 'https://i.pravatar.cc/150?img=49' },
  { name: 'Fernando Lima', role: 'Head Comercial', dept: 'Comercial', email: 'fernando@smarnet.com', followers: 812, following: 502, bio: 'Lidera vendas consultivas para indústrias de médio e grande porte na América Latina.', cover: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600', avatar: 'https://i.pravatar.cc/150?img=68' },
  { name: 'Camila Rocha', role: 'Head de RH', dept: 'Pessoas', email: 'camila@smarnet.com', followers: 1102, following: 388, bio: 'Cuida da cultura, do bem-estar e do desenvolvimento de quem constrói a SmarNet.', cover: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600', avatar: 'https://i.pravatar.cc/150?img=45' },
];

const departments = ['Todos', 'Diretoria', 'Tecnologia', 'Comercial', 'Operações'];

function formatCount(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k`;
  return String(n);
}

function ProfileCard({ member }: { member: TeamMember }) {
  const initials = member.name.split(' ').map(w => w[0]).slice(0, 2).join('');
  return (
    <article className="relative rounded-3xl bg-card text-card-foreground shadow-elevated overflow-hidden flex flex-col">
      {/* Cover */}
      <div className="relative h-32">
        <img src={member.cover} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* Body */}
      <div className="relative px-6 pt-16 pb-7 flex flex-col items-center text-center">
        {/* Avatar overlapping cover */}
        <Avatar className="absolute -top-14 left-1/2 -translate-x-1/2 h-28 w-28 border-4 border-card shadow-elevated">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback className="bg-primary/10 text-primary font-display font-bold text-xl">{initials}</AvatarFallback>
        </Avatar>

        {/* Kebab */}
        <button
          type="button"
          aria-label="Mais ações"
          className="absolute top-3 right-3 w-8 h-8 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted flex items-center justify-center transition-colors"
        >
          <MoreVertical size={18} />
        </button>

        <h3 className="font-display font-extrabold text-xl text-foreground">{member.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{member.role}</p>

        <div className="grid grid-cols-2 gap-8 mt-5">
          <div>
            <p className="font-display text-3xl font-extrabold text-primary leading-none">{formatCount(member.followers)}</p>
            <p className="text-xs text-muted-foreground mt-1.5">Seguidores</p>
          </div>
          <div>
            <p className="font-display text-3xl font-extrabold text-primary leading-none">{formatCount(member.following)}</p>
            <p className="text-xs text-muted-foreground mt-1.5">Seguindo</p>
          </div>
        </div>

        <Button
          className="w-full mt-6 h-12 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 font-display font-bold text-base"
        >
          <UserPlus size={16} /> Seguir
        </Button>

        <p className="text-sm text-muted-foreground leading-relaxed mt-5">{member.bio}</p>

        <div className="flex justify-center gap-1.5 mt-5 pt-5 border-t border-border/50 w-full">
          <IconButton variant="ghost" size="sm" label="E-mail" icon={Mail} iconSize={14} />
          <IconButton variant="ghost" size="sm" label="LinkedIn" icon={Linkedin} iconSize={14} />
          <IconButton variant="ghost" size="sm" label="GitHub" icon={Github} iconSize={14} />
        </div>
      </div>
    </article>
  );
}

export default function TeamShowcase() {
  return (
    <PagesLayout title="Nossa Equipe" description="As pessoas por trás da SmarNet." category="Páginas">
      <PageSection>
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl font-bold text-foreground">Conheça quem faz a diferença</h2>
          <p className="text-sm text-muted-foreground mt-2">Profissionais experientes e apaixonados pelo que fazem.</p>
          <div className="flex flex-wrap gap-2 justify-center mt-5">
            {departments.map((d, i) => (
              <button
                key={d}
                className={`px-4 h-8 rounded-lg text-xs font-semibold ${i === 0 ? 'bg-primary text-primary-foreground' : 'bg-surface-container-low text-muted-foreground hover:text-foreground'}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((t) => (
            <div key={t.name} className="bg-surface-container-low rounded-2xl p-5 text-center hover:bg-surface-container-low/70 transition-colors">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center font-display text-xl font-bold">
                {t.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
              </div>
              <p className="font-semibold text-foreground mt-3">{t.name}</p>
              <p className="text-xs text-primary font-semibold mt-0.5">{t.role}</p>
              <p className="text-[11px] text-muted-foreground">{t.dept}</p>
              <div className="flex justify-center gap-2 mt-3 text-muted-foreground">
                <button className="w-7 h-7 rounded-lg hover:bg-surface-container hover:text-foreground flex items-center justify-center"><Mail size={12} /></button>
                <button className="w-7 h-7 rounded-lg hover:bg-surface-container hover:text-foreground flex items-center justify-center"><Linkedin size={12} /></button>
                <button className="w-7 h-7 rounded-lg hover:bg-surface-container hover:text-foreground flex items-center justify-center"><Github size={12} /></button>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </PagesLayout>
  );
}
