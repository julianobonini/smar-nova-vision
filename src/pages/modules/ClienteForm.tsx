import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Save, X, Building2, CreditCard, Users2, Truck,
  FileText, MapPin, Phone, Mail, Globe, Hash, CheckSquare, Home, ChevronRight
} from 'lucide-react';
import { AppLayout } from '@/components/AppLayout';

type Tab = 'cadastrais' | 'financeiros' | 'contatos' | 'cobranca' | 'embarque' | 'observacao';

const tabs: { key: Tab; label: string; icon: typeof Building2 }[] = [
  { key: 'cadastrais', label: 'Dados Cadastrais', icon: Building2 },
  { key: 'financeiros', label: 'Dados Financeiros', icon: CreditCard },
  { key: 'contatos', label: 'Contatos', icon: Users2 },
  { key: 'cobranca', label: 'Cobrança', icon: FileText },
  { key: 'embarque', label: 'Embarque', icon: Truck },
  { key: 'observacao', label: 'Observação', icon: FileText },
];

function FieldGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
        <span className="w-8 h-px bg-border" />
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-5">
        {children}
      </div>
    </div>
  );
}

function Field({ label, required, children, span }: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  span?: 2 | 3;
}) {
  return (
    <div className={span === 3 ? 'md:col-span-2 xl:col-span-3' : span === 2 ? 'md:col-span-2' : ''}>
      <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
        {label}
        {required && <span className="text-destructive ml-1">•</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass = "w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all";
const selectClass = "w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all appearance-none";

export default function ClienteForm() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('cadastrais');
  const [isento, setIsento] = useState(false);

  return (
    <AppLayout>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm mb-6">
        <Link to="/app" className="text-muted-foreground hover:text-foreground transition-colors"><Home size={14} /></Link>
        <ChevronRight size={14} className="text-muted-foreground/50" />
        <span className="text-muted-foreground">Comercial</span>
        <ChevronRight size={14} className="text-muted-foreground/50" />
        <Link to="/app/clientes" className="text-muted-foreground hover:text-foreground transition-colors">Clientes</Link>
        <ChevronRight size={14} className="text-muted-foreground/50" />
        <span className="text-foreground font-medium">Novo Cliente</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Cadastro de Cliente — Novo</h1>
          </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/app/clientes')}
            className="px-5 py-2.5 rounded-xl bg-surface-container text-foreground text-sm font-medium flex items-center gap-2 hover:bg-surface-container-high transition-colors"
          >
            <X size={16} /> Cancelar
          </button>
          <button className="px-6 py-2.5 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Save size={16} /> Salvar
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 overflow-x-auto pb-1 scrollbar-none">
        {tabs.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === key
                ? 'gradient-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:bg-surface-container-low hover:text-foreground'
            }`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>

      {/* Form content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-background rounded-2xl shadow-ambient p-6 lg:p-8"
      >
        {activeTab === 'cadastrais' && <TabCadastrais isento={isento} setIsento={setIsento} />}
        {activeTab === 'financeiros' && <TabFinanceiros />}
        {activeTab === 'contatos' && <TabContatos />}
        {activeTab === 'cobranca' && <TabCobranca />}
        {activeTab === 'embarque' && <TabEmbarque />}
        {activeTab === 'observacao' && <TabObservacao />}
      </motion.div>
    </AppLayout>
  );
}

/* ─── Tab: Dados Cadastrais ─── */
function TabCadastrais({ isento, setIsento }: { isento: boolean; setIsento: (v: boolean) => void }) {
  return (
    <>
      <FieldGroup title="Identificação">
        <Field label="Razão Social" required span={2}>
          <input className={inputClass} placeholder="Nome completo da empresa" />
        </Field>
        <Field label="Nome Reduzido" required>
          <input className={inputClass} placeholder="Nome fantasia" />
        </Field>
        <Field label="CNPJ" required>
          <input className={inputClass} placeholder="00.000.000/0000-00" />
        </Field>
        <Field label="Inscrição Estadual">
          <div className="flex items-center gap-3">
            <input className={`${inputClass} flex-1`} placeholder="000.000.000.000" disabled={isento} />
            <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer whitespace-nowrap">
              <input
                type="checkbox"
                checked={isento}
                onChange={(e) => setIsento(e.target.checked)}
                className="w-4 h-4 rounded accent-secondary"
              />
              Isento
            </label>
          </div>
        </Field>
        <Field label="Inscrição Municipal">
          <input className={inputClass} placeholder="Número" />
        </Field>
        <Field label="Natureza" required>
          <select className={selectClass}>
            <option>Jurídico</option>
            <option>Físico</option>
          </select>
        </Field>
        <Field label="Tipo do Cliente">
          <select className={selectClass}>
            <option>Cliente</option>
            <option>Prospect</option>
            <option>Ex-Cliente</option>
          </select>
        </Field>
        <Field label="Contribuinte">
          <select className={selectClass}>
            <option>Não</option>
            <option>Sim</option>
          </select>
        </Field>
        <Field label="Tipo Operação">
          <select className={selectClass}>
            <option>Consumidor Final</option>
            <option>Revenda</option>
            <option>Industrialização</option>
          </select>
        </Field>
        <Field label="Cond. Pagamento">
          <select className={selectClass}>
            <option>30 dias</option>
            <option>30/60 dias</option>
            <option>30/60/90 dias</option>
            <option>À vista</option>
          </select>
        </Field>
        <Field label="Modo de Pagamento">
          <select className={selectClass}>
            <option>Transferência Bancária</option>
            <option>Boleto</option>
            <option>Cartão</option>
            <option>PIX</option>
          </select>
        </Field>
        <Field label="Status" required>
          <div className="flex gap-2">
            <span className="px-3 py-2 rounded-xl bg-status-success/10 text-status-success text-sm font-semibold flex items-center gap-2">
              <CheckSquare size={14} /> Sem restrições
            </span>
          </div>
        </Field>
      </FieldGroup>

      <FieldGroup title="Endereço">
        <Field label="CEP" required>
          <input className={inputClass} placeholder="00000-000" />
        </Field>
        <Field label="Endereço" required span={2}>
          <input className={inputClass} placeholder="Rua, número" />
        </Field>
        <Field label="Complemento">
          <input className={inputClass} placeholder="Sala, andar..." />
        </Field>
        <Field label="Bairro" required>
          <input className={inputClass} placeholder="Bairro" />
        </Field>
        <Field label="País" required>
          <select className={selectClass}>
            <option>BRASIL</option>
            <option>ARGENTINA</option>
            <option>ESTADOS UNIDOS</option>
          </select>
        </Field>
        <Field label="Estado" required>
          <select className={selectClass}>
            <option>SÃO PAULO</option>
            <option>RIO DE JANEIRO</option>
            <option>MINAS GERAIS</option>
            <option>PARANÁ</option>
            <option>RIO GRANDE DO SUL</option>
            <option>SANTA CATARINA</option>
          </select>
        </Field>
        <Field label="Cidade" required>
          <select className={selectClass}>
            <option>ARARAQUARA</option>
            <option>SÃO PAULO</option>
            <option>SERTÃOZINHO</option>
          </select>
        </Field>
      </FieldGroup>

      <FieldGroup title="Outros Dados">
        <Field label="Telefone 1">
          <input className={inputClass} placeholder="(00) 0000-0000" />
        </Field>
        <Field label="Telefone 2">
          <input className={inputClass} placeholder="(00) 0000-0000" />
        </Field>
        <Field label="Fax">
          <input className={inputClass} placeholder="(00) 0000-0000" />
        </Field>
        <Field label="E-mail NFe">
          <input type="email" className={inputClass} placeholder="nfe@empresa.com.br" />
        </Field>
        <Field label="E-mail NFSe">
          <input type="email" className={inputClass} placeholder="nfse@empresa.com.br" />
        </Field>
        <Field label="Home Page">
          <input className={inputClass} placeholder="www.empresa.com.br" />
        </Field>
      </FieldGroup>

      <FieldGroup title="Características">
        <Field label="Origem" required>
          <select className={selectClass}>
            <option>NACIONAL</option>
            <option>INTERNACIONAL</option>
          </select>
        </Field>
        <Field label="Segmento" required>
          <select className={selectClass}>
            <option>FABRICANTE DE EQUIPAMENTOS</option>
            <option>DISTRIBUIDOR</option>
            <option>INTEGRADOR</option>
            <option>USUÁRIO FINAL</option>
          </select>
        </Field>
        <Field label="Área Coord. Comercial" required>
          <select className={selectClass}>
            <option>São Paulo - Norte</option>
            <option>São Paulo - Sul</option>
            <option>Rio de Janeiro</option>
            <option>Minas Gerais</option>
          </select>
        </Field>
        <Field label="Área Coord. Técnico" required>
          <select className={selectClass}>
            <option>ENGENHARIA DE APLICAÇÕES</option>
            <option>SUPORTE TÉCNICO</option>
          </select>
        </Field>
        <Field label="Transportadora">
          <select className={selectClass}>
            <option value="">Selecione...</option>
            <option>Transportes Rápido</option>
            <option>Logística Express</option>
          </select>
        </Field>
        <Field label="Vendedor Área" required>
          <select className={selectClass}>
            <option>SAO PAULO - OESTE</option>
            <option>SAO PAULO - LESTE</option>
            <option>SUL</option>
          </select>
        </Field>
        <Field label="Vendedor" required>
          <select className={selectClass}>
            <option>Paulo Roberto Ribeiro</option>
            <option>Ana Carolina do Prado</option>
            <option>Douglas Fabio</option>
          </select>
        </Field>
        <Field label="Vendedor 2">
          <select className={selectClass}>
            <option value="">Selecione...</option>
            <option>Paulo Roberto Ribeiro</option>
            <option>Ana Carolina do Prado</option>
          </select>
        </Field>
      </FieldGroup>
    </>
  );
}

/* ─── Tab: Dados Financeiros ─── */
function TabFinanceiros() {
  return (
    <>
      <FieldGroup title="Dados Bancários">
        <Field label="Banco">
          <select className={selectClass}>
            <option>Banco do Brasil</option>
            <option>Itaú</option>
            <option>Bradesco</option>
            <option>Santander</option>
            <option>Caixa Econômica</option>
          </select>
        </Field>
        <Field label="Agência">
          <input className={inputClass} placeholder="0000-0" />
        </Field>
        <Field label="Conta Corrente">
          <input className={inputClass} placeholder="00000-0" />
        </Field>
        <Field label="PIX">
          <input className={inputClass} placeholder="Chave PIX" />
        </Field>
      </FieldGroup>
      <FieldGroup title="Limites e Crédito">
        <Field label="Limite de Crédito">
          <input className={inputClass} placeholder="R$ 0,00" />
        </Field>
        <Field label="Saldo Devedor">
          <input className={inputClass} placeholder="R$ 0,00" readOnly />
        </Field>
        <Field label="Classificação de Risco">
          <select className={selectClass}>
            <option>A - Excelente</option>
            <option>B - Bom</option>
            <option>C - Regular</option>
            <option>D - Ruim</option>
          </select>
        </Field>
        <Field label="Prazo Médio (dias)">
          <input type="number" className={inputClass} placeholder="30" />
        </Field>
      </FieldGroup>
    </>
  );
}

/* ─── Tab: Contatos ─── */
function TabContatos() {
  const contatos = [
    { nome: 'Carlos Eduardo Silva', cargo: 'Diretor Comercial', tel: '(16) 3301-2200', email: 'carlos@empresa.com.br' },
    { nome: 'Maria Fernanda Costa', cargo: 'Compras', tel: '(16) 3301-2201', email: 'maria@empresa.com.br' },
  ];

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-display font-bold text-foreground">Contatos Cadastrados</h3>
        <button className="px-4 py-2 rounded-xl bg-surface-container-low text-foreground text-sm font-medium hover:bg-surface-container transition-colors">
          + Adicionar Contato
        </button>
      </div>
      <div className="space-y-3">
        {contatos.map((c, i) => (
          <div key={i} className="bg-surface-container-low rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
              {c.nome.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-foreground text-sm">{c.nome}</p>
              <p className="text-xs text-muted-foreground">{c.cargo}</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Phone size={12} /> {c.tel}
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Mail size={12} /> {c.email}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ─── Tab: Cobrança ─── */
function TabCobranca() {
  return (
    <FieldGroup title="Dados de Cobrança">
      <Field label="Endereço de Cobrança" span={2}>
        <input className={inputClass} placeholder="Endereço completo" />
      </Field>
      <Field label="CEP">
        <input className={inputClass} placeholder="00000-000" />
      </Field>
      <Field label="Cidade">
        <input className={inputClass} placeholder="Cidade" />
      </Field>
      <Field label="Estado">
        <select className={selectClass}>
          <option>SÃO PAULO</option>
          <option>RIO DE JANEIRO</option>
          <option>MINAS GERAIS</option>
        </select>
      </Field>
      <Field label="Contato Cobrança">
        <input className={inputClass} placeholder="Nome do contato" />
      </Field>
      <Field label="Telefone">
        <input className={inputClass} placeholder="(00) 0000-0000" />
      </Field>
      <Field label="E-mail Cobrança">
        <input type="email" className={inputClass} placeholder="cobranca@empresa.com.br" />
      </Field>
    </FieldGroup>
  );
}

/* ─── Tab: Embarque ─── */
function TabEmbarque() {
  return (
    <FieldGroup title="Dados de Embarque">
      <Field label="Endereço de Entrega" span={2}>
        <input className={inputClass} placeholder="Endereço completo" />
      </Field>
      <Field label="CEP">
        <input className={inputClass} placeholder="00000-000" />
      </Field>
      <Field label="Cidade">
        <input className={inputClass} placeholder="Cidade" />
      </Field>
      <Field label="Estado">
        <select className={selectClass}>
          <option>SÃO PAULO</option>
          <option>RIO DE JANEIRO</option>
          <option>MINAS GERAIS</option>
        </select>
      </Field>
      <Field label="Transportadora Padrão">
        <select className={selectClass}>
          <option value="">Selecione...</option>
          <option>Transportes Rápido</option>
          <option>Logística Express</option>
        </select>
      </Field>
      <Field label="Tipo de Frete">
        <select className={selectClass}>
          <option>CIF</option>
          <option>FOB</option>
        </select>
      </Field>
      <Field label="Horário de Recebimento">
        <input className={inputClass} placeholder="08:00 às 17:00" />
      </Field>
      <Field label="Observações de Entrega" span={3}>
        <textarea className={`${inputClass} min-h-[80px] resize-y`} placeholder="Instruções especiais de entrega..." />
      </Field>
    </FieldGroup>
  );
}

/* ─── Tab: Observação ─── */
function TabObservacao() {
  return (
    <FieldGroup title="Observações Gerais">
      <Field label="Observações internas" span={3}>
        <textarea className={`${inputClass} min-h-[200px] resize-y`} placeholder="Observações sobre o cliente..." />
      </Field>
      <Field label="Observações para Nota Fiscal" span={3}>
        <textarea className={`${inputClass} min-h-[100px] resize-y`} placeholder="Texto que será impresso na NF..." />
      </Field>
    </FieldGroup>
  );
}
