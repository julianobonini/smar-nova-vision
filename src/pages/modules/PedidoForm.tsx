import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Save, X, Plus, Trash2, Home, ChevronRight, Search } from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';

const tabs = [
  { key: 'resumo', label: 'Resumo' },
  { key: 'itens', label: 'Itens' },
  { key: 'pagamento', label: 'Pagamento' },
  { key: 'prazo', label: 'Prazo de Entrega' },
  { key: 'frete', label: 'Frete / Embarque' },
  { key: 'observacoes', label: 'Observações' },
];

function Field({ label, children, span = 1 }: { label: string; children: React.ReactNode; span?: number }) {
  return (
    <div className={span === 2 ? 'sm:col-span-2' : span === 3 ? 'sm:col-span-3' : ''}>
      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function FieldInput({ placeholder = '', type = 'text', defaultValue = '' }) {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="w-full px-3 py-2.5 rounded-xl bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-ambient text-sm"
    />
  );
}

function FieldSelect({ options, defaultValue = '' }: { options: string[]; defaultValue?: string }) {
  return (
    <select defaultValue={defaultValue} className="w-full px-3 py-2.5 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-ambient text-sm appearance-none">
      <option value="">Selecione...</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm font-display font-bold text-foreground mb-4 pb-2" style={{ borderBottom: '1px solid hsl(var(--border) / 0.3)' }}>{children}</h3>;
}

// Mock item data
const mockItems = [
  { id: 1, codigo: 'EQP-001', descricao: 'Sensor de Pressão XK-200', qtd: 10, unidade: 'UN', unitario: 1250.00, ipi: 5, icms: 12, total: 12500.00 },
  { id: 2, codigo: 'EQP-002', descricao: 'Válvula Pneumática VP-100', qtd: 5, unidade: 'UN', unitario: 3400.00, ipi: 5, icms: 12, total: 17000.00 },
  { id: 3, codigo: 'EQP-003', descricao: 'Controlador PLC-400', qtd: 2, unidade: 'UN', unitario: 8900.00, ipi: 10, icms: 18, total: 17800.00 },
];

function TabResumo() {
  return (
    <div className="space-y-6">
      <SectionTitle>Dados do Pedido</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Field label="Nº Pedido"><FieldInput defaultValue="PED-88425" /></Field>
        <Field label="Data Emissão"><FieldInput type="date" defaultValue="2023-10-28" /></Field>
        <Field label="Status">
          <FieldSelect options={['Em Elaboração', 'Aprovado', 'Faturado', 'Cancelado']} defaultValue="Em Elaboração" />
        </Field>
        <Field label="Origem">
          <FieldSelect options={['Nacional', 'Importação']} defaultValue="Nacional" />
        </Field>
      </div>

      <SectionTitle>Cliente</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Field label="Cliente" span={2}>
          <div className="flex gap-2">
            <input defaultValue="USINA ACUCAREIRA FURLAN S/A" className="flex-1 px-3 py-2.5 rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-ambient text-sm" />
            <button className="p-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors text-muted-foreground"><Search size={16} /></button>
          </div>
        </Field>
        <Field label="CNPJ"><FieldInput defaultValue="56.723.257/0001-26" /></Field>
        <Field label="Cidade/UF/País"><FieldInput defaultValue="Santa Barbar D Oeste / SP / BRA" /></Field>
        <Field label="I.E."><FieldInput defaultValue="606039671117" /></Field>
        <Field label="Vendedor">
          <FieldSelect options={['Carlos Silva', 'Maria Santos', 'Pedro Costa']} defaultValue="Carlos Silva" />
        </Field>
      </div>

      <SectionTitle>Contatos</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Contato Comercial"><FieldInput defaultValue="Sr. Genivaldo A. Furlan" /></Field>
        <Field label="E-mail"><FieldInput defaultValue="genivaldo@usinafurlan.com.br" /></Field>
        <Field label="Telefone"><FieldInput defaultValue="(19) 3026-4600" /></Field>
      </div>

      <SectionTitle>Resumo Financeiro</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {[
          { label: 'Total Equipamentos', value: 'R$ 47.300,00' },
          { label: 'Total Serviços', value: 'R$ 0,00' },
          { label: 'Frete', value: 'R$ 850,00' },
          { label: 'Base ICMS', value: 'R$ 47.300,00' },
          { label: 'Total IPI', value: 'R$ 3.150,00' },
          { label: 'Total Pedido', value: 'R$ 51.300,00' },
        ].map(item => (
          <div key={item.label} className="bg-surface-container-low rounded-xl p-3 text-center">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
            <p className="text-sm font-display font-bold text-foreground">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TabItens() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <SectionTitle>Itens do Pedido</SectionTitle>
        <button className="px-4 py-2 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Plus size={14} /> Adicionar Item
        </button>
      </div>

      <div className="bg-background rounded-2xl shadow-ambient overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                {['#', 'Código', 'Descrição', 'Qtd', 'Un', 'V. Unitário', 'IPI %', 'ICMS %', 'Total'].map(h => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider bg-surface-container-low">{h}</th>
                ))}
                <th className="px-4 py-3 bg-surface-container-low"></th>
              </tr>
            </thead>
            <tbody>
              {mockItems.map((item, i) => (
                <tr key={item.id} className={i % 2 === 0 ? 'bg-background' : 'bg-surface-container-low/50'}>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{item.id}</td>
                  <td className="px-4 py-3 text-sm font-medium text-secondary">{item.codigo}</td>
                  <td className="px-4 py-3 text-sm text-foreground">{item.descricao}</td>
                  <td className="px-4 py-3"><input type="number" defaultValue={item.qtd} className="w-16 px-2 py-1.5 rounded-lg bg-surface-container-low text-foreground text-sm text-center focus:outline-none focus:ring-2 focus:ring-secondary/30" /></td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{item.unidade}</td>
                  <td className="px-4 py-3 text-sm text-foreground">{item.unitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{item.ipi}%</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{item.icms}%</td>
                  <td className="px-4 py-3 text-sm font-semibold text-foreground">{item.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="px-4 py-3">
                    <button className="p-1.5 rounded-lg hover:bg-surface-container-low text-muted-foreground hover:text-destructive transition-colors"><Trash2 size={14} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-surface-container-low">
                <td colSpan={8} className="px-4 py-3 text-sm font-bold text-foreground text-right">Total Geral:</td>
                <td className="px-4 py-3 text-sm font-display font-bold text-secondary">R$ 47.300,00</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}

function TabPagamento() {
  return (
    <div className="space-y-6">
      <SectionTitle>Condições de Pagamento</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Field label="Forma de Pagamento">
          <FieldSelect options={['Boleto Bancário', 'Transferência', 'Cartão', 'Cheque', 'Financiamento']} defaultValue="Boleto Bancário" />
        </Field>
        <Field label="Condição">
          <FieldSelect options={['30/60/90 DDL', '28 DDL', '30 DDL', '45 DDL', 'À Vista', '30/60 DDL']} defaultValue="30/60/90 DDL" />
        </Field>
        <Field label="Moeda">
          <FieldSelect options={['BRL - Real', 'USD - Dólar', 'EUR - Euro']} defaultValue="BRL - Real" />
        </Field>
      </div>

      <SectionTitle>Parcelas</SectionTitle>
      <div className="bg-background rounded-2xl shadow-ambient overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              {['Parcela', 'Vencimento', 'Valor', 'Status'].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider bg-surface-container-low">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { parcela: '1/3', venc: '28/11/2023', valor: 'R$ 17.100,00', status: 'Pendente' },
              { parcela: '2/3', venc: '28/12/2023', valor: 'R$ 17.100,00', status: 'Pendente' },
              { parcela: '3/3', venc: '28/01/2024', valor: 'R$ 17.100,00', status: 'Pendente' },
            ].map((p, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-surface-container-low/50'}>
                <td className="px-4 py-3 text-sm font-medium text-foreground">{p.parcela}</td>
                <td className="px-4 py-3 text-sm text-foreground">{p.venc}</td>
                <td className="px-4 py-3 text-sm font-semibold text-foreground">{p.valor}</td>
                <td className="px-4 py-3"><span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-status-pending/10 text-status-pending">{p.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle>Dados Bancários</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Field label="Banco"><FieldSelect options={['Banco do Brasil', 'Itaú', 'Bradesco', 'Santander', 'Caixa']} /></Field>
        <Field label="Agência"><FieldInput placeholder="0000-0" /></Field>
        <Field label="Conta"><FieldInput placeholder="00000-0" /></Field>
        <Field label="PIX"><FieldInput placeholder="Chave PIX" /></Field>
      </div>
    </div>
  );
}

function TabPrazo() {
  return (
    <div className="space-y-6">
      <SectionTitle>Prazos de Entrega</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Field label="Prazo de Entrega (dias)"><FieldInput type="number" defaultValue="45" /></Field>
        <Field label="Data Prevista"><FieldInput type="date" defaultValue="2023-12-12" /></Field>
        <Field label="Prioridade">
          <FieldSelect options={['Normal', 'Urgente', 'Programada']} defaultValue="Normal" />
        </Field>
      </div>

      <SectionTitle>Entregas Parciais</SectionTitle>
      <div className="bg-background rounded-2xl shadow-ambient overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              {['Lote', 'Itens', 'Data Prevista', 'Data Entrega', 'Status'].map(h => (
                <th key={h} className="text-left px-4 py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider bg-surface-container-low">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { lote: '1/2', itens: 'Sensor XK-200 (10 un)', prev: '15/11/2023', entrega: '-', status: 'Aguardando' },
              { lote: '2/2', itens: 'Válvula VP-100 (5 un), PLC-400 (2 un)', prev: '12/12/2023', entrega: '-', status: 'Aguardando' },
            ].map((l, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-surface-container-low/50'}>
                <td className="px-4 py-3 text-sm font-medium text-foreground">{l.lote}</td>
                <td className="px-4 py-3 text-sm text-foreground">{l.itens}</td>
                <td className="px-4 py-3 text-sm text-foreground">{l.prev}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground">{l.entrega}</td>
                <td className="px-4 py-3"><span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-status-pending/10 text-status-pending">{l.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Observações sobre Prazo" span={2}>
          <textarea rows={3} className="w-full px-3 py-2.5 rounded-xl bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-ambient text-sm resize-none" placeholder="Observações sobre condições de prazo..." />
        </Field>
      </div>
    </div>
  );
}

function TabFrete() {
  return (
    <div className="space-y-6">
      <SectionTitle>Dados de Frete e Embarque</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Field label="Tipo de Frete">
          <FieldSelect options={['FOB - Por conta do comprador', 'CIF - Por conta do vendedor', 'FOT - Fábrica']} defaultValue="FOT - Fábrica" />
        </Field>
        <Field label="Transportadora"><FieldInput defaultValue="Transportes Rápidos Ltda" /></Field>
        <Field label="Valor do Frete"><FieldInput defaultValue="R$ 850,00" /></Field>
        <Field label="Seguro"><FieldInput defaultValue="R$ 0,00" /></Field>
        <Field label="Peso Bruto (kg)"><FieldInput type="number" defaultValue="320" /></Field>
        <Field label="Volume"><FieldInput type="number" defaultValue="8" /></Field>
      </div>

      <SectionTitle>Endereço de Entrega</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Field label="Endereço" span={2}><FieldInput defaultValue="Rod. SP-304 Km 143,5 - CX.P. 127/128" /></Field>
        <Field label="CEP"><FieldInput defaultValue="13450-000" /></Field>
        <Field label="Cidade"><FieldInput defaultValue="Santa Bárbara d'Oeste" /></Field>
        <Field label="UF"><FieldSelect options={['SP', 'RJ', 'MG', 'RS', 'PR', 'SC']} defaultValue="SP" /></Field>
        <Field label="País"><FieldInput defaultValue="Brasil" /></Field>
      </div>
    </div>
  );
}

function TabObservacoes() {
  return (
    <div className="space-y-6">
      <SectionTitle>Observações Gerais</SectionTitle>
      <Field label="Observações do Pedido" span={2}>
        <textarea rows={5} className="w-full px-3 py-2.5 rounded-xl bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-ambient text-sm resize-none" placeholder="Observações gerais do pedido..." />
      </Field>

      <SectionTitle>Observações Internas</SectionTitle>
      <Field label="Notas internas (não visíveis ao cliente)" span={2}>
        <textarea rows={4} className="w-full px-3 py-2.5 rounded-xl bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-ambient text-sm resize-none" placeholder="Notas internas..." />
      </Field>

      <SectionTitle>Termos e Condições</SectionTitle>
      <Field label="Condições Contratuais" span={2}>
        <textarea rows={4} defaultValue="Validade da proposta: 15 dias. Garantia conforme especificação técnica do fabricante. Entrega sujeita à confirmação de estoque." className="w-full px-3 py-2.5 rounded-xl bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 shadow-ambient text-sm resize-none" />
      </Field>
    </div>
  );
}

const tabComponents: Record<string, () => JSX.Element> = {
  resumo: TabResumo,
  itens: TabItens,
  pagamento: TabPagamento,
  prazo: TabPrazo,
  frete: TabFrete,
  observacoes: TabObservacoes,
};

export default function PedidoForm() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('resumo');
  const ActiveComponent = tabComponents[activeTab];

  return (
    <AppLayout>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm mb-6">
        <Link to="/app" className="text-muted-foreground hover:text-foreground transition-colors"><Home size={14} /></Link>
        <ChevronRight size={14} className="text-muted-foreground/50" />
        <span className="text-muted-foreground">Comercial</span>
        <ChevronRight size={14} className="text-muted-foreground/50" />
        <Link to="/app/pedidos" className="text-muted-foreground hover:text-foreground transition-colors">Pedidos</Link>
        <ChevronRight size={14} className="text-muted-foreground/50" />
        <span className="text-foreground font-medium">Novo Pedido</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/app/pedidos')} className="p-2.5 rounded-xl bg-background shadow-ambient hover:bg-surface-container-high transition-colors text-muted-foreground hover:text-foreground">
            <ArrowLeft size={18} />
          </button>
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Novo Pedido</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Pedido PED-88425 • <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-status-pending/10 text-status-pending">Em Elaboração</span></p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/app/pedidos')} className="px-5 py-2.5 rounded-xl bg-background text-foreground text-sm font-semibold flex items-center gap-2 shadow-ambient hover:bg-surface-container-high transition-colors">
            <X size={16} /> Cancelar
          </button>
          <button className="px-5 py-2.5 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Save size={16} /> Salvar Pedido
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 overflow-x-auto pb-1 bg-background rounded-2xl shadow-ambient p-1.5">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.key
                ? 'gradient-primary text-primary-foreground shadow-md'
                : 'text-muted-foreground hover:text-foreground hover:bg-surface-container-low'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-background rounded-2xl shadow-ambient p-6 lg:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
          >
            <ActiveComponent />
          </motion.div>
        </AnimatePresence>
      </div>
    </AppLayout>
  );
}
