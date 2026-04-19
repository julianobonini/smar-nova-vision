import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Demo } from './Demo';

export default function AvatarsPage() {
  return (
    <>
      <Demo title="Avatares com imagem">
        <div className="flex items-center gap-3">
          <Avatar><AvatarImage src="https://i.pravatar.cc/100?img=1" /><AvatarFallback>MS</AvatarFallback></Avatar>
          <Avatar><AvatarImage src="https://i.pravatar.cc/100?img=5" /><AvatarFallback>JP</AvatarFallback></Avatar>
          <Avatar><AvatarImage src="https://i.pravatar.cc/100?img=12" /><AvatarFallback>AL</AvatarFallback></Avatar>
        </div>
      </Demo>

      <Demo title="Fallback (iniciais)">
        <div className="flex items-center gap-3">
          <Avatar><AvatarFallback>NS</AvatarFallback></Avatar>
          <Avatar className="bg-primary"><AvatarFallback className="bg-primary text-primary-foreground">JP</AvatarFallback></Avatar>
          <Avatar className="bg-accent"><AvatarFallback className="bg-accent text-accent-foreground">+5</AvatarFallback></Avatar>
        </div>
      </Demo>
    </>
  );
}
