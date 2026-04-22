import { useState } from 'react';
import { KeyRound, Check, Plus, Shield } from 'lucide-react';

const modules = [
  'Dashboard', 'Clientes', 'Fornecedores', 'Propostas', 'Pedidos',
  'Faturamento', 'Estoque', 'Produtos', 'Funcionários', 'Relatórios', 'Configurações',
];

const profiles = [
  { name: 'Admin', desc: 'Acesso total ao sistema', color: 'rose', perms: modules.map(() => ['ler', 'criar', 'editar', 'excluir']) },
  { name: 'Gestor', desc: 'Gerencia operações e equipes', color: 'violet', perms: modules.map((_, i) => i < 8 ? ['ler', 'criar', 'editar'] : ['ler']) },
  { name: 'Operador', desc: 'Operação diária do ERP', color: 'sky', perms: modules.map((_, i) => i < 6 ? ['ler', 'criar'] : ['ler']) },
  { name: 'Consulta', desc: 'Apenas leitura de dados', color: 'zinc', perms: modules.map(() => ['ler']) },
];

const colorMap: Record<string, string> = {
  rose: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  violet: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
  sky: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
  zinc: 'bg-zinc-700/40 text-zinc-300 border-zinc-600/40',
};

export default function AccessAdmin() {
  const [selected, setSelected] = useState(0);
  const profile = profiles[selected];

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-display font-bold text-zinc-100 flex items-center gap-2">
            <KeyRound size={22} className="text-amber-400" /> Perfis de Acesso
          </h1>
          <p className="text-sm text-zinc-400">Controle granular de permissões por módulo do sistema.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold text-sm px-4 py-2 transition-colors">
          <Plus size={16} /> Novo Perfil
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Profile list */}
        <div className="space-y-2">
          {profiles.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setSelected(i)}
              className={`w-full text-left p-4 rounded-2xl border transition-colors ${
                selected === i
                  ? 'bg-zinc-800 border-amber-500/40'
                  : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className={`inline-flex items-center justify-center w-7 h-7 rounded-lg border ${colorMap[p.color]}`}>
                  <Shield size={12} />
                </span>
                <span className="font-semibold text-zinc-100 text-sm">{p.name}</span>
              </div>
              <p className="text-xs text-zinc-500 ml-9">{p.desc}</p>
            </button>
          ))}
        </div>

        {/* Permission matrix */}
        <div className="lg:col-span-3 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
          <div className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-zinc-100">{profile.name}</h3>
              <p className="text-xs text-zinc-500">{profile.desc}</p>
            </div>
            <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${colorMap[profile.color]}`}>
              {profile.perms.flat().length} permissões
            </span>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-zinc-800/40">
              <tr className="text-left text-[11px] uppercase tracking-wider text-zinc-400">
                <th className="px-5 py-3 font-semibold">Módulo</th>
                <th className="px-3 py-3 font-semibold text-center">Ler</th>
                <th className="px-3 py-3 font-semibold text-center">Criar</th>
                <th className="px-3 py-3 font-semibold text-center">Editar</th>
                <th className="px-3 py-3 font-semibold text-center">Excluir</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {modules.map((m, i) => (
                <tr key={m} className="hover:bg-zinc-800/30">
                  <td className="px-5 py-2.5 text-zinc-200">{m}</td>
                  {['ler', 'criar', 'editar', 'excluir'].map((p) => (
                    <td key={p} className="px-3 py-2.5 text-center">
                      {profile.perms[i].includes(p) ? (
                        <Check size={14} className="inline text-emerald-400" />
                      ) : (
                        <span className="text-zinc-700">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
