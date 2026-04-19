import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { Demo } from './Demo';

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Demo title="Calendar" description="Componente baseado em react-day-picker.">
      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-xl border border-border/30" />
    </Demo>
  );
}
