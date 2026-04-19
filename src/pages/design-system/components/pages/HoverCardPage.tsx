import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Demo } from './Demo';

export default function HoverCardPage() {
  return (
    <Demo title="Hover Card" description="Preview rico ao passar o mouse.">
      <HoverCard>
        <HoverCardTrigger className="text-primary underline cursor-pointer">@nova-smar</HoverCardTrigger>
        <HoverCardContent className="w-72">
          <div className="flex gap-3">
            <Avatar><AvatarImage src="https://i.pravatar.cc/100?img=14" /><AvatarFallback>NS</AvatarFallback></Avatar>
            <div>
              <p className="text-sm font-semibold">Nova Smar S/A</p>
              <p className="text-xs text-muted-foreground">Cliente desde 2018 · 142 pedidos</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </Demo>
  );
}
