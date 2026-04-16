import { PagesLayout, PageSection } from './PagesLayout';
import { Mail, Linkedin, Github } from 'lucide-react';

const team = [
  { name: 'Carlos Eduardo Mendes', role: 'CEO & Fundador', dept: 'Diretoria', email: 'carlos@smarnet.com' },
  { name: 'Ana Paula Ribeiro', role: 'CTO', dept: 'Tecnologia', email: 'ana@smarnet.com' },
  { name: 'Roberto Silva', role: 'COO', dept: 'Operações', email: 'roberto@smarnet.com' },
  { name: 'Marina Costa', role: 'CFO', dept: 'Financeiro', email: 'marina@smarnet.com' },
  { name: 'Pedro Santos', role: 'Head de Engenharia', dept: 'Tecnologia', email: 'pedro@smarnet.com' },
  { name: 'Juliana Almeida', role: 'Head de Produto', dept: 'Tecnologia', email: 'juliana@smarnet.com' },
  { name: 'Fernando Lima', role: 'Head Comercial', dept: 'Comercial', email: 'fernando@smarnet.com' },
  { name: 'Camila Rocha', role: 'Head de RH', dept: 'Pessoas', email: 'camila@smarnet.com' },
];

const departments = ['Todos', 'Diretoria', 'Tecnologia', 'Comercial', 'Operações'];

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
