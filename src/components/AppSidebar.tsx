import { useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Users, Package, UserCheck, Building2, Truck,
  ShoppingCart, Receipt, Warehouse, Settings, HelpCircle,
  ChevronDown, Factory, Briefcase, Scale, Cog, UserCog
} from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/i18n';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const menuGroups = [
  {
    key: 'comercial',
    icon: Briefcase,
    sections: [
      {
        label: 'Cadastros',
        items: [
          { key: 'clientes', icon: Users, path: '/app/clientes' },
          { key: 'fornecedores', icon: Truck, path: '/app/fornecedores' },
        ],
      },
      {
        label: 'Movimentos',
        items: [
          { key: 'pedidos', icon: ShoppingCart, path: '/app/pedidos' },
          { key: 'faturamento', icon: Receipt, path: '/app/faturamento' },
        ],
      },
    ],
  },
  {
    key: 'producao',
    icon: Factory,
    sections: [
      {
        label: null,
        items: [
          { key: 'estoque', icon: Warehouse, path: '/app/estoque' },
          { key: 'produtos', icon: Package, path: '/app/produtos' },
        ],
      },
    ],
  },
  {
    key: 'rh',
    icon: UserCog,
    sections: [
      {
        label: null,
        items: [
          { key: 'funcionarios', icon: Building2, path: '/app/funcionarios' },
          { key: 'usuarios', icon: UserCheck, path: '/app/usuarios' },
        ],
      },
    ],
  },
];

const groupLabels: Record<string, string> = {
  comercial: 'Comercial',
  producao: 'Produção',
  rh: 'RH',
};

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const navigate = useNavigate();
  const { locale, user } = useApp();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <div className="px-4 py-5 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
          S
        </div>
        {!collapsed && (
          <div>
            <p className="font-display font-bold text-foreground text-sm leading-tight">SmarNet</p>
            <p className="text-[10px] font-semibold text-secondary uppercase tracking-widest">Industrial ERP</p>
          </div>
        )}
      </div>

      <SidebarContent className="px-2">
        {/* Dashboard */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => navigate('/app')}
              isActive={currentPath === '/app'}
              className="rounded-xl"
            >
              <LayoutDashboard size={18} />
              {!collapsed && <span>{t('nav.dashboard', locale)}</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* Menu groups */}
        {menuGroups.map((group) => {
          const groupActive = group.sections.some((s) =>
            s.items.some((item) => isActive(item.path))
          );

          return (
            <Collapsible key={group.key} defaultOpen={groupActive} className="mt-1">
              <SidebarGroup>
                <CollapsibleTrigger className="w-full">
                  <SidebarGroupLabel className="flex items-center justify-between cursor-pointer hover:bg-surface-container-low rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <group.icon size={16} />
                      {!collapsed && groupLabels[group.key]}
                    </span>
                    {!collapsed && <ChevronDown size={14} className="transition-transform duration-200 group-data-[state=open]:rotate-180" />}
                  </SidebarGroupLabel>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {group.sections.map((section, si) => (
                    <SidebarGroupContent key={si} className="mt-1">
                      {section.label && !collapsed && (
                        <p className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                          {section.label}
                        </p>
                      )}
                      <SidebarMenu>
                        {section.items.map((item) => (
                          <SidebarMenuItem key={item.key}>
                            <SidebarMenuButton
                              onClick={() => navigate(item.path)}
                              isActive={isActive(item.path)}
                              className="rounded-xl"
                            >
                              <item.icon size={16} />
                              {!collapsed && <span>{t(`nav.${item.key}`, locale)}</span>}
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  ))}
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          );
        })}
      </SidebarContent>

      <SidebarFooter className="px-2 pb-4">
        <SidebarMenu>
          {user?.role === 'admin' && (
            <SidebarMenuItem>
              <SidebarMenuButton className="rounded-xl text-muted-foreground">
                <Settings size={16} />
                {!collapsed && <span>Settings</span>}
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
          <SidebarMenuItem>
            <SidebarMenuButton className="rounded-xl text-muted-foreground">
              <HelpCircle size={16} />
              {!collapsed && <span>Support</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
