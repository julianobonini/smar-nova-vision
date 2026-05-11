import { useState } from 'react';
import {
  Folder,
  FileText,
  Image as ImageIcon,
  FileSpreadsheet,
  Video,
  Download,
  MoreVertical,
  Upload,
  Plus,
  HardDrive,
  Share2,
  Trash2,
} from 'lucide-react';
import { ComponentDoc, DocSection, VariantSection, UsageNote } from '../_docs';
import { FormFileUpload, FileListItem, FormAvatarUpload } from '@/components/ui/forms';

/* ============================================================
 * File Manager — Design System
 * Componentes para gerenciamento de arquivos: dropzone de upload,
 * lista com progresso, avatar/imagem e tela completa de gestão
 * (pastas, estatísticas e arquivos recentes).
 * Todos os blocos usam tokens semânticos (bg-surface-container,
 * border-border, status-*) → suportam light/dark automaticamente.
 * ============================================================ */

/* --------------------- Sub-blocos de preview --------------------- */

function StatTile({ label, value, sub, icon: Icon }: { label: string; value: string; sub: string; icon: any }) {
  return (
    <div className="bg-surface-container rounded-2xl border border-border/40 p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">{label}</p>
        <span className="h-7 w-7 rounded-lg bg-primary/10 text-primary grid place-items-center">
          <Icon size={14} />
        </span>
      </div>
      <p className="font-display text-2xl font-bold text-foreground mt-2">{value}</p>
      <p className="text-[11px] text-muted-foreground">{sub}</p>
    </div>
  );
}

function DropzonePreview() {
  return (
    <FormFileUpload
      title="Arraste arquivos aqui ou clique para selecionar"
      helperText="PDF, JPG, PNG, XLSX até 10MB"
      buttonLabel="Selecionar arquivos"
      multiple
    />
  );
}

function CompactUploadPreview() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <FormFileUpload
        variant="compact"
        label="Documento"
        buttonLabel="Selecionar"
        accept=".pdf,.doc,.docx"
        helperText="Nenhum arquivo selecionado"
      />
      <FormFileUpload
        variant="compact"
        label="Imagem"
        buttonLabel="Selecionar"
        accept="image/*"
        helperText="JPG ou PNG, até 5MB"
      />
    </div>
  );
}

function FileProgressList() {
  const [files, setFiles] = useState([
    { name: 'proposta-comercial.pdf', size: '2.4 MB', type: 'pdf', progress: 100 },
    { name: 'foto-equipamento.jpg', size: '1.8 MB', type: 'image', progress: 100 },
    { name: 'planilha-custos.xlsx', size: '540 KB', type: 'file', progress: 65 },
  ]);
  return (
    <div className="space-y-3">
      {files.map((f, i) => (
        <FileListItem
          key={i}
          {...(f as any)}
          onRemove={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))}
        />
      ))}
    </div>
  );
}

function AvatarUploadPreview() {
  return (
    <FormAvatarUpload
      label="Foto do produto"
      description="JPG ou PNG, máximo 5MB"
      onPick={() => {}}
      onRemove={() => {}}
    />
  );
}

/* --- Tela completa: Stats + Pastas + Arquivos recentes ---------- */

const folders = [
  { name: 'Contratos', files: 24, size: '125 MB' },
  { name: 'Notas Fiscais 2025', files: 142, size: '380 MB' },
  { name: 'Relatórios', files: 56, size: '210 MB' },
  { name: 'Marketing', files: 89, size: '1.2 GB' },
];

const recentFiles = [
  { name: 'Contrato_Petrobras_2025.pdf', size: '2.4 MB', date: '15/04/2025', icon: FileText, color: 'text-destructive' },
  { name: 'Relatorio_Faturamento_Marco.xlsx', size: '845 KB', date: '14/04/2025', icon: FileSpreadsheet, color: 'text-status-success' },
  { name: 'Apresentacao_Comercial.pptx', size: '12 MB', date: '13/04/2025', icon: FileText, color: 'text-warning' },
  { name: 'Logo_Cliente_Vector.png', size: '320 KB', date: '12/04/2025', icon: ImageIcon, color: 'text-primary' },
  { name: 'Treinamento_Operadores.mp4', size: '156 MB', date: '10/04/2025', icon: Video, color: 'text-secondary' },
];

