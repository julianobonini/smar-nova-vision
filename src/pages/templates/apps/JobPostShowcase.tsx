import { AppsLayout, ShowcaseSection } from './AppsLayout';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';

export default function JobPostShowcase() {
  return (
    <AppsLayout title="Job Post" description="Formulário para publicação de nova vaga." category="Jobs">
      <ShowcaseSection title="Nova Vaga">
        <div className="max-w-2xl space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Título da Vaga</label>
            <input className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Ex: Desenvolvedor Full Stack Senior" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Empresa</label>
              <input className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Nome da empresa" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Localização</label>
              <input className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Cidade, Estado" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Tipo</label>
              <select className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                <option>Tempo Integral</option><option>Meio Período</option><option>PJ</option><option>Freelancer</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Salário Mín</label>
              <input type="number" className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="R$ 0" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Salário Máx</label>
              <input type="number" className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="R$ 0" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Descrição da Vaga</label>
            <textarea rows={5} className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="Descreva as responsabilidades..." />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Skills Necessárias</label>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'PostgreSQL'].map(s => (
                <span key={s} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/10 text-xs text-primary">{s} <X size={10} className="cursor-pointer" /></span>
              ))}
              <button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-muted/20 text-xs text-muted-foreground hover:text-foreground"><Plus size={10} /> Adicionar</button>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <Button>Publicar Vaga</Button>
            <Button variant="outline">Salvar Rascunho</Button>
          </div>
        </div>
      </ShowcaseSection>
    </AppsLayout>
  );
}
