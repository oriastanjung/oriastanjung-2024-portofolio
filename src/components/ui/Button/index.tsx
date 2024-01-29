import { ReactNode } from "react";

type ButtonProps = {
  handleClick?: void | any;
  children: ReactNode;
  showIcon?: boolean;
  className?: string;
  icon?: ReactNode | any;
};

export default function Button({
  className,
  children,
  handleClick,
  showIcon,
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`group relative flex w-fit text-base text-slate-800 no-underline items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 px-4 py-2 font-bold transition-transform ease-out hover:scale-105 ${className}`}
    >
      <span className="absolute inset-0 z-0 h-full translate-y-9 bg-purple-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
      <span className="relative  flex items-center justify-center gap-2">
        {children} {showIcon && icon}
      </span>
    </button>
  );
}
