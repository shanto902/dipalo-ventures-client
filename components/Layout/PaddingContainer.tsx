import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const PaddingContainer = ({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge('max-w-7xl px-8 w-full mx-auto', className)}>
      {children}
    </div>
  );
};

export default PaddingContainer;
