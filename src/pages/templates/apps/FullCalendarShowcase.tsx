import { useState } from 'react';
import { AppsLayout, ShowcaseSection } from './AppsLayout';
import { ChevronLeft, ChevronRight, Plus, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DAYS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const MONTHS = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const events = [
  { day: 5, title: 'Reunião de Sprint', color: 'bg-primary', time: '09:00' },
  { day: 5, title: 'Design Review', color: 'bg-secondary', time: '14:00' },
  { day: 12, title: 'Deploy v2.5', color: 'bg-destructive', time: '10:00' },
  { day: 15, title: 'Workshop UX', color: 'bg-accent', time: '13:00' },
  { day: 18, title: 'Planejamento Q3', color: 'bg-primary', time: '09:30' },
  { day: 22, title: 'Demo para cliente', color: 'bg-secondary', time: '15:00' },
  { day: 25, title: 'Retrospectiva', color: 'bg-primary', time: '16:00' },
  { day: 28, title: 'Code Freeze', color: 'bg-destructive', time: '08:00' },
];

export default function FullCalendarShowcase() {
  const [currentMonth, setCurrentMonth] = useState(3); // April
  const [currentYear] = useState(2026);
  const [view, setView] = useState<'month' | 'week' | 'list'>('month');

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <AppsLayout title="Full Calendar" description="Componente de calendário interativo com eventos, múltiplas visualizações e navegação.">
      <ShowcaseSection title="Calendário Completo">
        <div className="space-y-4">
          {/* Toolbar */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => setCurrentMonth(m => m > 0 ? m - 1 : 11)}>
                <ChevronLeft size={16} />
              </Button>
              <h2 className="text-lg font-bold text-foreground min-w-[180px] text-center">
                {MONTHS[currentMonth]} {currentYear}
              </h2>
              <Button variant="outline" size="icon" onClick={() => setCurrentMonth(m => m < 11 ? m + 1 : 0)}>
                <ChevronRight size={16} />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex rounded-lg border border-border overflow-hidden">
                {(['month', 'week', 'list'] as const).map(v => (
                  <button key={v} onClick={() => setView(v)}
                    className={`px-3 py-1.5 text-xs font-medium transition-colors ${view === v ? 'bg-primary text-primary-foreground' : 'bg-surface-container text-muted-foreground hover:text-foreground'}`}>
                    {v === 'month' ? 'Mês' : v === 'week' ? 'Semana' : 'Lista'}
                  </button>
                ))}
              </div>
              <Button size="sm"><Plus size={14} className="mr-1" /> Evento</Button>
            </div>
          </div>

          {view === 'month' && (
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="grid grid-cols-7 bg-muted/30">
                {DAYS.map(d => (
                  <div key={d} className="py-2 text-center text-xs font-semibold text-muted-foreground border-b border-border">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {cells.map((day, i) => {
                  const dayEvents = day ? events.filter(e => e.day === day) : [];
                  const isToday = day === 13;
                  return (
                    <div key={i} className={`min-h-[100px] border-b border-r border-border p-1.5 ${!day ? 'bg-muted/10' : 'hover:bg-muted/20 cursor-pointer'}`}>
                      {day && (
                        <>
                          <span className={`text-xs font-medium inline-flex items-center justify-center w-6 h-6 rounded-full ${isToday ? 'bg-primary text-primary-foreground' : 'text-foreground'}`}>
                            {day}
                          </span>
                          <div className="mt-1 space-y-0.5">
                            {dayEvents.map((ev, j) => (
                              <div key={j} className={`${ev.color} text-[10px] text-primary-foreground px-1.5 py-0.5 rounded truncate`}>
                                {ev.title}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {view === 'week' && (
            <div className="border border-border rounded-xl overflow-hidden">
              <div className="grid grid-cols-7 bg-muted/30">
                {DAYS.map((d, i) => (
                  <div key={d} className="py-2 text-center border-b border-border">
                    <span className="text-xs text-muted-foreground">{d}</span>
                    <span className={`block text-sm font-bold ${i + 11 === 13 ? 'text-primary' : 'text-foreground'}`}>{i + 11}</span>
                  </div>
                ))}
              </div>
              {['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'].map(time => (
                <div key={time} className="grid grid-cols-7 border-b border-border">
                  {DAYS.map((_, col) => {
                    const ev = events.find(e => e.day === col + 11 && e.time === time);
                    return (
                      <div key={col} className="h-14 border-r border-border p-1 relative">
                        {col === 0 && <span className="text-[10px] text-muted-foreground">{time}</span>}
                        {ev && (
                          <div className={`${ev.color} text-[10px] text-primary-foreground px-1.5 py-0.5 rounded absolute inset-x-1 top-1`}>
                            {ev.title}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {view === 'list' && (
            <div className="space-y-2">
              {events.sort((a, b) => a.day - b.day).map((ev, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-muted/20 hover:bg-muted/30 transition-colors">
                  <div className={`w-1 h-10 rounded-full ${ev.color}`} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{ev.title}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                      <span className="flex items-center gap-1"><Clock size={10} /> {ev.time}</span>
                      <span className="flex items-center gap-1"><MapPin size={10} /> {ev.day} {MONTHS[currentMonth]}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </ShowcaseSection>
    </AppsLayout>
  );
}
