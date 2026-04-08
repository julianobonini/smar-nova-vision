import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TiptapUnderline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import { Bold, Italic, Underline, Strikethrough, AlignLeft, AlignCenter, AlignRight, Heading1, Heading2, List, ListOrdered, Quote, Highlighter, Undo, Redo, Code } from 'lucide-react';

function ToolbarBtn({ active, onClick, children, title }: { active?: boolean; onClick: () => void; children: React.ReactNode; title: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`p-1.5 rounded-md transition-colors ${active ? 'bg-secondary/20 text-secondary' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
    >
      {children}
    </button>
  );
}

function RichEditor({ placeholder, minHeight = '200px' }: { placeholder?: string; minHeight?: string }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TiptapUnderline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Highlight,
    ],
    content: placeholder || '',
    editorProps: {
      attributes: {
        class: `prose prose-sm max-w-none focus:outline-none text-foreground p-4`,
        style: `min-height: ${minHeight}`,
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="rounded-xl border border-border bg-background overflow-hidden">
      <div className="flex flex-wrap gap-0.5 p-2 border-b border-border/30 bg-muted/20">
        <ToolbarBtn active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()} title="Negrito"><Bold size={15} /></ToolbarBtn>
        <ToolbarBtn active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()} title="Itálico"><Italic size={15} /></ToolbarBtn>
        <ToolbarBtn active={editor.isActive('underline')} onClick={() => editor.chain().focus().toggleUnderline().run()} title="Sublinhado"><Underline size={15} /></ToolbarBtn>
        <ToolbarBtn active={editor.isActive('strike')} onClick={() => editor.chain().focus().toggleStrike().run()} title="Tachado"><Strikethrough size={15} /></ToolbarBtn>
        <div className="w-px h-5 bg-border/40 mx-1 self-center" />
        <ToolbarBtn active={editor.isActive('heading', { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} title="Título 1"><Heading1 size={15} /></ToolbarBtn>
        <ToolbarBtn active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title="Título 2"><Heading2 size={15} /></ToolbarBtn>
        <div className="w-px h-5 bg-border/40 mx-1 self-center" />
        <ToolbarBtn active={editor.isActive({ textAlign: 'left' })} onClick={() => editor.chain().focus().setTextAlign('left').run()} title="Alinhar Esquerda"><AlignLeft size={15} /></ToolbarBtn>
        <ToolbarBtn active={editor.isActive({ textAlign: 'center' })} onClick={() => editor.chain().focus().setTextAlign('center').run()} title="Centralizar"><AlignCenter size={15} /></ToolbarBtn>
        <ToolbarBtn active={editor.isActive({ textAlign: 'right' })} onClick={() => editor.chain().focus().setTextAlign('right').run()} title="Alinhar Direita"><AlignRight size={15} /></ToolbarBtn>
        <div className="w-px h-5 bg-border/40 mx-1 self-center" />
        <ToolbarBtn active={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()} title="Lista"><List size={15} /></ToolbarBtn>
        <ToolbarBtn active={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Lista Numerada"><ListOrdered size={15} /></ToolbarBtn>
        <ToolbarBtn active={editor.isActive('blockquote')} onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Citação"><Quote size={15} /></ToolbarBtn>
        <ToolbarBtn active={editor.isActive('highlight')} onClick={() => editor.chain().focus().toggleHighlight().run()} title="Destacar"><Highlighter size={15} /></ToolbarBtn>
        <ToolbarBtn active={editor.isActive('codeBlock')} onClick={() => editor.chain().focus().toggleCodeBlock().run()} title="Código"><Code size={15} /></ToolbarBtn>
        <div className="w-px h-5 bg-border/40 mx-1 self-center" />
        <ToolbarBtn onClick={() => editor.chain().focus().undo().run()} title="Desfazer"><Undo size={15} /></ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().redo().run()} title="Refazer"><Redo size={15} /></ToolbarBtn>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

export default function SunEditorShowcase() {
  return (
    <FormsShowcaseLayout title="Rich Text Editor" description="Editor de texto rico com formatação, alinhamento, listas e mais.">
      <ShowcaseSection title="Editor Completo">
        <RichEditor placeholder="<p>Digite o conteúdo aqui. Use a barra de ferramentas para formatar o texto.</p><p>Suporta <strong>negrito</strong>, <em>itálico</em>, <u>sublinhado</u>, listas e muito mais.</p>" />
      </ShowcaseSection>

      <ShowcaseSection title="Editor Compacto">
        <RichEditor placeholder="<p>Editor compacto para campos menores...</p>" minHeight="100px" />
      </ShowcaseSection>

      <ShowcaseSection title="Uso: Observações da NF">
        <RichEditor placeholder="<p>Informações complementares que serão impressas na Nota Fiscal...</p>" minHeight="120px" />
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
