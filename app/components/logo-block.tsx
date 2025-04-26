import type { ClassValue } from "clsx";
import { Link } from "react-router";
import { cn } from "~/libs/utils";

export default function LogoBlock({
  url,
  src,
  className,
}: {
  url?: string;
  src: string;
  className?: ClassValue;
}) {
  return (
    <Link
      to={url ?? ""}
      className="size-auto min-w-0 min-h-0 py-7 flex flex-row justify-center items-center bg-bg-primary group hover:bg-primary/70 transition-all duration-300 ease-in-out"
    >
      <img
        src={src}
        alt="Logo mark of Rarelogyx clients"
        className={cn(
          "w-auto h-8 max-w-full inline-block overflow-clip opacity-50 group-hover:opacity-100 grayscale-100 object-fill shrink-1 transition-all duration-300 ease-in-out",
          className
        )}
      />
    </Link>
  );
}
