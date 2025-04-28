import type { ReactNode } from "react";
import PrimaryChips from "./primary-chips";
import PrimaryButton from "./primary-button";

export default function NavCard({
  chipTitle,
  title,
  cta,
  link,
  bgImage,
}: {
  chipTitle: string;
  title: string | ReactNode;
  cta: string;
  link: string;
  bgImage?: string;
}) {
  return (
    <div className="w-auto h-140 block px-6 py-16 overflow-hidden lg:py-20 lg:size-auto relative rounded-lg border border-white/20">
      <div className="w-full h-auto flex flex-col justify-start items-center gap-6 relative z-10">
        <div className="w-full max-w-70 flex flex-col justify-start items-center gap-4 lg:max-w-110">
          <PrimaryChips text={chipTitle} variant="blur" />
          <h2 className="text-3xl tracking-[-1.76px] leading-11 text-center text-white text-clip lg:text-[44px]">
            {title}
          </h2>
        </div>
        <PrimaryButton to={link} text={cta} variant="white" />
      </div>
      <div className="size-full absolute inset-0 z-0">
        <div className="size-full absolute inset-0 z-10 bg-gradient-to-b from-primary/50 to-transparent"></div>
        <img
          src={bgImage ?? ""}
          alt={title as string}
          className="size-full overflow-clip max-w-full object-cover inline-block absolute inset-auto z-0"
        />
      </div>
    </div>
  );
}
