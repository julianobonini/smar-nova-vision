import { ReactNode } from 'react';
import { MoreHorizontal, ArrowRight } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface ActivityItem {
  id?: string | number;
  text: string;
  time: string;
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
}

export interface ActivityCardProps {
  title: string;
  description?: string;
  items: ActivityItem[];
  showMenu?: boolean;
  onMenuClick?: () => void;
  footerLabel?: string;
  onFooterClick?: () => void;
  className?: string;
  emptyState?: ReactNode;
}

export function ActivityCard({
  title,
  description,
  items,
  showMenu = true,
  onMenuClick,
  footerLabel = 'Ver todas',
  onFooterClick,
  className,
  emptyState,
}: ActivityCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-base">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        {showMenu && (
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onMenuClick}>
            <MoreHorizontal size={16} />
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-3">
        {items.length === 0
          ? emptyState ?? (
              <p className="text-sm text-muted-foreground text-center py-4">Nenhuma atividade.</p>
            )
          : items.map((item, i) => (
              <div
                key={item.id ?? i}
                className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
              >
                <div>
                  <p className="text-sm text-foreground">{item.text}</p>
                  <p className="text-xs text-muted-foreground">{item.time} atrás</p>
                </div>
                {item.badge && (
                  <Badge variant={item.badgeVariant ?? 'secondary'} className={cn('text-[10px]')}>
                    {item.badge}
                  </Badge>
                )}
              </div>
            ))}
      </CardContent>
      {onFooterClick && (
        <CardFooter>
          <Button variant="ghost" size="sm" className="w-full text-xs" onClick={onFooterClick}>
            {footerLabel} <ArrowRight size={12} />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
