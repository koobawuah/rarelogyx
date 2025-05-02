import type { ClassValue } from "clsx";
import { cn } from "~/libs/utils";

export default function BlurBlock({
  icon,
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  icon: string;
  className?: ClassValue | string;
}) {
  return (
    <div
      className={cn(
        "size-auto px-6 py-7 bg-[#f2f2f2]/10 rounded-lg border border-[#f2f2f2]/10 backdrop-blur-xl flex flex-col justify-start items-center gap-6",
        className
      )}
    >
      <img
        src={icon ?? ""}
        alt="Rarelogyx About Icons Block"
        className="size-6 max-w-full inline-block justify-baseline"
      />
      <div className="w-full max-w-65 flex flex-col justify-start items-stretch gap-2">
        <b className="text-base text-[#f2f2f2] leading-5 text-center font-medium uppercase">
          {title}
        </b>
        <p className="text-sm text-[#f2f2f2] text-center leading-4 size-auto mb-0">
          {description}
        </p>
      </div>
    </div>
  );
}
