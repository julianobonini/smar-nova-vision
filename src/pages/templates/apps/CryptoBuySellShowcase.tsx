import { useState } from 'react';
import { AppsLayout, ShowcaseSection } from './AppsLayout';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CryptoBuySellShowcase() {
  const [tab, setTab] = useState<'buy' | 'sell'>('buy');

  return (
    <AppsLayout title="Buy & Sell" description="Interface de compra e venda de criptomoedas." category="Crypto">
      <div className="grid lg:grid-cols-3 gap-6">
        <div>
          <ShowcaseSection title="Ordem">
            <div className="space-y-4">
              <div className="flex rounded-lg border border-border overflow-hidden">
                <button onClick={() => setTab('buy')} className={`flex-1 py-2 text-xs font-medium transition-colors ${tab === 'buy' ? 'bg-green-500 text-primary-foreground' : 'bg-surface-container text-muted-foreground'}`}>
                  <TrendingUp size={12} className="inline mr-1" /> Comprar
                </button>
                <button onClick={() => setTab('sell')} className={`flex-1 py-2 text-xs font-medium transition-colors ${tab === 'sell' ? 'bg-destructive text-primary-foreground' : 'bg-surface-container text-muted-foreground'}`}>
                  <TrendingDown size={12} className="inline mr-1" /> Vender
                </button>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">Moeda</label>
                <select className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground">
                  <option>Bitcoin (BTC)</option><option>Ethereum (ETH)</option><option>Solana (SOL)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">Quantidade</label>
                <input type="number" placeholder="0.00" className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">Preço (BRL)</label>
                <input type="number" placeholder="R$ 0,00" className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div className="p-3 rounded-lg bg-muted/10 text-xs text-muted-foreground space-y-1">
                <div className="flex justify-between"><span>Total estimado</span><span className="font-medium text-foreground">R$ 0,00</span></div>
                <div className="flex justify-between"><span>Taxa</span><span>0.15%</span></div>
              </div>
              <Button className={`w-full ${tab === 'buy' ? 'bg-green-500 hover:bg-green-600' : 'bg-destructive hover:bg-destructive/90'}`}>
                {tab === 'buy' ? 'Comprar BTC' : 'Vender BTC'}
              </Button>
            </div>
          </ShowcaseSection>
        </div>
        <div className="lg:col-span-2">
          <ShowcaseSection title="Book de Ofertas">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-semibold text-green-500 mb-2">Compra</h4>
                <div className="space-y-1">
                  {[
                    { price: '299.800', amount: '0.45', total: '134.910' },
                    { price: '299.750', amount: '1.20', total: '359.700' },
                    { price: '299.700', amount: '0.80', total: '239.760' },
                    { price: '299.650', amount: '2.10', total: '629.265' },
                    { price: '299.600', amount: '0.35', total: '104.860' },
                  ].map((o, i) => (
                    <div key={i} className="grid grid-cols-3 text-xs py-1 hover:bg-green-500/5">
                      <span className="text-green-500 font-medium">{o.price}</span>
                      <span className="text-muted-foreground text-right">{o.amount}</span>
                      <span className="text-muted-foreground text-right">{o.total}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-destructive mb-2">Venda</h4>
                <div className="space-y-1">
                  {[
                    { price: '300.100', amount: '0.30', total: '90.030' },
                    { price: '300.150', amount: '0.95', total: '285.142' },
                    { price: '300.200', amount: '1.50', total: '450.300' },
                    { price: '300.250', amount: '0.65', total: '195.162' },
                    { price: '300.300', amount: '2.00', total: '600.600' },
                  ].map((o, i) => (
                    <div key={i} className="grid grid-cols-3 text-xs py-1 hover:bg-destructive/5">
                      <span className="text-destructive font-medium">{o.price}</span>
                      <span className="text-muted-foreground text-right">{o.amount}</span>
                      <span className="text-muted-foreground text-right">{o.total}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ShowcaseSection>
        </div>
      </div>
    </AppsLayout>
  );
}
