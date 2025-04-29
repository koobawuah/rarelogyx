import type { ReactNode } from "react";
import { Link } from "react-router";
import { cn } from "~/libs/utils";

export default function LinkItem({
  to,
  label,
  children,
}: {
  to: string;
  label?: string | ReactNode;
  children?: ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "py-0.5 text-xl font-normal capitalize leading-7 text-primary hover:text-primary/70 lg:text-2xl duration-300 transition-all"
      )}
    >
      {label ? label : children}
    </Link>
  );
}
