import {
  Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator,
  MenubarShortcut, MenubarTrigger,
} from '@/components/ui/menubar';
import { Demo } from './Demo';

export default function MenubarPage() {
  return (
    <Demo title="Barra de menus" description="Padrão estilo desktop, ideal para editores.">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Arquivo</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Novo <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
            <MenubarItem>Abrir <MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Salvar <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Editar</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Desfazer</MenubarItem>
            <MenubarItem>Refazer</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Demo>
  );
}
