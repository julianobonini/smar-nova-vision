import { useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { Label } from '@/components/ui/label';

const selectStyles = {
  control: (base: any, state: any) => ({
    ...base,
    backgroundColor: 'hsl(var(--background))',
    borderColor: state.isFocused ? 'hsl(var(--ring))' : 'hsl(var(--border))',
    borderRadius: '0.5rem',
    minHeight: '2.5rem',
    fontSize: '0.875rem',
    boxShadow: state.isFocused ? '0 0 0 2px hsl(var(--ring) / 0.3)' : 'none',
    '&:hover': { borderColor: 'hsl(var(--ring))' },
  }),
  menu: (base: any) => ({ ...base, backgroundColor: 'hsl(var(--popover))', border: '1px solid hsl(var(--border))', borderRadius: '0.5rem', zIndex: 50 }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isSelected ? 'hsl(var(--primary))' : state.isFocused ? 'hsl(var(--accent))' : 'transparent',
    color: state.isSelected ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))',
    fontSize: '0.875rem',
    '&:active': { backgroundColor: 'hsl(var(--accent))' },
  }),
  multiValue: (base: any) => ({ ...base, backgroundColor: 'hsl(var(--secondary) / 0.15)', borderRadius: '0.375rem' }),
  multiValueLabel: (base: any) => ({ ...base, color: 'hsl(var(--secondary))', fontSize: '0.75rem', fontWeight: 600 }),
  multiValueRemove: (base: any) => ({ ...base, color: 'hsl(var(--secondary))', '&:hover': { backgroundColor: 'hsl(var(--secondary) / 0.3)', color: 'hsl(var(--secondary))' } }),
  singleValue: (base: any) => ({ ...base, color: 'hsl(var(--foreground))' }),
  placeholder: (base: any) => ({ ...base, color: 'hsl(var(--muted-foreground))' }),
  input: (base: any) => ({ ...base, color: 'hsl(var(--foreground))' }),
};

const clienteOptions = [
  { value: 'furlan', label: 'Furlan Industrial' },
  { value: 'ranazzi', label: 'Ranazzi Metalúrgica' },
  { value: 'acos-victoria', label: 'Aços Victoria Ltda' },
  { value: 'metaltech', label: 'MetalTech Solutions' },
  { value: 'soldamaq', label: 'SoldaMaq Equipamentos' },
];

const estadoOptions = [
  { value: 'SP', label: 'São Paulo' }, { value: 'RJ', label: 'Rio de Janeiro' },
  { value: 'MG', label: 'Minas Gerais' }, { value: 'PR', label: 'Paraná' },
  { value: 'RS', label: 'Rio Grande do Sul' }, { value: 'SC', label: 'Santa Catarina' },
];

const tagOptions = [
  { value: 'industrial', label: 'Industrial' }, { value: 'automacao', label: 'Automação' },
  { value: 'metalurgia', label: 'Metalurgia' }, { value: 'hidraulica', label: 'Hidráulica' },
  { value: 'eletrica', label: 'Elétrica' }, { value: 'pneumatica', label: 'Pneumática' },
];

export default function Select2Showcase() {
  const [single, setSingle] = useState<any>(null);
  const [multi, setMulti] = useState<any>([]);
  const [creatable, setCreatable] = useState<any>([]);

  return (
    <FormsShowcaseLayout title="Select2" description="Selects avançados com busca, múltipla seleção e criação dinâmica usando react-select.">
      <ShowcaseSection title="Select Simples com Busca">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Cliente</Label>
            <Select options={clienteOptions} value={single} onChange={setSingle} styles={selectStyles} placeholder="Buscar cliente..." isClearable />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Estado</Label>
            <Select options={estadoOptions} styles={selectStyles} placeholder="Selecione o estado..." isClearable />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Desabilitado</Label>
            <Select options={clienteOptions} styles={selectStyles} placeholder="Desabilitado" isDisabled />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Multi-Select">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Estados Atendidos</Label>
            <Select options={estadoOptions} isMulti value={multi} onChange={setMulti} styles={selectStyles} placeholder="Selecione os estados..." />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Tags / Categorias</Label>
            <Select options={tagOptions} isMulti styles={selectStyles} placeholder="Selecione as tags..." />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Creatable (Criar Novas Opções)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Tags Personalizadas</Label>
            <CreatableSelect isMulti value={creatable} onChange={setCreatable} options={tagOptions} styles={selectStyles} placeholder="Digite ou selecione..." formatCreateLabel={(v) => `Criar "${v}"`} />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Cidade (Criável)</Label>
            <CreatableSelect
              options={[
                { value: 'sp', label: 'São Paulo' }, { value: 'rj', label: 'Rio de Janeiro' },
                { value: 'bh', label: 'Belo Horizonte' }, { value: 'ctba', label: 'Curitiba' },
              ]}
              styles={selectStyles}
              placeholder="Buscar ou criar cidade..."
              isClearable
              formatCreateLabel={(v) => `Adicionar "${v}"`}
            />
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Com Agrupamento">
        <div className="max-w-md">
          <Label className="text-xs mb-1.5">Produto por Categoria</Label>
          <Select
            options={[
              {
                label: 'Metalurgia', options: [
                  { value: 'chapa-aco', label: 'Chapa de Aço' },
                  { value: 'barra-aluminio', label: 'Barra de Alumínio' },
                ]
              },
              {
                label: 'Automação', options: [
                  { value: 'clp', label: 'CLP Siemens' },
                  { value: 'inversor', label: 'Inversor de Frequência' },
                ]
              },
              {
                label: 'Elétrica', options: [
                  { value: 'cabo', label: 'Cabo Flexível 2.5mm' },
                  { value: 'disjuntor', label: 'Disjuntor 32A' },
                ]
              },
            ]}
            styles={selectStyles}
            placeholder="Buscar produto..."
            isClearable
          />
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
