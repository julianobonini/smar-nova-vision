import {
  ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger,
} from '@/components/ui/context-menu';
import { Demo } from './Demo';

export default function ContextMenuPage() {
  return (
    <Demo title="Clique com botão direito" description="Mostra opções contextuais sobre uma área.">
      <ContextMenu>
        <ContextMenuTrigger className="grid place-items-center h-32 rounded-xl border border-dashed border-border/60 bg-background text-sm text-muted-foreground">
          Clique com o botão direito aqui
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Copiar</ContextMenuItem>
          <ContextMenuItem>Recortar</ContextMenuItem>
          <ContextMenuItem>Colar</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem className="text-destructive">Excluir</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </Demo>
  );
}
