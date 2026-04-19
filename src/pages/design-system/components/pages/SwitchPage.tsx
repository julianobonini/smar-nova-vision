import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Demo } from './Demo';

export default function SwitchPage() {
  return (
    <Demo title="Switch (toggle on/off)">
      <div className="space-y-3">
        <div className="flex items-center gap-3"><Switch id="s1" defaultChecked /><Label htmlFor="s1">Notificações por e-mail</Label></div>
        <div className="flex items-center gap-3"><Switch id="s2" /><Label htmlFor="s2">Modo escuro</Label></div>
        <div className="flex items-center gap-3"><Switch id="s3" disabled /><Label htmlFor="s3" className="opacity-50">Desabilitado</Label></div>
      </div>
    </Demo>
  );
}
