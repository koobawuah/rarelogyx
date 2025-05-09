import type { ClassValue } from "clsx";
import { Link } from "react-router";
import { cn } from "~/libs/utils";

export default function IconBlock({
  icon,
  name,
  description,
  className,
  headingClassName,
  textClassName,
  variation,
  bgColor,
}: {
  icon?: React.ReactNode;
  name: string;
  description: string;
  className?: ClassValue | string;
  headingClassName?: ClassValue | string;
  textClassName?: ClassValue | string;
  variation?: "default" | "withIcon";
  bgColor?: string;
}) {
  return (
    <span
      className={cn(
        "w-auto group h-auto bg-aswhite flex flex-col justify-start items-stretch gap-x-1.5 py-7 px-6 grow rounded-lg select-none gap-12 shrink",
        className,
        icon ? "gap-10" : "lg:gap-20"
      )}
      style={{ backgroundColor: bgColor }}
    >
      {icon && icon}
      <div
        className={cn(
          variation === "withIcon"
            ? "w-full max-w-56 flex flex-col gap-2"
            : null
        )}
      >
        <div className="flex items-center gap-2">
          <p
            className={cn(
              "text-primary font-medium uppercase text-sm ",
              headingClassName
              // icon ? "translate-x-0" : ""
            )}
          >
            {name}
          </p>
        </div>
        <p
          className={cn(
            "text-sm leading-4 text-primary/70 font-normal",
            textClassName
          )}
        >
          {description}
        </p>
      </div>
    </span>
  );
}
