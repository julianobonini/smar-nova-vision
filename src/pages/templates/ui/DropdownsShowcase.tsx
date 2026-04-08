import { UIShowcaseLayout, ShowcaseSection } from './UIShowcaseLayout';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuSub, DropdownMenuSubTrigger,
  DropdownMenuSubContent, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Edit, Trash2, Copy, Download, Share2, MoreHorizontal, User, Settings, LogOut, Eye, FileText, Printer } from 'lucide-react';
import { useState } from 'react';

export default function DropdownsShowcase() {
  const [status, setStatus] = useState('active');
  const [showId, setShowId] = useState(true);

  return (
    <UIShowcaseLayout title="Dropdowns" description="Menus suspensos para ações e seleção contextual.">
      <ShowcaseSection title="Dropdown Básico">
        <div className="flex flex-wrap gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Ações <ChevronDown size={14} /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Ações do Registro</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Eye size={14} /> Visualizar</DropdownMenuItem>
              <DropdownMenuItem><Edit size={14} /> Editar</DropdownMenuItem>
              <DropdownMenuItem><Copy size={14} /> Duplicar</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive"><Trash2 size={14} /> Excluir</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon"><MoreHorizontal size={16} /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem><Download size={14} /> Exportar CSV</DropdownMenuItem>
              <DropdownMenuItem><FileText size={14} /> Exportar PDF</DropdownMenuItem>
              <DropdownMenuItem><Printer size={14} /> Imprimir</DropdownMenuItem>
              <DropdownMenuItem><Share2 size={14} /> Compartilhar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Com Submenu">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Menu com Sub-itens <ChevronDown size={14} /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem><Eye size={14} /> Visualizar</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger><Download size={14} /> Exportar</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Excel (.xlsx)</DropdownMenuItem>
                <DropdownMenuItem>CSV (.csv)</DropdownMenuItem>
                <DropdownMenuItem>PDF (.pdf)</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Settings size={14} /> Configurações</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ShowcaseSection>

      <ShowcaseSection title="Com Checkbox e Radio">
        <div className="flex flex-wrap gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Colunas visíveis <ChevronDown size={14} /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Exibir colunas</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked={showId} onCheckedChange={setShowId}>ID</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Nome</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Status</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Data de Criação</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Status: {status} <ChevronDown size={14} /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Filtrar por status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
                <DropdownMenuRadioItem value="active">Ativo</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="inactive">Inativo</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="pending">Pendente</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Menu de Perfil">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-muted transition-colors">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">JS</div>
              <span className="text-sm font-medium">João Silva</span>
              <ChevronDown size={14} className="text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel className="font-normal">
              <p className="text-sm font-medium">João Silva</p>
              <p className="text-xs text-muted-foreground">joao@empresa.com.br</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><User size={14} /> Meu Perfil</DropdownMenuItem>
            <DropdownMenuItem><Settings size={14} /> Configurações</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive"><LogOut size={14} /> Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ShowcaseSection>
    </UIShowcaseLayout>
  );
}
