import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell, User, Settings, Globe, Moon, Sun, Monitor, LogOut, Lock, ChevronDown,
  LayoutDashboard, FolderOpen, ArrowLeftRight, Users, Package, UserCheck, Building2, Truck,
  ShoppingCart, Receipt, Warehouse
} from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { t, Locale, localeNames } from '@/lib/i18n';

export function TopNav() {
  const { locale, setLocale, theme, setTheme, user, setUser } = useApp();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggle = (menu: string) => setOpenMenu(openMenu === menu ? null : menu);
  const close = () => setOpenMenu(null);

  const themeIcons = { light: Sun, dark: Moon, system: Monitor };
  const ThemeIcon = themeIcons[theme];

  const cadastroItems = [
    { key: 'clientes', icon: Users, path: '/app/clientes' },
    { key: 'produtos', icon: Package, path: '/app/produtos' },
    { key: 'usuarios', icon: UserCheck, path: '/app/usuarios' },
    { key: 'funcionarios', icon: Building2, path: '/app/funcionarios' },
    { key: 'fornecedores', icon: Truck, path: '/app/fornecedores' },
  ];

  const movimentoItems = [
    { key: 'pedidos', icon: ShoppingCart, path: '/app/pedidos' },
    { key: 'faturamento', icon: Receipt, path: '/app/faturamento' },
    { key: 'estoque', icon: Warehouse, path: '/app/estoque' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl" style={{ borderBottom: '1px solid hsl(var(--border) / 0.5)' }}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Left: Brand + Nav */}
        <div className="flex items-center gap-8">
          <span className="font-display font-bold text-primary text-lg cursor-pointer" onClick={() => navigate('/app')}>SmarNet</span>

          <div className="hidden md:flex items-center gap-1">
            <button onClick={() => navigate('/app')} className="px-4 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-surface-container-low transition-colors flex items-center gap-2">
              <LayoutDashboard size={16} /> {t('nav.dashboard', locale)}
            </button>

            {/* Cadastros dropdown */}
            <div className="relative">
              <button onClick={() => toggle('cadastros')} className="px-4 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-surface-container-low transition-colors flex items-center gap-1">
                <FolderOpen size={16} /> {t('nav.cadastros', locale)} <ChevronDown size={14} />
              </button>
              {openMenu === 'cadastros' && (
                <div className="absolute left-0 top-full mt-1 bg-background rounded-xl shadow-ambient-lg py-2 min-w-[200px]">
                  {cadastroItems.map(({ key, icon: Icon, path }) => (
                    <button key={key} onClick={() => { navigate(path); close(); }}
                      className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-surface-container-low transition-colors text-foreground">
                      <Icon size={16} className="text-muted-foreground" /> {t(`nav.${key}`, locale)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Movimentos dropdown */}
            <div className="relative">
              <button onClick={() => toggle('movimentos')} className="px-4 py-2 rounded-xl text-sm font-medium text-foreground hover:bg-surface-container-low transition-colors flex items-center gap-1">
                <ArrowLeftRight size={16} /> {t('nav.movimentos', locale)} <ChevronDown size={14} />
              </button>
              {openMenu === 'movimentos' && (
                <div className="absolute left-0 top-full mt-1 bg-background rounded-xl shadow-ambient-lg py-2 min-w-[200px]">
                  {movimentoItems.map(({ key, icon: Icon, path }) => (
                    <button key={key} onClick={() => { navigate(path); close(); }}
                      className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-surface-container-low transition-colors text-foreground">
                      <Icon size={16} className="text-muted-foreground" /> {t(`nav.${key}`, locale)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1">
          {/* Notifications */}
          <div className="relative">
            <button onClick={() => toggle('notif')} className="p-2.5 rounded-xl hover:bg-surface-container-low transition-colors text-muted-foreground hover:text-foreground relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive" />
            </button>
            {openMenu === 'notif' && (
              <div className="absolute right-0 top-full mt-1 bg-background rounded-xl shadow-ambient-lg py-3 px-4 min-w-[280px]">
                <h4 className="font-display font-semibold text-sm text-foreground mb-3">{t('nav.notifications', locale)}</h4>
                <div className="space-y-3">
                  {['Novo pedido #88421 recebido', 'Estoque baixo: Sensor XK-200', 'Manutenção programada amanhã'].map((msg, i) => (
                    <div key={i} className="text-sm text-muted-foreground py-2 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      {msg}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Language */}
          <div className="relative">
            <button onClick={() => toggle('lang')} className="p-2.5 rounded-xl hover:bg-surface-container-low transition-colors text-muted-foreground hover:text-foreground">
              <Globe size={18} />
            </button>
            {openMenu === 'lang' && (
              <div className="absolute right-0 top-full mt-1 bg-background rounded-xl shadow-ambient-lg py-2 min-w-[140px]">
                {(Object.keys(localeNames) as Locale[]).map((l) => (
                  <button key={l} onClick={() => { setLocale(l); close(); }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-surface-container-low transition-colors ${locale === l ? 'text-secondary font-semibold' : 'text-foreground'}`}>
                    {localeNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme */}
          <div className="relative">
            <button onClick={() => toggle('theme')} className="p-2.5 rounded-xl hover:bg-surface-container-low transition-colors text-muted-foreground hover:text-foreground">
              <ThemeIcon size={18} />
            </button>
            {openMenu === 'theme' && (
              <div className="absolute right-0 top-full mt-1 bg-background rounded-xl shadow-ambient-lg py-2 min-w-[140px]">
                {(['light', 'dark', 'system'] as const).map((th) => {
                  const Icon = themeIcons[th];
                  return (
                    <button key={th} onClick={() => { setTheme(th); close(); }}
                      className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-surface-container-low transition-colors ${theme === th ? 'text-secondary font-semibold' : 'text-foreground'}`}>
                      <Icon size={14} /> {th.charAt(0).toUpperCase() + th.slice(1)}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Settings (admin only) */}
          {user?.role === 'admin' && (
            <button className="p-2.5 rounded-xl hover:bg-surface-container-low transition-colors text-muted-foreground hover:text-foreground">
              <Settings size={18} />
            </button>
          )}

          {/* Profile */}
          <div className="relative ml-2">
            <button onClick={() => toggle('profile')} className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-surface-container-low transition-colors">
              <div className="w-8 h-8 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-sm font-medium text-foreground leading-tight">{user?.name}</p>
                <p className="text-xs text-muted-foreground capitalize">{user?.role === 'admin' ? 'Admin Master' : 'Usuário'}</p>
              </div>
              <ChevronDown size={14} className="text-muted-foreground" />
            </button>
            {openMenu === 'profile' && (
              <div className="absolute right-0 top-full mt-1 bg-background rounded-xl shadow-ambient-lg py-2 min-w-[180px]">
                <button className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-surface-container-low transition-colors text-foreground">
                  <User size={16} className="text-muted-foreground" /> {t('nav.profile', locale)}
                </button>
                <button className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-surface-container-low transition-colors text-foreground">
                  <Lock size={16} className="text-muted-foreground" /> {t('nav.password', locale)}
                </button>
                <div className="my-1 mx-4 h-px bg-surface-container" />
                <button onClick={() => { setUser(null); navigate('/'); close(); }}
                  className="w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-surface-container-low transition-colors text-destructive">
                  <LogOut size={16} /> {t('nav.logout', locale)}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
