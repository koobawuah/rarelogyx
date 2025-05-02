import type { ClassValue } from "clsx";
import { cn } from "~/libs/utils";

export default function FormInput({
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
    <div
      className={cn(
        "flex flex-col justify-start items-stretch gap-2 grow",
        className
      )}
    >
      {/* <label htmlFor={name} className="text-xs text-bg-primary/70 uppercase">{label}</label> */}
      <label
        htmlFor={name}
        className="text-xs text-bg-primary/70 font-medium text-left uppercase"
      >
        {label}
      </label>
      <input
        name={name}
        id={name}
        placeholder={placeholder}
        className={cn(
          "w-auto h-14 lg:h-15 mb-0 py-5 px-6 block text-primary bg-bg-primary/7 hover:bg-bg-primary/10 focus:bg-bg-primary/10 rounded-lg border border-bg-primary/0 text-base placeholder:text-bg-primary/50 placeholder:font-normal overflow-clip focus:border-bg-primary/7 focus:outline-none transition-all duration-250"
        )}
      />
    </div>
  );
}
