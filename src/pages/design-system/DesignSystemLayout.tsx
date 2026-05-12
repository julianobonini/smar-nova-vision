import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { Sparkles, Palette, Component, LayoutDashboard, Layers3, ArrowLeft, Blocks, Sun, Moon, Monitor } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

const sections = [
  { to: '/design-system', label: 'Princípios', icon: Sparkles, end: true },
  { to: '/design-system/foundations', label: 'Fundamentos', icon: Palette },
  { to: '/design-system/components', label: 'Componentes', icon: Component },
  { to: '/design-system/patterns', label: 'Padrões de Layout', icon: Layers3 },
  { to: '/design-system/dashboards', label: 'Dashboards', icon: LayoutDashboard },
  { to: '/design-system/templates', label: 'Elementos dos Templates', icon: Blocks },
];

export default function DesignSystemLayout() {
  const { pathname } = useLocation();
  const current = sections.find((s) => (s.end ? pathname === s.to : pathname.startsWith(s.to)));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border/40">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 h-14">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
              <ArrowLeft size={16} />
              Voltar
            </Link>
            <span className="h-5 w-px bg-border" />
            <p className="font-display font-extrabold text-base tracking-tight">
              smar<span className="text-accent">NET</span>
              <span className="ml-2 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                Design System
              </span>
            </p>
          </div>
          <p className="text-xs text-muted-foreground hidden md:block">
            v1.0 · Industrial ERP language
          </p>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto flex">
        {/* Sidebar */}
        <aside className="w-60 shrink-0 border-r border-border/40 min-h-[calc(100vh-3.5rem)] py-8 px-3 hidden md:block">
          <nav className="space-y-1 sticky top-24">
            {sections.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all',
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-ambient'
                      : 'text-muted-foreground hover:bg-surface-container hover:text-foreground'
                  )
                }
              >
                <Icon size={16} />
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0 px-6 md:px-10 py-10">
          {current && (
            <div className="mb-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-2">
                Design System
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight">
                {current.label}
              </h1>
            </div>
          )}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
