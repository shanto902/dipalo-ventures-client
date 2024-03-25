import React, { ReactNode } from "react";

const PaddingContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={` max-w-7xl px-8 w-full mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default PaddingContainer;
