import { Separator } from '@/components/ui/separator';
import { Demo } from './Demo';

export default function SeparatorPage() {
  return (
    <>
      <Demo title="Horizontal">
        <div>
          <h4 className="font-bold">SmarNet ERP</h4>
          <p className="text-sm text-muted-foreground">Plataforma industrial integrada.</p>
          <Separator className="my-4" />
          <div className="flex gap-3 text-sm">
            <span>Blog</span><Separator orientation="vertical" className="h-5" />
            <span>Docs</span><Separator orientation="vertical" className="h-5" />
            <span>Contato</span>
          </div>
        </div>
      </Demo>
    </>
  );
}
