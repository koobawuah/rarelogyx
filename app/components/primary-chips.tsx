import { cn } from "~/libs/utils";

export default function PrimaryChips({
  text,
  variant,
  animate = true,
}: {
  text: string;
  variant?: "default" | "white";
  animate?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-max flex items-center gap-x-1.5 py-[6px] px-[10px] border border-primary rounded-full ",
        variant === "white" ? "border-white/10" : ""
      )}
    >
      <span
        className={cn(
          "size-[3px] bg-primary rounded-full",
          variant === "white" ? "bg-white" : "",
          animate ? "animate-pulse-2x" : ""
        )}
      />
      <p
        className={cn(
          "text-primary font-medium uppercase text-xs leading-3.5 tracking-wide",
          variant === "white" ? "text-white" : ""
        )}
      >
        {text}
      </p>
    </div>
  );
}
