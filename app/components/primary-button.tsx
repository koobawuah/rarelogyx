import { Link, useNavigate } from "react-router";
import { cn } from "~/libs/utils";

export default function PrimaryButton({
  to,
  text,
  variant,
  onClick,
}: {
  to?: string;
  text: string;
  variant?: "default" | "white" | "transparent";
  onClick?: () => void;
}) {
  const naviagate = useNavigate();

  return (
    <Link
      to={typeof to === "string" ? to : ""}
      onClick={onClick && onClick}
      className={cn(
        "size-auto min-w-0 min-h-0 rounded-full px-[18px] py-3 bg-primary border border-primary hover:bg-transparent group duration-400 shrink cursor-pointer",
        variant === "white" ? "bg-white border-white" : "",
        variant === "transparent" ? "bg-transparent border-none" : ""
      )}
    >
      <div className="relative flex flex-col jutsify-start items-center">
        <p
          className={cn(
            "text-center text-xs leading-3.5 text-[#f2f2f2] font-normal uppercase rotate-x-0 group-hover:rotate-x-90 transition-all origin-top transform-3d duration-400",
            variant === "white" ? "text-bg-primary" : "",
            variant === "transparent" ? "text-primary font-medium" : ""
          )}
        >
          {text}
        </p>
        <p
          className={cn(
            "text-center text-xs leading-[120%] text-primary font-normal uppercase -rotate-x-90 group-hover:rotate-x-0 transition-all origin-bottom transform-3d duration-400 absolute inset-auto bottom-0",
            variant === "white" ? "text-white" : "",
            variant === "transparent" ? "text-primary/75 font-medium" : ""
          )}
        >
          {text}
        </p>
      </div>
    </Link>
  );
}
