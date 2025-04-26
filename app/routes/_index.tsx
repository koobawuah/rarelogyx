import type { ClassValue } from "clsx";
import type { ReactNode } from "react";
import { Link } from "react-router";
import BigButton from "~/components/big-button";
import GridLines from "~/components/grid-lines";
import Header from "~/components/header/header";
import LogoBlock from "~/components/logo-block";
import PrimaryButton from "~/components/primary-button";
import PrimaryChips from "~/components/primary-chips";
import { SectionBlock } from "~/components/section-block";
import { cn } from "~/libs/utils";

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
                <PrimaryChips text="Building full-scale systems" />
                <div className="w-full flex flex-col justify-start items-stretch lg:items-start lg:grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-8">
                  <h1 className="max-w-2xl my-0 text-4xl lg:text-[64px] font-normal text-primary tracking-[-0.015em] lg:tracking-[-0.033em] text-balance col-span-3">
                    Digital solutions, Engineered for Growth.
                  </h1>
                  <div className="py-1 flex flex-col justify-between items-stretch lg:items-start gap-6">
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
                  bgColor="#122c5f"
                />
                <BigButton
                  name="Our Services"
                  description="Explore our services and elevate your project with us."
                  to={"/services"}
                  bgColor="#254583"
                />
              </div>
              <BigButton
                name="Get in touch"
                to={"/contact"}
                description="Contact us to discuss your idea, to end with a powerful solution.
"
                bgColor="rgba(242,242, 242,0.5)"
              />
            </div>
          </div>
        </div>
      </div>
      {/* setion  */}
      <section className="size-auto lg:h-screen lg:min-h-[720px] flex flex-col justify-start items-stretch pb-1">
        <div className="w-full max-w-[1928px] h-auto lg:h-full mx-auto px-1 flex flex-col justify-start items-stretch grow">
          <div className="size-auto flex flex-col justify-start items-stretch lg:h-full lg:grid lg:grid-cols-2 gap-1 grow">
            <video
              // src="images/intro-vid.mp4"
              src="https://videos.pexels.com/video-files/8124286/8124286-hd_1080_1920_30fps.mp4"
              muted
              autoPlay
              loop
              className="w-full h-[560px] min-h-0 lg:h-full block relative border border-white/20 rounded-lg object-cover"
            />
            <div className="flex flex-col justify-start items-stretch gap-1 grow">
              <img
                src="images/about-overview.jpeg"
                className="w-auto max-w-full h-[360px] lg:size-auto border border-white/20 rounded-lg overflow-clip object-cover grow box-border"
              />
              <div className="bg-[#f2f2f2] py-7 px-6 flex flex-col justify-start items-start gap-12 shrink rounded-lg">
                <div className="w-full max-w-xl flex flex-col justify-start items-start gap-4">
                  <PrimaryChips text="About Us" />
                  <p className="text-primary font-normal text-xl lg:text-2xl tracking-tighter">
                    Since 2016, we&apos;ve helped startups and enterprises
                    across Ghana and beyond bring their ideas to life with
                    reliable, elegant, and purpose-built digital systems.
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
            <LogoBlock src="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67fcaac5ad82dcc3c1cfc9b4_monologo-white.png" />
            <LogoBlock src="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f8e15f126ef81791c77245_versace-gold-logo-p-2000.png" />
            <LogoBlock src="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f8bd68630dd52ec429cd48_cf73420e2c4cdf05e92b8cfd2643753b_BC%20Logo%20Complete%20-%20Horizontal.png" />
            <LogoBlock src="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f8df4dbdfec39fa02a350b_amba-gallery-horizontal-final-p-2000.png" />
            <LogoBlock src="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67fcab5e19a050ba65654ce0_servinn-logo%5Bsec-transparent%5D-02-p-2000.png" />
            <LogoBlock src="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f8e79057c69984d2e77262_bafla-logo.jpg" />
          </div>
          <p className="max-w-80 text-sm font-normal text-center text-white/70">
            We&apos;re honoured to have collaborated with visionary clients who
            challenge us to innovate and excel.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock containerContent="max-w-[1192px]">
        <PrimaryChips variant="white" text="Our Projects" />
      </SectionBlock>
    </>
  );
}
