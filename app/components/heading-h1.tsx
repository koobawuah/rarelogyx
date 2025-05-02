import type { ClassValue } from "clsx";
import { cn } from "~/libs/utils";

export default function HeadingH1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue | string;
}) {
  return (
    <h1
      className={cn(
        "max-w-2xl my-0 text-4xl lg:text-[64px] font-normal text-primary tracking-[-0.04em] leading-9.5 lg:leading-17 lg:tracking-[-0.04em] text-balance col-span-3",
        className
      )}
    >
      {children}
    </h1>
  );
}
