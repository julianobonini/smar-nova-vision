import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Demo } from './Demo';

export default function ResizablePage() {
  return (
    <Demo title="Resizable panels" description="Painéis arrastáveis estilo IDE.">
      <ResizablePanelGroup direction="horizontal" className="rounded-xl border border-border/30 max-w-2xl h-60">
        <ResizablePanel defaultSize={30} className="grid place-items-center bg-surface-container text-sm">Sidebar</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70} className="grid place-items-center text-sm">Conteúdo principal</ResizablePanel>
      </ResizablePanelGroup>
    </Demo>
  );
}
