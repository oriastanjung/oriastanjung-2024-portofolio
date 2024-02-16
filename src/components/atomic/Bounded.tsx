import clsx from "clsx";
import React, { FC, ReactNode } from "react";

interface BoundedProps {
  children: ReactNode;
  className? : string
}

const Bounded: FC<BoundedProps> = ({ children, className }) => {
  return (
    <div className={clsx("grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]",className)}>
      {children}
    </div>
  );
};

export default Bounded;
