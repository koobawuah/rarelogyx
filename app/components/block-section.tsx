import type { ClassValue } from "clsx";
import type { ReactNode } from "react";
import { cn } from "~/libs/utils";

export default function BlockSection({
  className,
  containerContent,
  children,
}: {
  className?: ClassValue;
  containerContent?: ClassValue;
  children?: ReactNode;
}) {
  return (
    <section className={cn("size-auto block pb-1 ", className)}>
      <div
        className={cn(
          "w-full max-w-none lg:max-w-482 mx-auto px-1 block",
          containerContent
        )}
      >
        {children}
      </div>
    </section>
  );
}
