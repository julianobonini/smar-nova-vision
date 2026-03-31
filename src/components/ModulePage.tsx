import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Plus, ChevronLeft, ChevronRight, Edit, Trash2 } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { t } from '@/lib/i18n';
import { AppLayout } from '@/components/AppLayout';

interface Column {
  key: string;
  label: string;
  render?: (val: any, row: any) => React.ReactNode;
}

interface ModulePageProps {
  title: string;
  columns: Column[];
  data: any[];
}

export default function ModulePage({ title, columns, data }: ModulePageProps) {
  const { locale } = useApp();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 8;

  const filtered = data.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <AppLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground">{title}</h1>
        <button className="px-5 py-2.5 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity w-fit">
          <Plus size={16} /> {t('module.new', locale)}
        </button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            placeholder={t('module.search', locale)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/20 shadow-ambient text-sm"
          />
        </div>
        <button className="px-5 py-3 rounded-xl bg-background text-foreground text-sm font-medium flex items-center gap-2 shadow-ambient hover:bg-surface-container-high transition-colors">
          <Filter size={16} /> {t('module.filters', locale)}
        </button>
      </div>

      {/* Table */}
      <div className="bg-background rounded-2xl shadow-ambient overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col.key} className="text-left px-6 py-4 text-xs font-bold text-muted-foreground uppercase tracking-wider bg-surface-container-low">
                    {col.label}
                  </th>
                ))}
                <th className="px-6 py-4 text-right text-xs font-bold text-muted-foreground uppercase tracking-wider bg-surface-container-low">
                  {t('module.actions', locale)}
                </th>
              </tr>
            </thead>
            <tbody>
              {paged.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className={i % 2 === 0 ? 'bg-background' : 'bg-surface-container-low/50'}
                >
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4 text-sm text-foreground">
                      {col.render ? col.render(row[col.key], row) : row[col.key]}
                    </td>
                  ))}
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-2 rounded-lg hover:bg-surface-container-low transition-colors text-muted-foreground hover:text-foreground">
                        <Edit size={15} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-surface-container-low transition-colors text-muted-foreground hover:text-destructive">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 bg-surface-container-low/50">
            <p className="text-sm text-muted-foreground">
              {filtered.length} registros • Página {page}/{totalPages}
            </p>
            <div className="flex items-center gap-1">
              <button onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}
                className="p-2 rounded-lg hover:bg-surface-container transition-colors text-muted-foreground disabled:opacity-30">
                <ChevronLeft size={18} />
              </button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((p) => (
                <button key={p} onClick={() => setPage(p)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${page === p ? 'gradient-primary text-primary-foreground' : 'hover:bg-surface-container text-muted-foreground'}`}>
                  {p}
                </button>
              ))}
              <button onClick={() => setPage(Math.min(totalPages, page + 1))} disabled={page === totalPages}
                className="p-2 rounded-lg hover:bg-surface-container transition-colors text-muted-foreground disabled:opacity-30">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
