import type { ClassValue } from "clsx";
import { Link } from "react-router";
import { cn } from "~/libs/utils";

export default function MenuItem({
  to,
  text,
  base,
  txtLink,
  className,
}: {
  to: string;
  text: string;
  base?: boolean;
  txtLink?: boolean;
  className?: ClassValue;
}) {
  return (
    <li
      className={cn(
        "flex flex-row justify-start items-center gap-2 p-0.5 group",
        base ? "transition-all duration-200 hover:opacity-70" : "",
        className
      )}
    >
      <span
        className={cn(
          !base
            ? "size-0 bg-primary -translate-x-1.5 group-hover:size-1.5 group-hover:translate-x-0 transition-all ease-in-out"
            : "size-1.5 bg-primary my-[7px]"
        )}
      />
      <Link
        to={to}
        className={cn(
          !base
            ? "text-xl font-normal capitalize leading-none text-primary lg:text-sm lg:font-medium lg:uppercase -translate-x-2.5 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all"
            : "max-w-60 font-medium leading-none lg:text-sm text-primary lg:uppercase lg:max-w-48 lg:font-medium"
        )}
      >
        {text}
      </Link>
    </li>
  );
}
