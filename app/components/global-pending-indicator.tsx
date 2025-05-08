import { useNavigation } from "react-router";
import { cn } from "~/libs/utils";

export function GlobalPendingIndicator() {
  const navigation = useNavigation();
  const pending = navigation.state !== "idle";

  return (
    <div className={cn("fixed bottom-5 right-5 z-110", { hidden: !pending })}>
      <div className="size-6 bg-transparent flex justify-center items-center overflow-hidden">
        {/* <div className="animate-progress w-full h-full bg-red-800 origin-left-right" /> */}
        <img
          src="/images/loading.png"
          className="size-auto animate-spin object-contain overflow-clip"
          alt="loading spinner"
        />
      </div>
    </div>
  );
}
