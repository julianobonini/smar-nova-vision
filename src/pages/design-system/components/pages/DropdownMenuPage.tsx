import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown, User, LogOut, Settings } from 'lucide-react';
import { Demo } from './Demo';

export default function DropdownMenuPage() {
  return (
    <>
      <Demo title="Dropdown padrão">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Conta <ChevronDown /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><User /> Perfil</DropdownMenuItem>
            <DropdownMenuItem><Settings /> Configurações</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive"><LogOut /> Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Demo>

      <Demo title="Com checkboxes">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Colunas <ChevronDown /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked>Nome</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>E-mail</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Status</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Demo>
    </>
  );
}
