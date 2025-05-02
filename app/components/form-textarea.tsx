import type { ClassValue } from "clsx";
import { cn } from "~/libs/utils";

export default function FormTextArea({
  name,
  label,
  placeholder,
  className,
}: {
  name?: string;
  label: string;
  placeholder?: string;
  className?: ClassValue | string;
}) {
  return (
    <div className={cn("flex flex-col justify-start items-stretch gap-2")}>
      <label
        htmlFor={name}
        className={cn(
          "text-xs text-bg-primary/70 font-medium text-left uppercase"
        )}
      >
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        className={cn(
          "size-auto min-h-42 py-5 px-6 text-primary bg-bg-primary/7 hover:bg-bg-primary/10 focus:bg-bg-primary/10 rounded-lg border border-bg-primary/0 text-base placeholder:text-bg-primary/50 placeholder:font-normal overflow-clip focus:border-bg-primary/7 focus:outline-none transition-all duration-250"
        )}
      ></textarea>
    </div>
  );
}
