import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Demo } from './Demo';

export default function AccordionPage() {
  return (
    <Demo title="Accordion">
      <Accordion type="single" collapsible className="max-w-xl">
        <AccordionItem value="i1">
          <AccordionTrigger>Como faturar um pedido?</AccordionTrigger>
          <AccordionContent>Acesse Pedidos → selecione → Faturar. Será gerada NFe automaticamente.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="i2">
          <AccordionTrigger>Posso editar um cliente após cadastro?</AccordionTrigger>
          <AccordionContent>Sim. Acesse Clientes → ⋯ → Editar.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="i3">
          <AccordionTrigger>Como integrar com o ERP fiscal?</AccordionTrigger>
          <AccordionContent>Configure as credenciais em Configurações → Integrações.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </Demo>
  );
}
