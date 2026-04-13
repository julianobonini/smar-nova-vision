import { AppsLayout, ShowcaseSection } from './AppsLayout';
import { Button } from '@/components/ui/button';
import { Upload, Plus, X } from 'lucide-react';

export default function NFTCreateShowcase() {
  return (
    <AppsLayout title="Create NFT" description="Formulário para mintagem de novo NFT." category="NFT">
      <ShowcaseSection title="Criar NFT">
        <div className="max-w-2xl space-y-5">
          <div className="border-2 border-dashed border-border rounded-xl p-10 text-center">
            <Upload size={32} className="mx-auto text-muted-foreground mb-3" />
            <p className="text-sm font-medium text-foreground">Upload da Arte</p>
            <p className="text-xs text-muted-foreground mt-1">PNG, GIF, WEBP, MP4. Máx 100MB.</p>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Nome</label>
            <input className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Ex: Cyber Punk #001" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Descrição</label>
            <textarea rows={3} className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none" placeholder="Descreva seu NFT..." />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Preço (ETH)</label>
              <input type="number" step="0.01" className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="0.00" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Royalties (%)</label>
              <input type="number" className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="10" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Coleção</label>
            <select className="w-full px-3 py-2 rounded-lg bg-muted/20 border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
              <option>Selecione uma coleção</option><option>CyberPunk Collection</option><option>Abstract Art</option><option>Nova coleção</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Propriedades</label>
            <div className="space-y-2">
              {[{ trait: 'Background', value: 'Neon Purple' }, { trait: 'Eyes', value: 'Laser Red' }].map((p, i) => (
                <div key={i} className="flex gap-2">
                  <input value={p.trait} readOnly className="flex-1 px-3 py-2 rounded-lg bg-muted/20 border border-border text-xs text-foreground" />
                  <input value={p.value} readOnly className="flex-1 px-3 py-2 rounded-lg bg-muted/20 border border-border text-xs text-foreground" />
                  <button className="p-2 text-muted-foreground hover:text-foreground"><X size={14} /></button>
                </div>
              ))}
              <button className="flex items-center gap-1 text-xs text-primary hover:underline"><Plus size={12} /> Adicionar propriedade</button>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <Button>Criar NFT</Button>
            <Button variant="outline">Cancelar</Button>
          </div>
        </div>
      </ShowcaseSection>
    </AppsLayout>
  );
}
