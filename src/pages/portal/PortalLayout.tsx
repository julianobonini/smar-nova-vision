import { useEffect, useMemo, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ChevronDown, Home } from 'lucide-react';
import { getMenus } from '@/services/portal';
import type { Menu } from '@/types/portal';
import { cn } from '@/lib/utils';

function Clock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  const data = now.toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  return (
    <div className="flex items-center gap-3 text-white">
      <div className="text-right leading-tight">
        <div className="text-[11px] uppercase tracking-wider text-white/70 capitalize">
          {data}
        </div>
        <div className="text-portal-gold text-lg font-semibold tabular-nums">
          {hh}:{mm}
          <span className="text-sm text-white/60 ml-1">:{ss}</span>
        </div>
      </div>
    </div>
  );
}

function hrefFor(m: Menu): string {
  if (m.tipo === 'url') return m.urlExterna ?? '#';
  if (m.tipo === 'noticia') return `/portal/noticias/${m.slug}`;
  if (m.tipo === 'grupo') return `/portal/grupo/${m.slug}`;
  return `/portal/${m.slug}`;
}

function MenuItem({
  item,
  children,
  active,
}: {
  item: Menu;
  children: Menu[];
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = children.length > 0;
  const href = hrefFor(item);
  const isExternal = item.tipo === 'url';

  const baseCls = cn(
    'min-h-12 px-4 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide transition-colors whitespace-nowrap',
    active
      ? 'bg-[#0F4C81] text-white'
      : 'text-white/85 hover:bg-[#0F4C81] hover:text-white',
  );

  const content = (
    <>
      {item.label}
      {hasChildren && <ChevronDown className="w-3.5 h-3.5 opacity-80" />}
    </>
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {isExternal ? (
        <a href={href} target="_blank" rel="noreferrer" className={baseCls}>
          {content}
        </a>
      ) : (
        <Link to={href} className={baseCls}>
          {content}
        </Link>
      )}
      {hasChildren && open && (
        <div className="absolute left-0 top-full min-w-[260px] bg-[#0A0E1A] border-t-2 border-portal-gold shadow-2xl z-50 py-2">
          {children
            .sort((a, b) => a.ordem - b.ordem)
            .map((c) => {
              const ch = hrefFor(c);
              const isExt = c.tipo === 'url';
              const cls =
                'block px-5 py-3 min-h-12 text-sm text-white/90 hover:bg-[#0F4C81] hover:text-white transition-colors';
              return isExt ? (
                <a key={c.id} href={ch} target="_blank" rel="noreferrer" className={cls}>
                  {c.label}
                </a>
              ) : (
                <Link key={c.id} to={ch} className={cls}>
                  {c.label}
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default function PortalLayout() {
  const { data: menus = [] } = useQuery({
    queryKey: ['portal', 'menus'],
    queryFn: getMenus,
    refetchInterval: 5 * 60 * 1000,
  });
  const { pathname } = useLocation();

  const { roots, childrenByParent } = useMemo(() => {
    const active = menus.filter((m) => m.ativo);
    const roots = active
      .filter((m) => !m.menuPaiId)
      .sort((a, b) => a.ordem - b.ordem);
    const childrenByParent: Record<string, Menu[]> = {};
    active.forEach((m) => {
      if (m.menuPaiId) {
        (childrenByParent[m.menuPaiId] ||= []).push(m);
      }
    });
    return { roots, childrenByParent };
  }, [menus]);

  const isHome = pathname === '/portal' || pathname === '/portal/';

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-portal-fg flex flex-col">
      {/* Topbar */}
      <div className="h-12 shrink-0 bg-[#070B14] border-b border-white/5 px-6 flex items-center justify-between">
        <div className="text-white/70 text-xs uppercase tracking-[0.2em]">
          Portal da Transparência · Nova Smar S/A
        </div>
        <Clock />
      </div>

      {/* Main bar */}
      <header className="h-16 shrink-0 bg-[#0A0E1A] border-b border-white/10 px-4 flex items-stretch gap-1 sticky top-0 z-50">
        {/* Home icon */}
        <Link
          to="/portal"
          className={cn(
            'min-h-12 w-14 grid place-items-center transition-colors',
            isHome ? 'bg-[#0F4C81] text-white' : 'bg-[#0F4C81]/80 text-white hover:bg-[#0F4C81]',
          )}
          aria-label="Início"
        >
          <Home className="w-6 h-6" />
        </Link>

        <nav className="flex-1 flex items-stretch overflow-x-auto no-scrollbar">
          {roots.map((m) => {
            const children = childrenByParent[m.id] ?? [];
            const href = hrefFor(m);
            const active = !isHome && pathname.startsWith(href);
            return (
              <MenuItem key={m.id} item={m} children={children} active={active} />
            );
          })}
        </nav>

        {/* NOVASMAR logo */}
        <div className="flex items-center pl-4 pr-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/95">
            <div className="w-8 h-8 rounded bg-[#0F4C81] grid place-items-center text-white font-extrabold text-sm">
              N
            </div>
            <div className="leading-tight">
              <div className="text-[#0F4C81] font-extrabold text-base tracking-tight">
                NOVASMAR
              </div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-[#0F4C81]/70">
                S/A
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 min-h-0">
        <Outlet />
      </main>
    </div>
  );
}
