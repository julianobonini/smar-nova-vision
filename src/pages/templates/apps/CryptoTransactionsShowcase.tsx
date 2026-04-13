import { AppsLayout, ShowcaseSection } from './AppsLayout';
import { ArrowUpRight, ArrowDownLeft, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const transactions = [
  { type: 'buy', coin: 'BTC', amount: '0.15 BTC', value: 'R$ 45.000', date: '13/04/2026 09:30', status: 'Concluído' },
  { type: 'sell', coin: 'ETH', amount: '5.0 ETH', value: 'R$ 25.000', date: '12/04/2026 14:15', status: 'Concluído' },
  { type: 'buy', coin: 'SOL', amount: '120 SOL', value: 'R$ 18.000', date: '12/04/2026 10:00', status: 'Concluído' },
  { type: 'sell', coin: 'BTC', amount: '0.08 BTC', value: 'R$ 24.000', date: '11/04/2026 16:45', status: 'Pendente' },
  { type: 'buy', coin: 'ETH', amount: '3.0 ETH', value: 'R$ 15.000', date: '10/04/2026 11:20', status: 'Concluído' },
  { type: 'buy', coin: 'MATIC', amount: '5000 MATIC', value: 'R$ 12.500', date: '09/04/2026 08:00', status: 'Concluído' },
];

export default function CryptoTransactionsShowcase() {
  return (
    <AppsLayout title="Transactions" description="Histórico de transações de criptomoedas." category="Crypto">
      <ShowcaseSection title="Transações">
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="relative">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="Buscar transação..." className="pl-8 pr-3 py-2 rounded-lg bg-muted/20 border border-border text-xs text-foreground w-60 focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <Button variant="outline" size="sm"><Filter size={12} className="mr-1" /> Filtros</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  {['Tipo', 'Moeda', 'Quantidade', 'Valor', 'Data', 'Status'].map(h => (
                    <th key={h} className="text-left py-3 px-3 text-xs font-semibold text-muted-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, i) => (
                  <tr key={i} className="border-b border-border/40 hover:bg-muted/10 transition-colors">
                    <td className="py-3 px-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${t.type === 'buy' ? 'bg-green-500/10' : 'bg-destructive/10'}`}>
                        {t.type === 'buy' ? <ArrowDownLeft size={14} className="text-green-500" /> : <ArrowUpRight size={14} className="text-destructive" />}
                      </div>
                    </td>
                    <td className="py-3 px-3 font-medium text-foreground">{t.coin}</td>
                    <td className="py-3 px-3 text-xs text-muted-foreground">{t.amount}</td>
                    <td className="py-3 px-3 text-xs font-medium text-foreground">{t.value}</td>
                    <td className="py-3 px-3 text-xs text-muted-foreground">{t.date}</td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${t.status === 'Concluído' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-500'}`}>{t.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ShowcaseSection>
    </AppsLayout>
  );
}
