import HeadingH3 from "./heading-h3";

export function ServiceCard({
  icon,
  heading,
  description,
  image,
}: {
  icon: React.ReactNode | string;
  heading: string;
  description: string;
  image: string;
}) {
  return (
    <div className="w-auto h-120 lg:h-140 px-6 py-12 lg:py-16 bg-transparent rounded-lg border border-aswhite/20 outline-none lg:opacity-100 flex flex-col items-stretch overflow-hidden relative select-none">
      {/* Card Content */}
      <div className="size-auto flex flex-col justify-between items-center gap-6 grow relative z-2 select-none">
        {icon && typeof icon === "string" ? (
          <img
            src={icon}
            alt={`${heading} icon`}
            className="size-7 lg:size-8 max-w-full inline-block shrink overflow-clip bg-no-repeat"
          />
        ) : (
          icon
        )}
        <div className="w-full max-w-90 h-auto flex flex-col items-stretch gap-3 shrink">
          <HeadingH3>{heading}</HeadingH3>
          <p className="size-auto mb-0 text-base text-aswhite text-clip text-center font-normal leading-[120%]">
            {description}
          </p>
        </div>
      </div>

      {/* Card Background */}
      <div className="size-full block absolute inset-0 z-1 shrink">
        <div className="size-full block absolute inset-0 z-2 bg-gradient-to-t from-bg-primary/50 to-bg-primary/0%"></div>
        <img
          src={image}
          alt={`${heading} ${image} image`}
          className="size-full max-w-full inline-block object-cover overflow-clip absolute inset-0 z-1 blur-lg"
        />
      </div>
    </div>
  );
}
