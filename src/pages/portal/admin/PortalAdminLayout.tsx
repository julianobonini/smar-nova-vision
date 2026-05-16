import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { ArrowLeft, FolderTree, Layers, Newspaper, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV = [
  { to: '/portal/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/portal/admin/menus', label: 'Menus', icon: FolderTree },
  { to: '/portal/admin/grupos', label: 'Grupos', icon: Layers },
  { to: '/portal/admin/noticias', label: 'Notícias', icon: Newspaper },
];

export default function PortalAdminLayout() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex bg-zinc-950 text-zinc-100">
      <aside className="w-60 shrink-0 bg-zinc-900 border-r border-zinc-800 flex flex-col">
        <div className="h-14 px-4 flex items-center gap-2 border-b border-zinc-800">
          <div className="w-7 h-7 rounded-md bg-[#0F4C81] grid place-items-center text-white text-sm font-bold">
            N
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Portal · Admin</div>
            <div className="text-[11px] text-zinc-500">Nova Smar S/A</div>
          </div>
        </div>
        <nav className="flex-1 p-2 space-y-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.end}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-[#0F4C81] text-white'
                    : 'text-zinc-300 hover:bg-zinc-800 active:bg-zinc-700',
                )
              }
            >
              <n.icon className="w-4 h-4" />
              {n.label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={() => navigate('/portal')}
          className="m-2 px-3 py-2.5 rounded-lg text-sm font-medium text-amber-300 border border-amber-500/30 hover:bg-amber-500/10 active:bg-amber-500/20 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Ver portal público
        </button>
      </aside>
      <main className="flex-1 min-w-0 p-8 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
