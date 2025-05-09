import { cn } from "~/libs/utils";

export default function GridLines({ variant }: { variant?: "white" }) {
  return (
    <div className="absolute grid grid-cols-2 lg:grid-cols-4 gap-2 px-6 select-none inset-0 z-0 pointer-events-none">
      <div
        className={cn(
          "hidden border-l border-black/10 lg:block select-none",
          variant === "white" ? "border-aswhite/20" : null
        )}
      ></div>
      <div
        className={cn(
          "hidden border-l border-black/10 lg:block select-none",
          variant === "white" ? "border-aswhite/20" : null
        )}
      ></div>
      <div
        className={cn(
          "border-l border-black/10 select-none",
          variant === "white" ? "border-aswhite/20" : null
        )}
      ></div>
      <div
        className={cn(
          "border-l border-r border-black/10 lg:border-r-none select-none",
          variant === "white" ? "border-aswhite/20" : null
        )}
      ></div>
    </div>
  );
}
