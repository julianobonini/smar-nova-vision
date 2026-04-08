import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function FormLayoutsShowcase() {
  return (
    <FormsShowcaseLayout title="Form Layouts" description="Diferentes padrões de layout para formulários: vertical, horizontal, inline e em grid.">
      <ShowcaseSection title="Layout Vertical (Padrão)">
        <div className="max-w-md space-y-4">
          <div>
            <Label className="text-xs mb-1.5">Nome Completo</Label>
            <Input placeholder="Digite seu nome" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Email</Label>
            <Input type="email" placeholder="email@empresa.com" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Mensagem</Label>
            <Textarea placeholder="Sua mensagem..." className="min-h-[80px]" />
          </div>
          <Button className="w-full">Enviar</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Layout Horizontal">
        <div className="space-y-4 max-w-2xl">
          {[
            { label: 'Nome Completo', placeholder: 'Digite seu nome' },
            { label: 'Email', placeholder: 'email@empresa.com' },
            { label: 'Telefone', placeholder: '(00) 00000-0000' },
          ].map(field => (
            <div key={field.label} className="flex items-center gap-4">
              <Label className="text-xs w-32 text-right shrink-0">{field.label}</Label>
              <Input placeholder={field.placeholder} className="flex-1" />
            </div>
          ))}
          <div className="flex justify-end">
            <Button>Salvar</Button>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Layout Inline">
        <div className="flex flex-wrap items-end gap-3">
          <div>
            <Label className="text-xs mb-1.5">Código</Label>
            <Input placeholder="COD" className="w-24" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Produto</Label>
            <Input placeholder="Nome do produto" className="w-48" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Qtd</Label>
            <Input type="number" placeholder="0" className="w-20" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Unidade</Label>
            <Select>
              <SelectTrigger className="w-24"><SelectValue placeholder="UN" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="un">UN</SelectItem>
                <SelectItem value="kg">KG</SelectItem>
                <SelectItem value="mt">MT</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>Adicionar</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Grid Layout (Cadastro)">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Razão Social</Label>
            <Input placeholder="Razão social da empresa" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Nome Fantasia</Label>
            <Input placeholder="Nome fantasia" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">CNPJ</Label>
            <Input placeholder="00.000.000/0000-00" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Inscrição Estadual</Label>
            <Input placeholder="000.000.000.000" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Telefone</Label>
            <Input placeholder="(00) 00000-0000" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Email</Label>
            <Input type="email" placeholder="contato@empresa.com" />
          </div>
          <div className="sm:col-span-2">
            <Label className="text-xs mb-1.5">Endereço</Label>
            <Input placeholder="Rua, número, complemento" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Cidade</Label>
            <Input placeholder="Cidade" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Estado</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="UF" /></SelectTrigger>
              <SelectContent>
                {['SP', 'RJ', 'MG', 'PR', 'RS', 'SC'].map(uf => (
                  <SelectItem key={uf} value={uf}>{uf}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-xs mb-1.5">CEP</Label>
            <Input placeholder="00000-000" />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline">Cancelar</Button>
          <Button>Salvar Cadastro</Button>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Formulário com Seções">
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3 pb-2 border-b border-border/30">Dados Pessoais</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div><Label className="text-xs mb-1.5">Nome</Label><Input placeholder="Nome" /></div>
              <div><Label className="text-xs mb-1.5">Sobrenome</Label><Input placeholder="Sobrenome" /></div>
              <div><Label className="text-xs mb-1.5">CPF</Label><Input placeholder="000.000.000-00" /></div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3 pb-2 border-b border-border/30">Endereço</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2"><Label className="text-xs mb-1.5">Logradouro</Label><Input placeholder="Rua / Avenida" /></div>
              <div><Label className="text-xs mb-1.5">Número</Label><Input placeholder="Nº" /></div>
            </div>
          </div>
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
