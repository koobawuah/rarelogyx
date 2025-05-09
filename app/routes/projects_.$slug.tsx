import SectionBlock from "~/components/section-block";
import type { Route } from "../+types/root";
import PrimaryChips from "~/components/primary-chips";
import PrimaryButton from "~/components/primary-button";
import { siteConfig } from "~/site.config";
import { redirect, useLoaderData, type LoaderFunctionArgs } from "react-router";
import Header from "~/components/header/header";
import GridLines from "~/components/grid-lines";
import IconBlock from "~/components/icon-info-block";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import BlockSection from "~/components/block-section";
import Footer from "~/components/footer/footer";
import HeadingH2 from "~/components/heading-h2";
import ProjectItem from "~/components/project-item";

export function meta({ location, params }: Route.MetaArgs) {
  const check = params.slug;
  const project = siteConfig.projects.find((i) => i.slug === check);
  // console.log("Mate: ", `${capitalize(check as string)} - RARELOGYX ROJECT`);

  return [
    { title: `${project?.title} - RARELOGYX ROJECT` },
    {
      name: "description",
      content: `${project?.description}`,
    },
    {
      property: "og:title",
      content: `${project?.title} - RARELOGYX PROJECT`,
    },
    {
      property: "og:description",
      content: `${project?.description}`,
    },
    {
      property: "og:image",
      content: `https://rarelogyx.com${project?.projectImage}`,
    },
    {
      property: "og:url",
      content: `https://rarelogyx.com/projects${project?.slug}`,
    },
  ];
}

export function loader({ request, params }: LoaderFunctionArgs) {
  const param = params.slug;
  const pageData = siteConfig.projects.find((p) => p.slug === param);
  if (!param || param === "" || !pageData) redirect("/not-found");

  return { slug: param, pageData };
}

