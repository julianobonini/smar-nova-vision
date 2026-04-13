import { AppsLayout, ShowcaseSection } from './AppsLayout';
import { Button } from '@/components/ui/button';
import { Upload, Plus, X } from 'lucide-react';

export default function ProjectsCreateShowcase() {
  return (
    <AppsLayout title="Create Project" description="Formulário completo para criação de novo projeto." category="Projects">
      <ShowcaseSection title="Novo Projeto">
        <div className="max-w-2xl space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Nome do Projeto</label>
            <input className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Ex: ERP SmarNet v4" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Data Início</label>
              <input type="date" className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Data Final</label>
              <input type="date" className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Descrição</label>
            <textarea rows={4} className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="Descreva o projeto..." />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Prioridade</label>
              <select className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                <option>Alta</option><option>Média</option><option>Baixa</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Status</label>
              <select className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                <option>Planejado</option><option>Em andamento</option><option>Pausado</option>
              </select>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Membros da Equipe</label>
            <div className="flex flex-wrap gap-2">
              {['Carlos M.', 'Ana S.', 'Lucas R.'].map(m => (
                <span key={m} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/10 text-xs text-primary">
                  {m} <X size={10} className="cursor-pointer" />
                </span>
              ))}
              <button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-muted/20 text-xs text-muted-foreground hover:text-foreground">
                <Plus size={10} /> Adicionar
              </button>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Anexos</label>
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
              <Upload size={24} className="mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">Arraste arquivos aqui ou clique para enviar</p>
              <p className="text-xs text-muted-foreground mt-1">PDF, DOC, XLS, PNG até 10MB</p>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <Button>Criar Projeto</Button>
            <Button variant="outline">Cancelar</Button>
          </div>
        </div>
      </ShowcaseSection>
    </AppsLayout>
  );
}
