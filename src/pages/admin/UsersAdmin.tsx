import { useState } from 'react';
import { Plus, Search, MoreHorizontal, Shield, Users as UsersIcon, X } from 'lucide-react';

type Role = 'Admin' | 'Gestor' | 'Operador' | 'Consulta';
type Status = 'Ativo' | 'Inativo' | 'Pendente';

interface UserRow {
  id: string;
  name: string;
  email: string;
  empresa: string;
  perfil: Role;
  status: Status;
  ultimoAcesso: string;
}

const initialUsers: UserRow[] = [
  { id: '1', name: 'Juliano Bonini', email: 'juliano@smar.com.br', empresa: 'Smar Matriz', perfil: 'Admin', status: 'Ativo', ultimoAcesso: 'Hoje 09:42' },
  { id: '2', name: 'Mariana Costa', email: 'mariana.c@smar.com.br', empresa: 'Smar Matriz', perfil: 'Gestor', status: 'Ativo', ultimoAcesso: 'Hoje 08:15' },
  { id: '3', name: 'Carlos Mendes', email: 'carlos@smar.com.br', empresa: 'Smar SP', perfil: 'Operador', status: 'Ativo', ultimoAcesso: 'Ontem 17:30' },
  { id: '4', name: 'Ana Souza', email: 'ana.s@smar.com.br', empresa: 'Smar MG', perfil: 'Operador', status: 'Pendente', ultimoAcesso: '—' },
  { id: '5', name: 'Roberto Lima', email: 'roberto@smar.com.br', empresa: 'Smar Matriz', perfil: 'Consulta', status: 'Inativo', ultimoAcesso: '12/03/2025' },
];

const statusStyles: Record<Status, string> = {
  Ativo: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
  Inativo: 'bg-zinc-700/40 text-zinc-400 border border-zinc-600/40',
  Pendente: 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
};

const perfilStyles: Record<Role, string> = {
  Admin: 'bg-rose-500/15 text-rose-300',
  Gestor: 'bg-violet-500/15 text-violet-300',
  Operador: 'bg-sky-500/15 text-sky-300',
  Consulta: 'bg-zinc-700/40 text-zinc-300',
};

export default function UsersAdmin() {
  const [users, setUsers] = useState<UserRow[]>(initialUsers);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', empresa: 'Smar Matriz', perfil: 'Operador' as Role });

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleCreate = () => {
    if (!form.name || !form.email) return;
    setUsers([
      { id: String(Date.now()), name: form.name, email: form.email, empresa: form.empresa, perfil: form.perfil, status: 'Pendente', ultimoAcesso: '—' },
      ...users,
    ]);
    setForm({ name: '', email: '', empresa: 'Smar Matriz', perfil: 'Operador' });
    setOpen(false);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-display font-bold text-zinc-100 flex items-center gap-2">
            <UsersIcon size={22} className="text-amber-400" /> Gestão de Usuários
          </h1>
          <p className="text-sm text-zinc-400">Cadastre, edite e controle o acesso dos usuários ao ERP.</p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold text-sm px-4 py-2 transition-colors"
        >
          <Plus size={16} /> Novo Usuário
        </button>
      </div>

      {/* Search */}
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-3">
        <div className="relative max-w-md">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nome ou e-mail..."
            className="w-full rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-100 placeholder:text-zinc-500 text-sm pl-9 pr-3 py-2 focus:outline-none focus:border-amber-500/60"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-zinc-800/60">
            <tr className="text-left text-[11px] uppercase tracking-wider text-zinc-400">
              <th className="px-4 py-3 font-semibold">Usuário</th>
              <th className="px-4 py-3 font-semibold">Empresa</th>
              <th className="px-4 py-3 font-semibold">Perfil</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Último acesso</th>
              <th className="px-4 py-3 font-semibold w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800">
            {filtered.map((u) => (
              <tr key={u.id} className="hover:bg-zinc-800/40">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 text-xs font-bold">
                      {u.name.split(' ').map(p => p[0]).slice(0, 2).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-zinc-100">{u.name}</p>
                      <p className="text-xs text-zinc-500">{u.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-zinc-300">{u.empresa}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold ${perfilStyles[u.perfil]}`}>
                    <Shield size={10} /> {u.perfil}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded-md px-2 py-0.5 text-[11px] font-semibold ${statusStyles[u.status]}`}>
                    {u.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-zinc-400 text-xs">{u.ultimoAcesso}</td>
                <td className="px-4 py-3">
                  <button className="p-1 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={6} className="text-center py-8 text-zinc-500 text-sm">Nenhum usuário encontrado.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Drawer / Modal — simple inline */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={() => setOpen(false)}>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-md p-6 m-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-zinc-100">Cadastrar Usuário</h3>
              <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-zinc-200"><X size={18} /></button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Nome</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full mt-1 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-100 text-sm px-3 py-2 focus:outline-none focus:border-amber-500/60" />
              </div>
              <div>
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">E-mail</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full mt-1 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-100 text-sm px-3 py-2 focus:outline-none focus:border-amber-500/60" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Empresa</label>
                  <select value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                    className="w-full mt-1 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-100 text-sm px-3 py-2 focus:outline-none focus:border-amber-500/60">
                    <option>Smar Matriz</option><option>Smar SP</option><option>Smar MG</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Perfil</label>
                  <select value={form.perfil} onChange={(e) => setForm({ ...form, perfil: e.target.value as Role })}
                    className="w-full mt-1 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-100 text-sm px-3 py-2 focus:outline-none focus:border-amber-500/60">
                    <option>Admin</option><option>Gestor</option><option>Operador</option><option>Consulta</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-xl text-sm text-zinc-300 hover:bg-zinc-800">Cancelar</button>
              <button onClick={handleCreate} className="px-4 py-2 rounded-xl text-sm font-semibold bg-amber-500 hover:bg-amber-400 text-zinc-900">Cadastrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
