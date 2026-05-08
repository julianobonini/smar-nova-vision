import {
  Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';
import { ComponentDoc, DocSection, VariantSection, PropsTable, UsageNote, type PropDef } from '../_docs';

const tableProps: PropDef[] = [
  { name: 'className', type: 'string', description: 'Classes utilitárias para a tabela raiz.' },
];

const cellProps: PropDef[] = [
  { name: 'colSpan / rowSpan', type: 'number', description: 'Mescla células — útil em rodapés de totalização.' },
  { name: 'className', type: 'string', description: 'Tipograficamente, use text-right para valores monetários.' },
];

export default function TablePage() {
  return (
    <ComponentDoc
      summary="Componente de tabela base — wrapper estilizado sobre os elementos HTML <table>. Usa tokens semânticos para zebra, hover e cabeçalhos, garantindo legibilidade em modo claro e escuro."
      importPath="import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'"
    >
      <DocSection title="Table">
        <VariantSection
          title="Padrão com status"
          description="Uso típico em listagens de pedidos: cabeçalho fixo, valores alinhados à direita e badges semânticos para status."
          preview={
            <Table>
              <TableCaption>Pedidos recentes</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Pedido</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Valor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">#4821</TableCell>
                  <TableCell>Nova Smar</TableCell>
                  <TableCell><Badge className="bg-success text-success-foreground hover:bg-success/90">Faturado</Badge></TableCell>
                  <TableCell className="text-right font-mono">R$ 18.420,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#4822</TableCell>
                  <TableCell>Petrobras</TableCell>
                  <TableCell><Badge className="bg-warning text-warning-foreground hover:bg-warning/90">Pendente</Badge></TableCell>
                  <TableCell className="text-right font-mono">R$ 92.000,00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#4823</TableCell>
                  <TableCell>Vale</TableCell>
                  <TableCell><Badge variant="destructive">Cancelado</Badge></TableCell>
                  <TableCell className="text-right font-mono">R$ 4.300,00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          }
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Pedido</TableHead>
      <TableHead className="text-right">Valor</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>#4821</TableCell>
      <TableCell className="text-right">R$ 18.420,00</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        />

        <VariantSection
          title="Com seleção, ordenação e ações"
          description="Padrão de data table: checkbox de seleção, cabeçalho com ordenação, coluna de ações e rodapé com totalização."
          preview={
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10"><Checkbox /></TableHead>
                  <TableHead>
                    <Button variant="ghost" size="sm" className="-ml-3 h-8">
                      Produto <ArrowUpDown className="ml-2 h-3 w-3" />
                    </Button>
                  </TableHead>
                  <TableHead>SKU</TableHead>
                  <TableHead className="text-right">Estoque</TableHead>
                  <TableHead className="w-10" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { p: 'Sensor de pressão', sku: 'SP-2010', e: 124 },
                  { p: 'Transmissor inteligente', sku: 'TI-4400', e: 18 },
                  { p: 'Válvula esfera 2"', sku: 'VE-2000', e: 0 },
                ].map((r) => (
                  <TableRow key={r.sku}>
                    <TableCell><Checkbox /></TableCell>
                    <TableCell className="font-medium">{r.p}</TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">{r.sku}</TableCell>
                    <TableCell className="text-right font-mono">
                      <span className={r.e === 0 ? 'text-destructive' : r.e < 30 ? 'text-warning' : 'text-success'}>{r.e}</span>
                    </TableCell>
                    <TableCell><Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total em estoque</TableCell>
                  <TableCell className="text-right font-mono">142</TableCell>
                  <TableCell />
                </TableRow>
              </TableFooter>
            </Table>
          }
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-10"><Checkbox /></TableHead>
      <TableHead>Produto</TableHead>
      <TableHead className="text-right">Estoque</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>{/* rows */}</TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">142</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
        />

        <VariantSection
          title="Densa em superfície elevada"
          description="Para painéis com fundo já contrastado (ex.: cards), envelope a tabela em bg-surface-container-high para reforçar a hierarquia."
          preview={
            <div className="rounded-xl border-2 border-border/70 bg-surface-container-high overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Centro de custo</TableHead>
                    <TableHead className="text-right">Realizado</TableHead>
                    <TableHead className="text-right">Orçado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow><TableCell>Manutenção</TableCell><TableCell className="text-right font-mono">R$ 38.420</TableCell><TableCell className="text-right font-mono text-muted-foreground">R$ 50.000</TableCell></TableRow>
                  <TableRow><TableCell>Engenharia</TableCell><TableCell className="text-right font-mono">R$ 112.000</TableCell><TableCell className="text-right font-mono text-muted-foreground">R$ 100.000</TableCell></TableRow>
                  <TableRow><TableCell>TI</TableCell><TableCell className="text-right font-mono">R$ 24.300</TableCell><TableCell className="text-right font-mono text-muted-foreground">R$ 30.000</TableCell></TableRow>
                </TableBody>
              </Table>
            </div>
          }
          code={`<div className="rounded-xl border-2 border-border/70 bg-surface-container-high overflow-hidden">
  <Table>{/* ... */}</Table>
</div>`}
        />

        <PropsTable rows={tableProps} title="Table (Root)" />
        <PropsTable rows={cellProps} title="TableCell / TableHead" />

        <UsageNote type="tip">
          Para valores numéricos, use <code className="font-mono text-[11px]">font-mono</code> + <code className="font-mono text-[11px]">text-right</code> — facilita o alinhamento decimal e a leitura comparativa.
        </UsageNote>

        <UsageNote type="info">
          As linhas usam <code className="font-mono text-[11px]">hover:bg-muted/50</code> nativamente. O modo escuro herda automaticamente via tokens — não defina cores fixas.
        </UsageNote>

        <UsageNote type="warning">
          Para listas com 50+ linhas, prefira virtualização (TanStack Table + react-virtual) e considere paginação. Tabelas grandes sem virtualização degradam performance.
        </UsageNote>
      </DocSection>
    </ComponentDoc>
  );
}
