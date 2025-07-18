import BigButton from "~/components/big-button";
import Footer from "~/components/footer/footer";
import GridLines from "~/components/grid-lines";
import Header from "~/components/header/header";
import HeadingH2 from "~/components/heading-h2";
import { HighlightItem } from "~/components/highlight-item";
import LogoBlock from "~/components/logo-block";
import NavCard from "~/components/nav-card";
import PrimaryButton from "~/components/primary-button";
import PrimaryChips from "~/components/primary-chips";
import ProjectItem from "~/components/project-item";
import SectionBlock from "~/components/section-block";
import { siteConfig } from "~/site.config";
import type { Route } from "../+types/root";
import { Link } from "react-router";

export function meta({ params }: Route.MetaArgs) {
  return [
    {
      title: "RARELOGYX - Digital Solutions, Engineered for Growth.",
    },
    {
      property: "og:title",
      content: "RARELOGYX - Digital Solutions, Engineered for Growth.",
    },
    {
      name: "description",
      content:
        "Rarelogyx is a software and IT solutions company founded with a mission to empower organizations through technology.",
    },
    {
      property: "og:description",
      content:
        "Rarelogyx is a software and IT solutions company founded with a mission to empower organizations through technology.",
    },
    {
      property: "og:image",
      content: "https://rarelogyx.com/images/Cover.png",
    },
    {
      property: "og:url",
      content: "https://rarelogyx.com",
    },
  ];
}

