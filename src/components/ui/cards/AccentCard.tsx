import { ReactNode } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

export type AccentColor = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'destructive';

const accentMap: Record<AccentColor, string> = {
  primary: 'border-l-primary',
  secondary: 'border-l-secondary',
  tertiary: 'border-l-tertiary',
  success: 'border-l-status-success',
  warning: 'border-l-status-warning',
  destructive: 'border-l-destructive',
};

export interface AccentCardProps {
  title: string;
  description?: string;
  accent?: AccentColor;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function AccentCard({
  title,
  description,
  accent = 'secondary',
  children,
  footer,
  className,
}: AccentCardProps) {
  return (
    <Card className={cn('border-l-4', accentMap[accent], className)}>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
