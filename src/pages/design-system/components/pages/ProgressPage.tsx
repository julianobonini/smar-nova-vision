import { Progress } from '@/components/ui/progress';
import { Demo } from './Demo';

export default function ProgressPage() {
  return (
    <Demo title="Progress">
      <div className="space-y-4 max-w-lg">
        {[20, 45, 68, 92].map((v) => (
          <div key={v}>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold">Progresso</span>
              <span className="text-muted-foreground">{v}%</span>
            </div>
            <Progress value={v} />
          </div>
        ))}
      </div>
    </Demo>
  );
}
