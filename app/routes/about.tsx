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
import { HighlightItem } from "~/components/highlight-item";
import { TextBlock } from "~/components/text-block";
import { FAQItem } from "~/components/faq-item";

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

      <SectionBlock>
        <div className="w-full h-auto mb-12 lg:mb-16 flex flex-col justify-start items-start gap-6 relative">
          <div className="w-full max-w-70 lg:max-w-110 flex flex-col justify-start items-start gap-4">
            <PrimaryChips text="Story & Approach" variant="white" />
            <HeadingH2>Since 2016...</HeadingH2>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 gap-[1px] md:grid-cols-3 bg-white/10 rounded-lg overflow-hidden">
          <TextBlock
            title="We Cherished Our Beginnings"
            description="Rarelogyx started with a vision to empower businesses through technological innovations."
            className="md:pl-0"
          />
          <TextBlock
            title="We've Seen Many Milestones"
            description="We've grown from a small firm, serving diverse businesses and growing our portfolio at an exponential rate."
          />
          <TextBlock
            title="We've Adapted"
            description="Our history is defined by pushing our boundaries and creating products that inspire businesses to stand test of time"
          />
          <TextBlock
            title="We Remained Client Centered"
            description="We focus on understanding and reflecting our clients' visions with tailored, innovative solutions."
            className="md:pl-0"
          />
          <TextBlock
            title="We've Maintained A Standard"
            description="We have managed to keep the focus and the zeal to always serve with creativity, intelligence and undying commitment"
          />
          <TextBlock
            title="We've Enjoyed Every Moment"
            description="Working closely with clients brings joy to our very core. We remain grateful for many years with our wonderful clients! "
          />
        </div>
      </SectionBlock>

      {/* Statistics Section */}
      <SectionBlock className="pt-40 lg:pt-50">
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

      {/* FAQ Section */}
      <SectionBlock className="py-40" containerContent=" shrink ">
        <div className="w-full h-auto mb-16 lg:mb-20 flex flex-col justify-start items-center gap-6 relative">
          <div className="w-full max-w-70 lg:max-w-110 flex flex-col justify-start items-center gap-4">
            <PrimaryChips text="FAQ" variant="white" />
            <HeadingH2>Quick Answers to Common Questions</HeadingH2>
          </div>
        </div>
        <div className="w-full flex flex-col items-stretch gap-2 lg:flex-row">
          <div className="size-auto flex flex-col items-stretch gap-2 grow lg:w-1/2">
            {siteConfig.about.faq &&
              siteConfig.about.faq
                .slice(0, 4)
                .map(({ question, answer, open }, idx) => (
                  <FAQItem
                    key={question}
                    question={question}
                    answer={answer}
                    open
                  />
                ))}
          </div>
          <div className="size-auto flex flex-col items-stretch gap-2 grow lg:w-1/2">
            {siteConfig.about.faq &&
              siteConfig.about.faq
                .slice(4, siteConfig.about.faq.length)
                .map(({ question, answer, open }, idx) => (
                  <FAQItem
                    key={question}
                    question={question}
                    answer={answer}
                    open
                  />
                ))}
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
                  Let&apos;s Start the
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
