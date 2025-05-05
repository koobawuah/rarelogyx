import type { ClassValue } from "clsx";
import { cn } from "~/libs/utils";

export function TextBlock({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: ClassValue;
}) {
  return (
    <div
      className={cn(
        "size-auto bg-bg-primary block p-6 pl-0 md:pl-6 col-span-1",
        className
      )}
    >
      <div className="w-full max-w-65 h-auto flex flex-col justify-start items-stretch gap-2">
        <span className="size-auto block text-[#f2f2f2] text-base text-left leading-5 font-medium uppercase ">
          {title}
        </span>
        <p className="size-auto mb-0 text-[#f2f2f2]/70 text-sm text-left leading-4 font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
