import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const SectionTitle = ({ children, className }: Props) => {
  return <h2 className={cn('text-4xl font-bold text-center', className)}>{children}</h2>;
};

export default SectionTitle;
