import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Demo } from './Demo';

export default function CardsPage() {
  return (
    <>
      <Demo title="Card padrão">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Pedido #4821</CardTitle>
            <CardDescription>Cliente Nova Smar S/A · 12/04/2026</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Conjunto de 3 transmissores TT300 prontos para faturamento.
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="outline">Ver detalhes</Button>
            <Button>Faturar</Button>
          </CardFooter>
        </Card>
      </Demo>

      <Demo title="Variantes (KPI / Highlight)">
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader><CardTitle className="text-base">Padrão</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground">Card padrão.</CardContent>
          </Card>
          <div className="rounded-2xl bg-surface-container p-5 shadow-ambient">
            <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">KPI</p>
            <p className="font-display text-3xl font-extrabold">R$ 482k</p>
            <p className="text-xs text-success mt-1">+12,4%</p>
          </div>
          <div className="rounded-2xl bg-primary text-primary-foreground p-5 shadow-ambient-lg">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-2">Highlight</p>
            <p className="font-display text-2xl font-bold">Meta atingida</p>
          </div>
        </div>
      </Demo>
    </>
  );
}
