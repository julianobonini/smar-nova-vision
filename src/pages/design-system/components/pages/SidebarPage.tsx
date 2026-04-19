import { Demo } from './Demo';

export default function SidebarPage() {
  return (
    <Demo title="Sidebar (App)" description="Sidebar principal usada no /app — contém grupos colapsáveis, ícones, badges e suporta modo collapsed.">
      <p className="text-sm text-muted-foreground">
        A Sidebar é renderizada dentro de <code className="bg-surface-container px-1.5 py-0.5 rounded text-xs">SidebarProvider</code>.
        Para vê-la em uso, acesse a área autenticada do app.
      </p>
      <div className="mt-4 rounded-xl border border-dashed border-border/50 bg-background p-6 text-center text-sm text-muted-foreground">
        Demo interativo disponível em <a href="/app" className="text-primary underline">/app</a>
      </div>
    </Demo>
  );
}
