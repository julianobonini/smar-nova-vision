import { PagesLayout, PageSection } from './PagesLayout';
import { Mail, Phone, MapPin, Star, MoreVertical, Plus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const contacts = [
  { name: 'Ana Paula Ribeiro', role: 'Gerente Comercial', email: 'ana.ribeiro@smarnet.com', phone: '+55 11 98765-4321', city: 'São Paulo, SP', starred: true },
  { name: 'Carlos Mendes', role: 'Diretor de Operações', email: 'carlos@gerdau.com', phone: '+55 21 91234-5678', city: 'Rio de Janeiro, RJ', starred: true },
  { name: 'Marina Costa', role: 'CFO', email: 'marina.costa@petrobras.com', phone: '+55 11 99876-5432', city: 'Sertãozinho, SP', starred: false },
  { name: 'Roberto Silva', role: 'Engenheiro de Produção', email: 'roberto@vale.com', phone: '+55 31 98123-4567', city: 'Belo Horizonte, MG', starred: false },
  { name: 'Juliana Almeida', role: 'Compradora', email: 'juliana@weg.com', phone: '+55 47 99234-1234', city: 'Curitiba, PR', starred: false },
  { name: 'Pedro Santos', role: 'Diretor Industrial', email: 'pedro@mouradubeux.com', phone: '+55 81 98765-1234', city: 'Recife, PE', starred: true },
];

export default function ContactsShowcase() {
  return (
    <PagesLayout title="Contatos" description="Sua agenda corporativa centralizada." category="Páginas">
      <PageSection>
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between mb-5">
          <div className="relative flex-1 max-w-md">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Buscar contato..." className="pl-9 h-9 text-sm" />
          </div>
          <button className="flex items-center gap-2 px-4 h-9 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90">
            <Plus size={15} /> Novo contato
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((c) => (
            <div key={c.name} className="bg-surface-container-low rounded-xl p-5 hover:bg-surface-container-low/70 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-bold">
                  {c.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                </div>
                <div className="flex items-center gap-1">
                  <button className={c.starred ? 'text-amber-400' : 'text-muted-foreground hover:text-amber-400'}>
                    <Star size={15} fill={c.starred ? 'currentColor' : 'none'} />
                  </button>
                  <button className="p-1 text-muted-foreground hover:text-foreground"><MoreVertical size={15} /></button>
                </div>
              </div>
              <p className="font-semibold text-foreground">{c.name}</p>
              <p className="text-xs text-muted-foreground mb-3">{c.role}</p>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <p className="flex items-center gap-2"><Mail size={12} /> {c.email}</p>
                <p className="flex items-center gap-2"><Phone size={12} /> {c.phone}</p>
                <p className="flex items-center gap-2"><MapPin size={12} /> {c.city}</p>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </PagesLayout>
  );
}
