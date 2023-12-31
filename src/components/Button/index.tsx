import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

export function Button({
  children,
  className,
  ...buttonProps
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return (
    <button
      {...buttonProps}
      className={twMerge(
        "py-1 px-4 bg-violet-900  rounded-md text-white hover:bg-violet-800 disabled:bg-slate-300",
        className
      )}
    >
      {children}
    </button>
  );
}
