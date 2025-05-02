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
import HeadingH1 from "~/components/heading-h1";
import BlurBlock from "~/components/blur-block";

export function meta({}: Route.MetaArgs) {
  return [{ title: "RARELOGYX - About" }, { name: "description", content: "" }];
}

export default function About() {
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
                <PrimaryChips text="About Rarelogyx" />
                <div className="w-full flex flex-col justify-start items-stretch lg:items-start lg:grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-2">
                  <HeadingH1>A corporate technology company</HeadingH1>
                  <div className="py-1 flex flex-col justify-between items-stretch lg:items-start gap-6">
                    <p className="max-w-96 lg:max-w-[280px] text-primary text-sm leading-4">
                      We design, develop, and deploy systems that solve real
                      problems, drive growth, and deliver measurable value
                    </p>
                    <PrimaryButton to="/services" text="Our Services" />
                  </div>
                </div>
                <GridLines />
              </div>
            </header>
          </div>
        </div>
      </div>

      <SectionBlock className="pt-50" containerContent="max-w-[1192px]">
        {/* About Banner */}
        <div className="w-full h-auto min-h-auto lg:h-[150vh] lg:min-h-300 flex flex-col justify-start items-center px-6 py-16 overflow-hidden lg:py-20 relative rounded-lg border border-white/20">
          {/* About Banner Content */}
          <div className="w-full max-w-240 h-auto flex flex-col justify-start items-center gap-12 lg:gap-16 relative z-20">
            {/* Center Heading Block */}
            <div className="w-full max-w-100 flex flex-col justify-start items-center gap-4 lg:max-w-170">
              <PrimaryChips text="Our Purpose" variant="blur" />
              <HeadingH2>
                Through collaboration and precision, we develop the building
                blocks to your visions.
              </HeadingH2>
            </div>
            <div className="w-full h-auto flex flex-col justify-start items-stretch gap-2 lg:grid lg:grid-cols-3">
              <BlurBlock
                icon="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f8396891b9193c487e2395_Idea.svg"
                title="Creative Vision"
                description="Bringing innovative and imaginative designs to life with unique flair."
              />
              <BlurBlock
                icon="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f8396891b9193c487e2396_Tool%20Box.svg"
                title="Tailored Solutions"
                description="Customizing products to perfectly align with client needs and goals."
              />
              <BlurBlock
                icon="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f8396891b9193c487e23a5_Cube.svg"
                title="Best Practices"
                description="Improving operations, enhancing user experiences with standard solutions."
              />
            </div>
          </div>
          <div className="size-full absolute inset-0 z-0">
            <div className="size-full absolute inset-0 z-10 bg-gradient-to-b from-primary/50 to-transparent"></div>
            <img
              src="/images/rarelogyx-office.jpg"
              alt="Rarelogyx Office space"
              className="size-full overflow-clip max-w-full object-cover inline-block absolute inset-auto z-0"
            />
          </div>
        </div>
      </SectionBlock>

      <SectionBlock className="pt-50"></SectionBlock>

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
              bgImage="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f868ebad56d883013fc924_uk-black-tech-YDEiseFR_Q8-unsplash.jpg"
            />
            <NavCard
              chipTitle="Contact Us"
              title={
                <span>
                  Let&apos;s Start the
                  <br /> Conversation
                </span>
              }
              cta="Get In Touch"
              link="/services"
              bgImage="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f86989473eada6fb902a57_20fa007f0fd356ab36364e17fa68e029_the-jopwell-collection-kmBE0ircrQ0-unsplash.jpg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
