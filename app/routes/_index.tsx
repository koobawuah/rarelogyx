import BigButton from "~/components/big-button";
import GridLines from "~/components/grid-lines";
import Header from "~/components/header/header";
import PrimaryButton from "~/components/primary-button";
import PrimaryChips from "~/components/primary-chips";

export default function Index() {
  return (
    <>
      <div className="size-auto lg:h-screen min-h-[720px] flex flex-col py-1 justify-start items-stretch">
        {/* Wide container */}
        <div className="w-full mx-auto px-1 max-w-none flex flex-col justify-start items-stretch grow">
          {/* Hero */}
          <div className="flex flex-col gap-1 justify-start items-stretch grow">
            {/* Hero Content Wrapper */}
            <header className="size-auto bg-[#f2f2f2] rounded-lg flex flex-col justify-start items-stretch grow">
              {/* Nav */}
              <Header />

              {/* Hero content  */}
              <div className="size-auto relative overflow-hidden p-6 pb-10 pt-30 lg:pt-6 flex flex-col justify-end items-start gap-4 z-10 grow object-fill">
                <PrimaryChips text="Building full-scale systems" />
                <div className="w-full flex flex-col justify-start items-stretch lg:items-start lg:grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-8">
                  <h1 className="max-w-2xl my-0 text-4xl lg:text-6xl font-normal text-primary tracking-tighter text-balance col-span-3">
                    Digital solutions, Engineered for Growth.
                  </h1>
                  <div className="py-1 flex flex-col justify-between items-stretch lg:items-start gap-6">
                    <p className="max-w-96 lg:max-w-[280px] text-primary text-sm">
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
        <div className="w-full max-w-[1928px] h-auto mx-auto px-1 flex flex-col justify-start items-stretch grow">
          <div className="size-auto flex flex-col justify-start items-stretch lg:grid lg:grid-cols-2 gap-1 grow">
            <video
              // src="images/intro-vid.mp4"
              src="https://videos.pexels.com/video-files/8124286/8124286-hd_1080_1920_30fps.mp4"
              muted
              autoPlay
              loop
              className="w-full h-[560px] lg:size-full block relative border border-white/20 rounded-lg "
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
    </>
  );
}
