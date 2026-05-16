import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMenus } from '@/services/portal';
import { cn } from '@/lib/utils';

function Clock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const dd = now.toLocaleDateString('pt-BR');
  return (
    <div className="text-portal-fg text-base font-medium tabular-nums tracking-wide">
      <span className="text-portal-gold text-xl font-semibold">{hh}:{mm}</span>
      <span className="mx-2 text-portal-fg/40">|</span>
      <span>{dd}</span>
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

  const rootMenus = menus.filter((m) => !m.menuPaiId).sort((a, b) => a.ordem - b.ordem);

  return (
    <div className="min-h-screen bg-[#0A0E1A] text-portal-fg flex flex-col">
      <header className="h-14 shrink-0 bg-[#0A0E1A]/95 backdrop-blur border-b border-white/5 px-6 flex items-center gap-8 sticky top-0 z-50">
        <Link to="/portal" className="flex items-center gap-2 min-h-12 px-2">
          <div className="w-8 h-8 rounded-lg bg-[#0F4C81] grid place-items-center text-white font-bold">
            N
          </div>
          <div className="hidden md:flex flex-col leading-tight">
            <span className="text-base font-semibold text-white">
              Portal da Transparência
            </span>
            <span className="text-xs text-white/60">Nova Smar S/A</span>
          </div>
        </Link>
        <nav className="flex-1 flex items-center gap-1 overflow-x-auto no-scrollbar">
          {rootMenus.map((m) => {
            const href =
              m.tipo === 'url'
                ? m.urlExterna ?? '#'
                : m.tipo === 'noticia'
                ? `/portal/noticias/${m.slug}`
                : m.tipo === 'grupo'
                ? `/portal/grupo/${m.slug}`
                : `/portal/${m.slug}`;
            const active = pathname.startsWith(href);
            const isExternal = m.tipo === 'url';
            const Cmp: any = isExternal ? 'a' : Link;
            return (
              <Cmp
                key={m.id}
                {...(isExternal
                  ? { href, target: '_blank', rel: 'noreferrer' }
                  : { to: href })}
                className={cn(
                  'min-h-12 px-4 inline-flex items-center text-base font-medium rounded-lg transition-colors whitespace-nowrap',
                  active
                    ? 'bg-[#0F4C81] text-white'
                    : 'text-white/80 hover:bg-white/5 hover:text-white active:bg-white/10',
                )}
              >
                {m.label}
              </Cmp>
            );
          })}
        </nav>
        <Clock />
      </header>
      <main className="flex-1 min-h-0">
        <Outlet />
      </main>
    </div>
  );
}
