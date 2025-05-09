import { Link } from "react-router";
import { cn } from "~/libs/utils";

export default function BigButton({
  icon,
  name,
  to,
  description,
  variation,
  bgColor,
}: {
  icon?: React.ReactNode;
  name: string;
  to?: string;
  description: string;
  variation?: "default" | "withIcon";
  bgColor?: string;
}) {
  return (
    <Link
      to={to ?? ""}
      className={cn(
        "w-auto group h-auto bg-primary hover:opacity-85 flex flex-col justify-start items-stretch gap-x-1.5 py-7 px-6 grow rounded-lg select-none gap-12 transition-all duration-300 shrink",
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
          <span
            className={cn(
              "h-1.5 bg-white w-0 -translate-x-1.5 group-hover:w-1.5 group-hover:translate-x-0 transition-all ease-in-out"
              // icon ? "size-1.5 translate-x-0 opacity-100" : ""
            )}
          />
          <p
            className={cn(
              "text-white font-medium uppercase text-sm -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all"
              // icon ? "translate-x-0" : ""
            )}
          >
            {name}
          </p>
        </div>
        {variation === "withIcon" ? (
          <p className="text-sm leading-4 text-white/70 font-normal">
            {description}
          </p>
        ) : null}
      </div>
      {variation === "default" ? (
        <p className="text-sm leading-4 text-[#f2f2f2] font-normal max-w-52">
          {description}
        </p>
      ) : null}
    </Link>
  );
}
