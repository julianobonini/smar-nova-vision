import {
  NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList, NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Demo } from './Demo';

export default function NavigationMenuPage() {
  return (
    <Demo title="Navigation Menu" description="Menu hover-based estilo header.">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-2 p-3">
                <li><NavigationMenuLink className="block rounded-md p-2 text-sm hover:bg-surface-container">ERP Industrial</NavigationMenuLink></li>
                <li><NavigationMenuLink className="block rounded-md p-2 text-sm hover:bg-surface-container">CRM</NavigationMenuLink></li>
                <li><NavigationMenuLink className="block rounded-md p-2 text-sm hover:bg-surface-container">Faturamento</NavigationMenuLink></li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="px-3 py-2 text-sm font-medium hover:bg-surface-container rounded-md">Preços</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </Demo>
  );
}
