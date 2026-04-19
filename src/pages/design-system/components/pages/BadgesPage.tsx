import { Badge } from '@/components/ui/badge';
import { Demo } from './Demo';

export default function BadgesPage() {
  return (
    <>
      <Demo title="Variantes base">
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </Demo>

      <Demo title="Status semânticos">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-success text-success-foreground hover:bg-success/90">Success</Badge>
          <Badge className="bg-warning text-warning-foreground hover:bg-warning/90">Warning</Badge>
          <Badge className="bg-alert text-alert-foreground hover:bg-alert/90">Alert</Badge>
          <Badge className="bg-info text-info-foreground hover:bg-info/90">Info</Badge>
        </div>
      </Demo>
    </>
  );
}