export default function ProjectPage() {
  const { slug, pageData } = useLoaderData<typeof loader>();

  return (
    <>
      <div className="size-auto lg:h-screen min-h-[720px] flex flex-col py-1 justify-start items-stretch">
        {/* Wide container */}
        <div className="w-full mx-auto px-1 max-w-none flex flex-col justify-start items-stretch grow">
          {/* Hero */}
          <div className="flex flex-col gap-1 justify-start items-stretch grow">
            {/* Hero Content Wrapper */}
            <header className="size-auto bg-[#f2f2f2] rounded-lg flex flex-col overflow-hidden justify-start items-stretch grow">
              {/* Nav */}
              <Header />

              <div className="size-auto flex items-stretch grow relative">
                {/* Hero content  */}
                <div className="size-auto relative overflow-hidden p-6 pb-10 pt-30 lg:pt-6 flex flex-col justify-end items-start gap-4 z-10 grow object-fill">
                  {/* <PrimaryChips text="Building full-scale systems" /> */}
                  <span className="flex items-center ml-1">
                    <ChevronLeftIcon className="size-3.5 text-aswhite" />
                    <PrimaryButton
                      variant="ghost"
                      to="/projects"
                      text="Back to Projects"
                    />
                  </span>
                  <div className="w-full flex flex-col justify-start items-stretch lg:items-start lg:grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-2">
                    <h1 className="max-w-2xl my-0 text-4xl lg:text-[64px] font-normal text-aswhite tracking-[-0.04em] lg:tracking-[-0.04em] col-span-3">
                      {pageData?.title}
                    </h1>
                    <div className="py-1 flex flex-col justify-between items-stretch lg:items-start lg:h-full gap-6">
                      <p className="max-w-96 lg:max-w-[280px] text-aswhite text-sm leading-4">
                        {pageData?.description}
                      </p>
                      <PrimaryButton
                        variant="white"
                        to={`https://maps.google.com/maps/place/${pageData?.location}`}
                        text="View On Maps"
                      />
                    </div>
                  </div>
                  <GridLines variant="white" />
                </div>
                <div className="size-full block absolute inset-0 z-1 shrink">
                  <div className="size-full block absolute inset-0 z-2 bg-gradient-to-t from-primary/65 to-60% to-primary/0"></div>
                  <img
                    src={pageData?.projectImage}
                    alt={`Rarelogyx Project - ${pageData?.title} page preview image`}
                    className="size-full max-w-full inline-block object-cover overflow-clip absolute inset-0 z-1"
                  />
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>

      {/* Icon Blocks */}
      <BlockSection>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-1">
          {/* <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-start gap-1 shrink"> */}
          <IconBlock
            icon={
              <img
                src="/images/primary-location.svg"
                alt="location icon"
                className="size-6 max-w-full inline-block overflow-clip shrink"
              />
            }
            name="Location:"
            description={pageData?.location as string}
            variation="withIcon"
          />
          <IconBlock
            icon={
              <img
                src="/images/primary-case.svg"
                alt="type of work icon"
                className="size-6 max-w-full inline-block overflow-clip shrink"
              />
            }
            name="Type Of Work:"
            description={pageData?.typeOfWork as string}
            variation="withIcon"
          />
          {/* </div> */}
          <IconBlock
            icon={
              <img
                src="/images/primary-calendar.svg"
                alt="completion date icon"
                className="size-6 max-w-full inline-block overflow-clip shrink"
              />
            }
            name="Completion Date:"
            description={pageData?.completionDate as string}
            variation="withIcon"
          />
        </div>
      </BlockSection>

      <BlockSection
        className="w-auto h-140 min-h-auto flex flex-col justify-start items-stretch lg:h-screen lg:min-h-180 grow"
        containerContent="h-auto flex flex-col justify-start items-stretch grow"
      >
        <div className="size-auto block overflow-hidden object-fill grow relative rounded-lg">
          <img
            src={pageData?.previewImage}
            alt={`Rarelogyx ${pageData?.title} Project Preview Image`}
            className="size-full max-w-full inline-block overflow-clip object-cover absolute inset-0"
          />
        </div>
      </BlockSection>

      {/* Project Bio Section */}
      <SectionBlock className="py-40 lg:50" containerContent="max-w-180">
        <div className="w-full h-auto pb-6 flex flex-col items-stretch gap-6 shrink border-b border-b-aswhite/10">
          {/* Info Item */}
          <div className="size-auto pt-6 flex flex-col items-stretch gap-5 lg:grid lg:grid-cols-[1fr_2fr] shrink border-t border-t-aswhite/10">
            <div className="block pt-0.5 lg:col-span-1">
              <p className="text-xs text-left text-aswhite/70 text-clip font-medium leading-[120%] uppercase">
                Overview
              </p>
            </div>
            <p className="text-base text-left text-aswhite font-normal leading-[120%]">
              {pageData?.overview}
            </p>
          </div>

          <div className="size-auto pt-6 flex flex-col items-stretch gap-5 lg:grid lg:grid-cols-[1fr_2fr] shrink border-t border-t-aswhite/10">
            <div className="block pt-0.5 lg:col-span-1">
              <p className="text-xs text-left text-aswhite/70 text-clip font-medium leading-[120%] uppercase">
                Project Scope
              </p>
            </div>
            <div className="size-auto max-w-80 flex flex-wrap justify-start items-start gap-1.5">
              {pageData?.tags &&
                pageData?.tags.map((t, idx) => (
                  <span key={`${t} - ${idx}`} className="size-auto block">
                    <PrimaryChips
                      variant="white"
                      animate={false}
                      className="bg-aswhite/3"
                      text={t}
                    />
                  </span>
                ))}
            </div>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock className="size-auto pt-0" containerContent="max-w-298">
        <div className="w-full h-auto pb-1 flex flex-col justify-start items-stretch gap-1 shrink">
          {/* Second Preview Image */}
          <div className="w-auto h-140 lg:h-screen min-h-auto lg:min-h-180 block shrink overflow-hidden rounded-lg relative">
            <img
              src={pageData?.previewImage2}
              alt={`Rarelogyx ${pageData?.title} Project Preview Image 2`}
              className="size-full max-w-full inline-block overflow-clip object-cover absolute inset-0 z-auto"
            />
          </div>

          {/* Third Preview Image */}
          <div className="w-auto h-120 lg:h-[150vh] min-h-auto lg:min-h-300 block shrink overflow-hidden rounded-lg relative">
            <img
              src={pageData?.previewImage3}
              alt={`Rarelogyx ${pageData?.title} Project Preview Image 2`}
              className="size-full max-w-full inline-block overflow-clip object-cover absolute inset-0 z-auto"
            />
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        className="size-auto py-40 lg:py-50 block"
        containerContent="max-w-298"
      >
        <div className="w-full h-auto mb-16 lg:mb-20 flex flex-col justify-start items-center gap-6 relative">
          <div className="w-full max-w-70 lg:max-w-110 flex flex-col justify-start items-center gap-4">
            <PrimaryChips text="Other Projects" variant="white" />
            <HeadingH2>Discover More Ideas That Were Made Reality!</HeadingH2>
          </div>
          <PrimaryButton variant="white" text="View All" to="/projects" />
        </div>

        <div className="w-full h-auto">
          <div className="size-auto flex flex-col justify-start items-stretch gap-1">
            {siteConfig.projects.length > 0 ? (
              siteConfig.projects
                .filter((p) => p.slug !== pageData?.slug)
                .sort(() => 0.5 - Math.random())
                .slice(0, 2)
                .map((p, id) => (
                  <ProjectItem
                    key={p.title}
                    title={p.title}
                    description={p.description}
                    location={p.location}
                    typeOfWork={p.typeOfWork}
                    completionDate={p.completionDate}
                    tags={p.tags}
                    projectImage={p.projectImage}
                    reverse={id % 2 !== 0}
                  />
                ))
            ) : (
              <div className="size-auto block py-7 px-6 border border-white/10 bg-white/3">
                <p className="text-white text-base text-center font-medium uppercase">
                  No Projects.
                </p>
              </div>
            )}
          </div>
        </div>
      </SectionBlock>

      <Footer />
    </>
  );
}
