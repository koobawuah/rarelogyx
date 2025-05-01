import type { ClassValue } from "clsx";
import { cn } from "~/libs/utils";

export default function HeadingH2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue | string;
}) {
  return (
    <h2
      className={cn(
        "text-[28px] leading-[30px] tracking-[-1.76px] text-center text-white text-clip lg:text-[44px] lg:leading-[46px]",
        className
      )}
    >
      {children}
    </h2>
  );
}
