import { useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { FormsShowcaseLayout, ShowcaseSection } from './FormsShowcaseLayout';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { format, startOfWeek, endOfWeek, getISOWeek, getISOWeekYear } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import type { DateRange } from 'react-day-picker';

function getISOWeekString(date: Date) {
  return `${getISOWeekYear(date)}/${getISOWeek(date).toString().padStart(2, '0')}`;
}

export default function DateTimePickerShowcase() {
  const [singleDate, setSingleDate] = useState<Date | undefined>();
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [weekDate, setWeekDate] = useState<Date | undefined>();

  const weekStart = weekDate ? startOfWeek(weekDate, { weekStartsOn: 1 }) : undefined;
  const weekEnd = weekDate ? endOfWeek(weekDate, { weekStartsOn: 1 }) : undefined;

  return (
    <FormsShowcaseLayout title="Date, Time Picker" subtitle="Form Elements" description="Seletores de data, hora, intervalos e semanas ISO.">
      <ShowcaseSection title="Data Simples">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Data de Emissão</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !singleDate && "text-muted-foreground")}>
                  <CalendarIcon size={16} className="mr-2" />
                  {singleDate ? format(singleDate, "dd/MM/yyyy", { locale: ptBR }) : "Selecione uma data"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={singleDate} onSelect={setSingleDate} locale={ptBR} className="p-3 pointer-events-auto" />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Data (Input nativo)</Label>
            <Input type="date" className="text-sm" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Hora</Label>
            <div className="relative">
              <Clock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input type="time" className="pl-9 text-sm" />
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Intervalo de Datas (Range)">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Período</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !dateRange?.from && "text-muted-foreground")}>
                  <CalendarIcon size={16} className="mr-2" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      `${format(dateRange.from, "dd/MM/yyyy")} — ${format(dateRange.to, "dd/MM/yyyy")}`
                    ) : format(dateRange.from, "dd/MM/yyyy")
                  ) : "Selecione o período"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="range" selected={dateRange} onSelect={setDateRange} locale={ptBR} numberOfMonths={2} className="p-3 pointer-events-auto" />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Dias selecionados</Label>
            <div className="h-10 flex items-center px-3 rounded-lg bg-muted/30 border border-border text-sm text-foreground">
              {dateRange?.from && dateRange?.to
                ? `${Math.ceil((dateRange.to.getTime() - dateRange.from.getTime()) / (1000 * 60 * 60 * 24))} dias`
                : '—'}
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Semana ISO (YYYY/WW)">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Selecionar Semana</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !weekDate && "text-muted-foreground")}>
                  <CalendarIcon size={16} className="mr-2" />
                  {weekDate ? `Semana ${getISOWeekString(weekDate)}` : "Selecione a semana"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={weekDate}
                  onSelect={setWeekDate}
                  locale={ptBR}
                  className="p-3 pointer-events-auto"
                  modifiers={{
                    selectedWeek: weekDate
                      ? { from: startOfWeek(weekDate, { weekStartsOn: 1 }), to: endOfWeek(weekDate, { weekStartsOn: 1 }) }
                      : undefined as any,
                  }}
                  modifiersClassNames={{
                    selectedWeek: 'bg-secondary/15 text-secondary rounded-none',
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Intervalo da Semana</Label>
            <div className="h-10 flex items-center px-3 rounded-lg bg-muted/30 border border-border text-sm text-foreground">
              {weekStart && weekEnd ? `${format(weekStart, "dd/MM")} a ${format(weekEnd, "dd/MM/yyyy")}` : '—'}
            </div>
          </div>
          <div>
            <Label className="text-xs mb-1.5">Ano ISO / Semana</Label>
            <div className="h-10 flex items-center gap-2 px-3 rounded-lg bg-secondary/10 border border-secondary/20 text-sm font-mono font-bold text-secondary">
              {weekDate ? getISOWeekString(weekDate) : '—'}
            </div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Data e Hora Combinados">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs mb-1.5">Data e Hora (nativo)</Label>
            <Input type="datetime-local" className="text-sm" />
          </div>
          <div>
            <Label className="text-xs mb-1.5">Mês</Label>
            <Input type="month" className="text-sm" />
          </div>
        </div>
      </ShowcaseSection>
    </FormsShowcaseLayout>
  );
}
