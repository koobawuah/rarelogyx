import type { ClassValue } from "clsx";
import type { ReactNode } from "react";
import { cn } from "~/libs/utils";

export function SectionBlock({
  className,
  defaultContainer,
  containerContent,
  children,
}: {
  className?: ClassValue;
  defaultContainer?: ClassValue;
  containerContent?: ClassValue;
  children?: ReactNode;
}) {
  return (
    <section className={cn("h-2/6 pt-40 relative", className)}>
      <div
        className={cn(
          "w-full h-auto max-w-none mx-auto px-6 flex flex-col justify-start items-center",
          defaultContainer
        )}
      >
        <div
          className={cn(
            "w-full h-auto max-w-[960px] flex flex-col justify-start items-center",
            containerContent
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
