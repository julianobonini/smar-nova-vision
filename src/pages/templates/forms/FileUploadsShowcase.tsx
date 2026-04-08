import { useState } from 'react';
import { Upload, FileText, Image, X, CheckCircle2, File } from 'lucide-react';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export default function FileUploadsShowcase() {
  const [files] = useState([
    { name: 'proposta-comercial.pdf', size: '2.4 MB', type: 'pdf', progress: 100 },
    { name: 'foto-equipamento.jpg', size: '1.8 MB', type: 'image', progress: 100 },
    { name: 'planilha-custos.xlsx', size: '540 KB', type: 'file', progress: 65 },
  ]);

  return (
    <FormsShowcaseLayout title="File Uploads" subtitle="Form Elements" description="Componentes de upload de arquivos com drag-and-drop e indicadores de progresso.">
      <ShowcaseSection title="Área de Upload (Drag & Drop)">
        <div className="border-2 border-dashed border-border/60 rounded-2xl p-10 text-center hover:border-secondary/50 hover:bg-secondary/5 transition-all cursor-pointer">
          <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
            <Upload size={24} className="text-secondary" />
          </div>
          <p className="text-sm font-semibold text-foreground">Arraste arquivos aqui ou clique para selecionar</p>
          <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG, XLSX até 10MB</p>
          <Button variant="outline" size="sm" className="mt-4">
            Selecionar Arquivos
          </Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Upload Compacto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Documento</Label>
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background text-sm text-muted-foreground">
                <FileText size={16} /> Nenhum arquivo selecionado
              </div>
              <Button variant="secondary" size="sm">Selecionar</Button>
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Imagem</Label>
            <div className="flex gap-2">
              <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background text-sm text-muted-foreground">
                <Image size={16} /> Nenhuma imagem selecionada
              </div>
              <Button variant="secondary" size="sm">Selecionar</Button>
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Lista de Arquivos com Progresso">
        <div className="space-y-3">
          {files.map((file, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border/30">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                file.type === 'pdf' ? 'bg-red-500/10 text-red-400' :
                file.type === 'image' ? 'bg-blue-500/10 text-blue-400' :
                'bg-emerald-500/10 text-emerald-400'
              }`}>
                {file.type === 'pdf' ? <FileText size={18} /> :
                 file.type === 'image' ? <Image size={18} /> :
                 <File size={18} />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{file.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Progress value={file.progress} className="h-1.5 flex-1" />
                  <span className="text-[10px] font-semibold text-muted-foreground shrink-0">{file.progress}%</span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-0.5">{file.size}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                {file.progress === 100 ? (
                  <CheckCircle2 size={18} className="text-status-success" />
                ) : null}
                <button className="p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-destructive transition-colors">
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Upload de Avatar / Imagem">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-muted/30 border-2 border-dashed border-border/60 flex items-center justify-center hover:border-secondary/50 cursor-pointer transition-colors">
            <Image size={24} className="text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Foto do Produto</p>
            <p className="text-xs text-muted-foreground mt-0.5">JPG ou PNG, máximo 5MB</p>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" size="sm">Upload</Button>
              <Button variant="ghost" size="sm" className="text-destructive">Remover</Button>
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
