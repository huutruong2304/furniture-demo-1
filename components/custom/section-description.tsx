import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const SectionDescription = ({ children, className }: Props) => {
  return (
    <h2
      className={cn(
        'text-base text-center text-muted-foreground w-4/5 md:w-1/2 mx-auto',
        className
      )}
    >
      {children}
    </h2>
  );
};

export default SectionDescription;
