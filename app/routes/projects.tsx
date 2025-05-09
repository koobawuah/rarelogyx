import SectionBlock from "~/components/section-block";
import type { Route } from "../+types/root";
import PrimaryChips from "~/components/primary-chips";
import HeadingH2 from "~/components/heading-h2";
import { siteConfig } from "~/site.config";
import ProjectItem from "~/components/project-item";
import NavCard from "~/components/nav-card";
import Footer from "~/components/footer/footer";
import GridLines from "~/components/grid-lines";
import Header from "~/components/header/header";
import PrimaryButton from "~/components/primary-button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RARELOGYX - Projects" },
    { property: "og:title", content: "RARELOGYX - Projects" },
    {
      name: "description",
      content:
        "Explore our portfolio, where ideas become digital realities. From business websites and mobile apps to complex software architectures projects.",
    },
    {
      property: "og:description",
      content:
        "Explore our portfolio, where ideas become digital realities. From business websites and mobile apps to complex software architectures projects.",
    },
    {
      property: "og:image",
      content: "https://rarelogyx.com/images/Cover.png",
    },
    {
      property: "og:url",
      content: "https://rarelogyx.com/projects",
    },
  ];
}

export default function Projects() {
  return (
    <>
      <div className="size-auto lg:h-auto min-h-auto flex flex-col py-1 justify-start items-stretch">
        {/* Wide container */}
        <div className="w-full mx-auto px-1 max-w-none flex flex-col justify-start items-stretch grow">
          {/* Hero */}
          <div className="flex flex-col gap-1 justify-start items-stretch grow">
            {/* Hero Content Wrapper */}
            <header className="size-auto bg-[#f2f2f2] rounded-lg flex flex-col overflow-hidden justify-start items-stretch grow">
              {/* Nav */}
              <Header />

              {/* Hero content  */}
              <div className="size-auto relative overflow-hidden p-6 pb-10 pt-30 lg:pt-50 flex flex-col justify-end items-start gap-4 z-10 grow object-fill">
                <PrimaryChips text="Portfolio" />
                <div className="w-full flex flex-col justify-start items-stretch lg:items-start lg:grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-2">
                  <h1 className="max-w-2xl my-0 text-4xl lg:text-[64px] font-normal text-primary tracking-[-0.04em] lg:tracking-[-0.04em] text-balance col-span-3">
                    Showcasing our Signature Projects
                  </h1>
                  <div className="py-1 flex flex-col justify-between items-stretch lg:items-start lg:h-full gap-6">
                    <p className="max-w-96 lg:max-w-[280px] text-primary text-sm leading-4">
                      Browse our portfolio to see a collection of innovative and
                      impactful projects that highlight our expertise.
                    </p>
                    <PrimaryButton to="/contact-us" text="Get In Touch" />
                  </div>
                </div>
                <GridLines />
              </div>
            </header>
          </div>
        </div>
      </div>

      <SectionBlock className="py-40" containerContent="max-w-[1192px]">
        <div className="w-full h-auto mb-16 flex flex-col justify-start items-center gap-6 lg:mb-20">
          <div className="w-full max-w-[440px] h-auto flex flex-col justify-start items-center gap-4">
            <PrimaryChips variant="white" text="Our Projects" />
            <HeadingH2>
              Some ideas we turned
              <br />
              into impactful solutions
            </HeadingH2>
          </div>
        </div>

        <div className="w-full h-auto">
          <div className="size-auto flex flex-col justify-start items-stretch gap-1">
            {siteConfig.projects.length > 0 ? (
              siteConfig.projects.map((p, id) => (
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

      {/* CTA Section */}
      <div className="size-auto min-h-auto lg:h-screen lg:min-h-180 pb-1 flex flex-col justify-start items-stretch">
        <div className="w-full max-w-none lg:max-w-482 mx-auto px-1 flex flex-col justify-start items-stretch grow">
          <div className="size-auto flex flex-col justify-start items-stretch gap-1 grow lg:grid lg:grid-cols-2">
            <NavCard
              chipTitle="Our Services"
              title={
                <span>
                  Your Vision,
                  <br /> Our Expertise
                </span>
              }
              cta="Discover Our Services"
              link="/services"
              bgImage="/images/tech-group.jpg"
            />
            <NavCard
              chipTitle="Contact Us"
              title={
                <span>
                  Let’s Start the
                  <br /> Conversation
                </span>
              }
              cta="Get In Touch"
              link="/contact-us"
              bgImage="/images/lady-working-on-laptop.jpg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
