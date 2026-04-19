import {
  Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Demo } from './Demo';

export default function TablePage() {
  return (
    <Demo title="Table" description="Tabela base estilizada com tokens do design system.">
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
          <TableRow><TableCell>#4821</TableCell><TableCell>Nova Smar</TableCell><TableCell><Badge className="bg-success text-success-foreground">Faturado</Badge></TableCell><TableCell className="text-right">R$ 18.420</TableCell></TableRow>
          <TableRow><TableCell>#4822</TableCell><TableCell>Petrobras</TableCell><TableCell><Badge className="bg-warning text-warning-foreground">Pendente</Badge></TableCell><TableCell className="text-right">R$ 92.000</TableCell></TableRow>
          <TableRow><TableCell>#4823</TableCell><TableCell>Vale</TableCell><TableCell><Badge variant="destructive">Cancelado</Badge></TableCell><TableCell className="text-right">R$ 4.300</TableCell></TableRow>
        </TableBody>
      </Table>
    </Demo>
  );
}