function FullManagerPreview() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatTile label="Armazenamento" value="24.5 GB" sub="de 100 GB" icon={HardDrive} />
        <StatTile label="Arquivos totais" value="1.247" sub="em 38 pastas" icon={FileText} />
        <StatTile label="Compartilhados" value="128" sub="com a equipe" icon={Share2} />
        <StatTile label="Lixeira" value="12" sub="arquivos" icon={Trash2} />
      </div>

      <div className="bg-surface-container rounded-2xl border border-border/40 p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold text-foreground">Pastas</p>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 h-9 rounded-lg border border-border text-xs font-semibold text-foreground hover:bg-surface-container-low transition-colors">
              <Plus size={14} /> Nova pasta
            </button>
            <button className="flex items-center gap-2 px-3 h-9 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors">
              <Upload size={14} /> Enviar arquivo
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {folders.map((f) => (
            <button
              key={f.name}
              className="text-left bg-surface-container-low rounded-xl p-4 border border-border/30 hover:border-primary/40 hover:bg-surface-container-low/70 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <Folder className="text-primary" size={26} fill="currentColor" />
                <MoreVertical size={14} className="text-muted-foreground" />
              </div>
              <p className="font-semibold text-foreground text-sm truncate">{f.name}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                {f.files} arquivos · {f.size}
              </p>
            </button>
          ))}
        </div>

        <p className="font-semibold text-foreground mb-2">Arquivos recentes</p>
        <div className="space-y-1">
          {recentFiles.map((f) => (
            <div
              key={f.name}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container-low transition-colors"
            >
              <f.icon size={20} className={f.color} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{f.name}</p>
                <p className="text-[11px] text-muted-foreground">
                  {f.size} · {f.date}
                </p>
              </div>
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <Download size={14} />
              </button>
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <MoreVertical size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* --------------------- Snippets de código --------------------- */

const dropzoneCode = `import { FormFileUpload } from '@/components/ui/forms';

<FormFileUpload
  title="Arraste arquivos aqui ou clique para selecionar"
  helperText="PDF, JPG, PNG, XLSX até 10MB"
  buttonLabel="Selecionar arquivos"
  multiple
  onFilesSelected={(files) => console.log(files)}
/>`;

const compactCode = `<FormFileUpload
  variant="compact"
  label="Documento"
  buttonLabel="Selecionar"
  accept=".pdf,.doc,.docx"
  helperText="Nenhum arquivo selecionado"
/>`;

const listCode = `import { FileListItem } from '@/components/ui/forms';

<FileListItem
  name="planilha-custos.xlsx"
  size="540 KB"
  type="file"
  progress={65}
  onRemove={() => removeFile(id)}
/>`;

const avatarCode = `import { FormAvatarUpload } from '@/components/ui/forms';

<FormAvatarUpload
  label="Foto do produto"
  description="JPG ou PNG, máximo 5MB"
  preview={url}
  onPick={(files) => upload(files)}
  onRemove={() => clear()}
/>`;

const managerCode = `// Página completa: estatísticas + pastas + recentes.
// Use bg-surface-container nos cartões e bg-surface-container-low
// nos itens internos para criar a hierarquia de elevação.

<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
  <StatTile label="Armazenamento" value="24.5 GB" sub="de 100 GB" icon={HardDrive} />
  {/* ... */}
</div>

<div className="bg-surface-container rounded-2xl border border-border/40 p-5">
  <Header actions={[NovaPasta, EnviarArquivo]} />
  <FoldersGrid items={folders} />
  <RecentFilesList items={recentFiles} />
</div>`;

/* ----------------------------- Página ----------------------------- */

export default function FileManagerPage() {
  return (
    <ComponentDoc
      summary="Conjunto de blocos para gerenciamento de arquivos: dropzone de upload, upload compacto, lista com progresso, upload de imagem e tela completa de gestão (pastas, estatísticas e arquivos recentes). Todos os elementos respeitam tokens semânticos e suportam tema claro/escuro."
      importPath="@/components/ui/forms ; @/pages/design-system/components/pages/FileManagerPage"
    >
      <DocSection
        title="Upload de arquivos"
        description="Padrões para captura de arquivos — dropzone amplo para áreas dedicadas, compacto para formulários e avatar para imagens."
      >
        <VariantSection
          title="Dropzone (Drag & Drop)"
          description="Área ampla com indicação visual e botão fallback. Use em telas de upload dedicadas."
          preview={<DropzonePreview />}
          code={dropzoneCode}
        />

        <VariantSection
          title="Upload compacto"
          description="Versão inline para uso dentro de formulários, ao lado de outros campos."
          preview={<CompactUploadPreview />}
          code={compactCode}
        />

        <VariantSection
          title="Upload de avatar / imagem"
          description="Para fotos de perfil, capa de produto e thumbs com preview imediato."
          preview={<AvatarUploadPreview />}
          code={avatarCode}
        />
      </DocSection>

      <DocSection
        title="Lista de arquivos"
        description="Item visual com ícone tipado por extensão, barra de progresso e ação de remover."
      >
        <VariantSection
          title="Lista com progresso"
          description="Combine vários FileListItem para representar uploads em andamento e concluídos."
          preview={<FileProgressList />}
          code={listCode}
        />
      </DocSection>

      <DocSection
        title="Gerenciador completo"
        description="Tela canônica de file manager com estatísticas, pastas e arquivos recentes."
      >
        <VariantSection
          title="File Manager — visão geral"
          description="Hierarquia de superfícies: cartões em surface-container, itens internos em surface-container-low."
          preview={<FullManagerPreview />}
          code={managerCode}
        />

        <UsageNote type="tip">
          Use os tokens <code>bg-surface-container</code> e <code>bg-surface-container-low</code>{' '}
          para criar elevação sem sombras pesadas. As cores de ícones por extensão (PDF →{' '}
          <code>text-destructive</code>, XLSX → <code>text-status-success</code>, MP4 →{' '}
          <code>text-secondary</code>) ajudam o usuário a escanear a lista.
        </UsageNote>

        <UsageNote type="info">
          Todos os blocos respeitam o tema escuro automaticamente — não há cores fixas. Os botões
          primários usam <code>bg-primary / text-primary-foreground</code> e os secundários
          herdam contornos via <code>border-border</code>.
        </UsageNote>
      </DocSection>
    </ComponentDoc>
  );
}
