import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel,
} from '@/components/ui/select';
import { Demo } from './Demo';

export default function SelectPage() {
  return (
    <>
      <Demo title="Select básico">
        <Select>
          <SelectTrigger className="w-[260px]"><SelectValue placeholder="Selecione um setor" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="prod">Produção</SelectItem>
            <SelectItem value="qual">Qualidade</SelectItem>
            <SelectItem value="log">Logística</SelectItem>
            <SelectItem value="adm">Administrativo</SelectItem>
          </SelectContent>
        </Select>
      </Demo>

      <Demo title="Com grupos">
        <Select>
          <SelectTrigger className="w-[260px]"><SelectValue placeholder="Selecione" /></SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sudeste</SelectLabel>
              <SelectItem value="sp">São Paulo</SelectItem>
              <SelectItem value="rj">Rio de Janeiro</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Sul</SelectLabel>
              <SelectItem value="rs">Rio Grande do Sul</SelectItem>
              <SelectItem value="sc">Santa Catarina</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Demo>
    </>
  );
}
