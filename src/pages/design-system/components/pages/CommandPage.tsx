import {
  Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator,
} from '@/components/ui/command';
import { Calculator, Calendar, CreditCard, Settings, User } from 'lucide-react';
import { Demo } from './Demo';

export default function CommandPage() {
  return (
    <Demo title="Command palette" description="Busca e atalhos estilo ⌘K.">
      <Command className="rounded-xl border border-border/30 max-w-md">
        <CommandInput placeholder="Buscar comando..." />
        <CommandList>
          <CommandEmpty>Nenhum resultado.</CommandEmpty>
          <CommandGroup heading="Sugestões">
            <CommandItem><Calendar /> Agenda</CommandItem>
            <CommandItem><Calculator /> Calculadora</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Conta">
            <CommandItem><User /> Perfil</CommandItem>
            <CommandItem><CreditCard /> Cobrança</CommandItem>
            <CommandItem><Settings /> Configurações</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </Demo>
  );
}
