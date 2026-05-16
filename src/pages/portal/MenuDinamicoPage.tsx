import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getMenus } from '@/services/portal';

export default function MenuDinamicoPage() {
  const { menuSlug = '' } = useParams();
  const { data: menus = [], isLoading } = useQuery({
    queryKey: ['portal', 'menus'],
    queryFn: getMenus,
  });

  const menu = menus.find((m) => m.slug === menuSlug);

  useEffect(() => {
    if (menu?.tipo === 'url' && menu.urlExterna) {
      window.location.href = menu.urlExterna;
    }
  }, [menu]);

  if (isLoading) return <div className="p-10 text-white/60">Carregando…</div>;
  if (!menu) return <Navigate to="/portal" replace />;

  if (menu.tipo === 'grupo') return <Navigate to={`/portal/grupo/${menu.slug}`} replace />;
  if (menu.tipo === 'noticia') return <Navigate to={`/portal/noticias/${menu.slug}`} replace />;

  const filhos = menus
    .filter((m) => m.menuPaiId === menu.id)
    .sort((a, b) => a.ordem - b.ordem);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl font-bold">{menu.label}</h1>
      {filhos.length > 0 ? (
        <ul className="mt-6 space-y-3">
          {filhos.map((f) => (
            <li key={f.id}>
              <a
                href={`/portal/${f.slug}`}
                className="block p-5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] border border-white/5"
              >
                <span className="text-lg font-semibold">{f.label}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6 text-white/60">Nenhum conteúdo disponível.</p>
      )}
    </div>
  );
}
