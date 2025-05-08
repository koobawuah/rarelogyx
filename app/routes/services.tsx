import BigButton from "~/components/big-button";
import Footer from "~/components/footer/footer";
import GridLines from "~/components/grid-lines";
import Header from "~/components/header/header";
import HeadingH1 from "~/components/heading-h1";
import PrimaryChips from "~/components/primary-chips";
import NavCard from "~/components/nav-card";
import SectionBlock from "~/components/section-block";
import LogoBlock from "~/components/logo-block";
import PrimaryButton from "~/components/primary-button";
import HeadingH2 from "~/components/heading-h2";
import HeadingH3 from "~/components/heading-h3";
import { siteConfig } from "~/site.config";
import { ServiceCard } from "~/components/service-card";

export default function Services() {
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
                <PrimaryChips text="Our Services" />
                <div className="w-full flex flex-col justify-start items-stretch lg:items-start lg:grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-2">
                  <HeadingH1>
                    Most importantly, we <br />
                    like to serve
                  </HeadingH1>
                  <div className="size-auto py-1 flex flex-col justify-between items-stretch lg:h-full lg:items-start gap-6">
                    <p className="max-w-96 lg:max-w-[280px] text-primary text-sm leading-4">
                      We help businesses stand out and scale with confidence
                      offering a plethora of digital and technical services.
                    </p>
                    <PrimaryButton to="/about" text="About Us" />
                  </div>
                </div>
                <GridLines />
              </div>
            </header>
            {/* Action buttons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
              <BigButton
                name="Our Projects"
                description="Explore our portfolio to see ideas come to life."
                to="/projects"
                variation="default"
                bgColor="#122c5f"
              />
              <BigButton
                name="Get In Touch"
                description="Contact us to discuss your vision and bring it to life."
                to="/contact-us"
                variation="default"
                bgColor="rgba(242,242, 242,0.5)"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Examples Sections */}
      <div className="size-auto min-h-auto lg:h-screen lg:min-h-180 pb-1 flex flex-col items-stretch">
        {/* Wide Container */}
        <div className="w-full max-w-none lg:max-w-482 mx-auto px-1 flex flex-col justify-start items-stretch grow">
          {/* Service Images Grid */}
          <div className="size-auto flex flex-col justify-start items-stretch gap-1 grow lg:grid lg:grid-cols-2">
            <div className="size-auto flex flex-col justify-start items-stretch gap-1 lg:grid lg:grid-cols-1 shrink">
              <div className="w-full h-90 lg:h-auto block overflow-hidden rounded-lg border border-aswhite/20 col-span-1 relative shrink">
                <img
                  src="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f973882ab7c3b1369ee601_buildbafla-site.webp"
                  alt="Rarelogyx Website Service - Bafla"
                  className="size-full max-w-full object-cover overflow-clip inline-block absolute inset-0"
                />
              </div>
              <div className="w-full h-90 lg:h-auto block overflow-hidden rounded-lg border border-aswhite/20 relative shrink">
                <img
                  src="/images/BO App Dash.png"
                  alt="Rarelogyx Web App Service - Bonsu Capital"
                  className="size-full max-w-full object-cover overflow-clip inline-block absolute inset-0"
                />
              </div>
            </div>
            <div className="w-full h-90 lg:h-auto block overflow-hidden rounded-lg border border-aswhite/20 relative shrink col-span-1">
              <img
                src="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f981b2fdab5fa09a057be8_26609d8a8c34f5b57ec24ea159ca554c_servinn-app.png"
                alt="Rarelogyx Web App Service - Servinn App"
                className="size-full max-w-full object-cover overflow-clip inline-block absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="size-auto block pb-1">
        <div className="w-full max-w-none lg:max-w-482 px-1 mx-auto block ">
          <div className="size-auto grid grid-cols-1 lg:grid-cols-3 gap-1">
            {/* Service Block Header */}
            <div className="size-auto px-6 py-16 lg:py-20 bg-aswhite flex flex-col justify-start items-center col-span-1 lg:col-span-3 rounded-lg">
              <div className="w-full max-w-100 lg:max-w-170 h-auto flex flex-col items-center gap-4 shrink">
                <PrimaryChips text="Expert Solutions" />
                <HeadingH2 className="text-primary my-0">
                  Rarelogyx delivers IT solutions and app development in Ghana.
                </HeadingH2>
              </div>
            </div>
            {siteConfig.services.length > 0
              ? siteConfig.services.map(
                  ({ icon, heading, description, image }, idx) => (
                    <ServiceCard
                      key={heading}
                      icon={icon}
                      heading={heading}
                      description={description}
                      image={image}
                    />
                  )
                )
              : null}
          </div>
        </div>
      </div>

      {/* social proof */}
      <SectionBlock className="py-50">
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

      {/* CTA Section */}
      <div className="size-auto min-h-auto lg:h-screen lg:min-h-180 pb-1 flex flex-col justify-start items-stretch">
        <div className="w-full max-w-none lg:max-w-482 mx-auto px-1 flex flex-col justify-start items-stretch grow">
          <div className="size-auto flex flex-col justify-start items-stretch gap-1 grow lg:grid lg:grid-cols-2">
            <NavCard
              chipTitle="Our Projects"
              title={<span>Projects Developed By The Team</span>}
              cta="Explore Portfolio"
              link="/projects"
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
