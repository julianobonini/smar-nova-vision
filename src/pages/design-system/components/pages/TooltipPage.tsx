import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Demo } from './Demo';

export default function TooltipPage() {
  return (
    <Demo title="Tooltip">
      <TooltipProvider>
        <div className="flex gap-3">
          {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
            <Tooltip key={side}>
              <TooltipTrigger asChild><Button variant="outline">{side}</Button></TooltipTrigger>
              <TooltipContent side={side}>Tooltip {side}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </Demo>
  );
}
