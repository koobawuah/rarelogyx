import type { ClassValue } from "clsx";
import { cn } from "~/libs/utils";

export default function FormInputSelect({
  name,
  label,
  options,
  required,
  className,
}: {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  required?: boolean;
  className?: ClassValue | string;
}) {
  return (
    <div className={cn("flex flex-col justify-start items-stretch gap-2 grow")}>
      <label
        htmlFor={name}
        className="text-xs text-bg-primary/70 font-medium text-left uppercase"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue="general"
        className={cn(
          "w-auto h-14 lg:h-15 mb-0 px-6 block bg-[url('https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f8396891b9193c487e23ae_Chevron%20Down.svg')] bg-no-repeat bg-size-[16px] bg-position-[left_96%_center] bg-bg-primary/7 hover:bg-bg-primary/10 focus:bg-bg-primary/10 rounded-lg border border-bg-primary/0 text-base text-primary overflow-clip focus:border-bg-primary/7 focus:outline-none transition-all duration-250 appearance-none shrink"
        )}
      >
        <option value="general">General Inquiry</option>
        {options.length > 0
          ? options.map((item, idx) => (
              <option key={idx} value={item.value}>
                {item.label}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}
