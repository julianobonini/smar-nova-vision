import { ScrollArea } from '@/components/ui/scroll-area';
import { Demo } from './Demo';

export default function ScrollAreaPage() {
  return (
    <Demo title="Scroll Area" description="Container com scrollbar estilizada e consistente entre browsers.">
      <ScrollArea className="h-60 w-full max-w-md rounded-xl border border-border/30 p-4">
        <div className="space-y-2 text-sm">
          {Array.from({ length: 30 }).map((_, i) => (
            <p key={i} className="border-b border-border/20 pb-1">Item rolável #{i + 1}</p>
          ))}
        </div>
      </ScrollArea>
    </Demo>
  );
}
