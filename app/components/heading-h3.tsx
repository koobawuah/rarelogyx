import type { ClassValue } from "clsx";
import { cn } from "~/libs/utils";

export default function HeadingH3({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: ClassValue | string;
}) {
  return (
    <h3
      className={cn(
        "my-0 text-2xl text-aswhite text-center font-normal leading-6 tracking-[-0.96px] shrink",
        className
      )}
    >
      {children}
    </h3>
  );
}
