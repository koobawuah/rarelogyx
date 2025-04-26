import { cn } from "~/libs/utils";

export default function PrimaryChips({
  text,
  variant,
}: {
  text: string;
  variant?: "default" | "white";
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
          "size-1 bg-primary rounded-full animate-pulse-2x",
          variant === "white" ? "bg-white" : ""
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
