import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Espaçamento entre os botões. Default: 'md' */
  spacing?: 'sm' | 'md' | 'lg';
  /** Orientação. Default: 'horizontal' */
  orientation?: 'horizontal' | 'vertical';
  /** Permite quebra de linha (apenas horizontal). Default: true */
  wrap?: boolean;
}

const spacingMap = {
  sm: 'gap-1.5',
  md: 'gap-2',
  lg: 'gap-3',
};

/**
 * Agrupa múltiplos <Button /> ou <ActionButton /> com espaçamento consistente.
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ spacing = 'md', orientation = 'horizontal', wrap = true, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col items-stretch',
          orientation === 'horizontal' && wrap && 'flex-wrap',
          spacingMap[spacing],
          className,
        )}
        {...props}
      />
    );
  },
);
ButtonGroup.displayName = 'ButtonGroup';
