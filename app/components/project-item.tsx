import { cn } from "~/libs/utils";
import PrimaryButton from "./primary-button";
import PrimaryChips from "./primary-chips";

export default function ProjectItem({
  title,
  description,
  location,
  typeOfWork,
  completionDate,
  tags,
  projectImage,
  reverse = false,
}: {
  title: string;
  description: string;
  location: string;
  typeOfWork: string;
  completionDate: Date | string;
  tags: string[];
  projectImage: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "w-full h-auto flex flex-col justify-start items-stretch gap-1 box-border lg:flex-row ",
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      {/* Project Info Card */}
      <div className="w-full h-auto py-8 px-6 flex flex-col justify-start items-start gap-16 shrink bg-white rounded-lg lg:justify-between lg:gap-12 lg:w-[40%] min-w-0 min-h-0 select-none">
        <div className="w-full h-auto flex flex-col justify-start items-stretch gap-10">
          {/* Project Main Info */}
          <div className="size-auto max-w-[360px] flex flex-col justify-start items-stretch gap-3">
            <h3 className="size-auto max-w-[192px] text-primary tracking-[-0.96px] leading-7 text-2xl lg:text-3xl lg:max-w-[264px]">
              {title}
            </h3>
            <p className="size-auto text-sm text-primary">{description}</p>
          </div>

          {/* Project Info Blocks */}
          <div className="size-auto flex flex-col justify-start items-stretch gap-4 ">
            <div className="size-auto flex flex-row justify-between items-center gap-6 pb-4 border-b border-b-bg-primary/10">
              <p className="text-primary/70 text-xs font-medium uppercase">
                Location:
              </p>
              <p className="text-primary text-xs font-medium uppercase">
                {location}
              </p>
            </div>
            <div className="size-auto flex flex-row justify-between items-center gap-6 pb-4 border-b border-b-bg-primary/10">
              <p className="text-primary/70 text-xs font-medium uppercase">
                Type Of Work:
              </p>
              <p className="text-primary text-xs font-medium uppercase">
                {typeOfWork}
              </p>
            </div>
            <div className="size-auto flex flex-row justify-between items-center gap-6 pb-4 border-b border-b-bg-primary/10">
              <p className="text-primary/70 text-xs font-medium uppercase">
                Completion Date:
              </p>
              <p className="text-primary text-xs font-medium uppercase">
                {completionDate as string}
              </p>
            </div>
          </div>
          <div className="size-auto flex flex-wrap justify-start items-start gap-1.5 max-w-[320px]">
            {tags && tags.length > 0 ? (
              tags.map((t, idx) => (
                <PrimaryChips key={idx} text={t} animate={false} />
              ))
            ) : (
              <b>N/A</b>
            )}
          </div>
        </div>
        <div className="size-auto flex flex-row justify-start items-center gap-3">
          <PrimaryButton
            text="Learn More"
            to={`/projects/${title.toLowerCase().replaceAll(" ", "-")}`}
          />
          {location && (
            <PrimaryButton text="View On Maps" variant="transparent" />
          )}
        </div>
      </div>

      {/* Project Image */}
      <div className="w-full h-120 overflow-hidden relative rounded-lg border border-white/20 lg:w-[60%] lg:h-170 select-none">
        <img
          src={projectImage ?? ""}
          alt={`${title} project preview image`}
          className="w-full h-[110%] inline-block max-w-full overflow-clip object-cover select-none absolute inset-0"
        />
      </div>
    </div>
  );
}