export default function Index() {
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

              {/* Hero content  */}
              <div className="size-auto relative overflow-hidden p-6 pb-10 pt-30 lg:pt-6 flex flex-col justify-end items-start gap-4 z-10 grow object-fill">
                <Link to={siteConfig.core.adLink || ""}>
                  <PrimaryChips
                    text={
                      siteConfig.core.adLabel || "Building full-scale systems"
                    }
                  />
                </Link>
                <div className="w-full flex flex-col justify-start items-stretch lg:items-start lg:grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-2">
                  <h1 className="max-w-2xl my-0 text-4xl lg:text-[64px] font-normal text-primary tracking-[-0.04em] lg:tracking-[-0.04em] text-balance col-span-3">
                    Digital solutions, Engineered for Growth.
                  </h1>
                  <div className="py-1 flex flex-col justify-between items-stretch lg:items-start lg:h-full gap-6">
                    <p className="max-w-96 lg:max-w-[280px] text-primary text-sm leading-4">
                      We deliver intelligent software solutions, from apps to
                      branding, to turning your ideas into fully functional
                      systems.
                    </p>
                    <PrimaryButton to="/about" text="About Us" />
                  </div>
                </div>
                <GridLines />
              </div>
            </header>
            {/* Action buttons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
              <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-start gap-1 shrink">
                <BigButton
                  name="Our Projects"
                  description="Explore our portfolio, where ideas become digital realities."
                  to={"/projects"}
                  variation="default"
                  bgColor="#122c5f"
                />
                <BigButton
                  name="Our Services"
                  description="Explore our services and elevate your project with us."
                  to={"/services"}
                  variation="default"
                  bgColor="#254583"
                />
              </div>
              <BigButton
                name="Get in touch"
                description="Contact us to discuss your idea, to end with a powerful solution.
"
                to={"/contact-us"}
                variation="default"
                bgColor="rgba(242,242, 242,0.5)"
              />
            </div>
          </div>
        </div>
      </div>
      {/* setion  */}
      <section className="size-auto lg:h-screen lg:min-h-[720px] flex flex-col justify-start items-stretch pb-1">
        <div className="w-full max-w-[1928px] h-auto lg:h-full mx-auto px-1 flex flex-col justify-start items-stretch grow">
          <div className="size-auto flex flex-col justify-start items-stretch lg:h-full lg:grid lg:grid-cols-2 gap-1 grow select-none">
            <video
              // src="images/intro-vid.mp4"
              src="https://videos.pexels.com/video-files/8124286/8124286-hd_1080_1920_30fps.mp4"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              controls={false}
              className="w-full h-[560px] min-h-0 lg:h-full block relative border border-white/20 rounded-lg object-cover select-none"
            />
            <div className="flex flex-col justify-start items-stretch gap-1 grow">
              <img
                src="images/about-overview.jpeg"
                className="w-auto max-w-full h-[360px] lg:size-auto border border-white/20 rounded-lg overflow-clip object-cover grow box-border"
                alt="Man in Office"
              />
              <div className="bg-[#f2f2f2] py-7 px-6 flex flex-col justify-start items-start gap-12 shrink rounded-lg">
                <div className="w-full max-w-150 flex flex-col justify-start items-start gap-4">
                  <PrimaryChips text="About Us" />
                  <p className="text-primary font-normal text-clip text-xl lg:text-2xl leading-[112%] tracking-[-0.48px]">
                    Since 2016, we’ve helped startups and enterprises across
                    Ghana and beyond bring their ideas to life with reliable,
                    elegant and purpose-built digital systems.
                  </p>
                </div>
                <PrimaryButton to="/about" text="Learn more" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* social proof */}
      <SectionBlock>
        <div className="w-full h-auto max-w-[960px] flex flex-col justify-start items-center">
          <PrimaryChips text="Featured Clients" variant="white" />
          <div className="w-full my-12 grid grid-cols-2 gap-[1px] lg:grid-cols-3 bg-white/10 rounded-lg overflow-hidden">
            <LogoBlock src="/images/comp/monologo-white.png" />
            <LogoBlock src="/images/comp/versace-gold-logo.png" />
            <LogoBlock src="/images/comp/BC Logo Complete - Horizontal.png" />
            <LogoBlock src="/images/comp/amba-gallery-horizontal-final.png" />
            <LogoBlock src="/images/comp/servinn-logo[bw]-02.png" />
            <LogoBlock src="/images/comp/bafla-logo.jpg" />
          </div>
          <p className="max-w-80 text-sm font-normal text-center text-white/70">
            We’re honoured to have collaborated with visionary clients who
            challenge us to innovate and excel.
          </p>
        </div>
      </SectionBlock>

      {/* Projects section */}
      <SectionBlock containerContent="max-w-[1192px]">
        <div className="w-full h-auto mb-16 flex flex-col justify-start items-center gap-6 lg:mb-20">
          <div className="w-full max-w-[440px] h-auto flex flex-col justify-start items-center gap-4">
            <PrimaryChips variant="white" text="Our Projects" />
            <HeadingH2>
              See Our Newest
              <br /> Projects in Action
            </HeadingH2>
          </div>
          <PrimaryButton to="/projects" text="View All" variant="white" />
        </div>
        <div className="w-full h-auto">
          <div className="size-auto flex flex-col justify-start items-stretch gap-1">
            {siteConfig.projects.length > 0 ? (
              siteConfig.projects
                .slice(0, 3)
                .map((p, id) => (
                  <ProjectItem
                    key={p.title}
                    title={p.title}
                    description={p.description}
                    location={p.location}
                    link={p.previewLink}
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

      {/* Statistics Section */}
      <SectionBlock className="py-40 lg:py-50">
        {/* Left Heading Block Wrapper */}
        <div className="w-full mb-16 lg:mb-20 flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-end gap-6 relative">
          <div className="w-full max-w-70 lg:max-w-110 h-auto flex flex-col justify-start items-start gap-4">
            <PrimaryChips text="Highlights" variant="white" />
            <HeadingH2 className="text-left ">
              Key Points That Define Our Success
            </HeadingH2>
          </div>
          <PrimaryButton to="/contact-us" text="Get In Touch" variant="white" />
        </div>
        <div className="w-full h-auto pb-6 flex flex-col justify-start items-stretch gap-6 border-b border-[#f2f2f2]/10">
          <HighlightItem
            value="30+"
            heading="Projects Completed"
            description="Successfully completed over 30+ projects across startups, SMEs and public sectors, showcasing our diverse expertise."
          />
          <HighlightItem
            value="7"
            heading="Skilled Professionals"
            description="Our team consists of 7 skilled software engineers, designers and business developers, dedicated to delivering high-quality, innovative solutions."
          />
          <HighlightItem
            value="$12k"
            heading="Projects Value"
            description="Managed projects with a combined value of over $12k, demonstrating our capacity to handle and deliver fully functional and scalable products."
          />
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
