import BigButton from "~/components/big-button";
import GridLines from "~/components/grid-lines";
import Header from "~/components/header/header";
import PrimaryButton from "~/components/primary-button";
import PrimaryChips from "~/components/primary-chips";

export default function Index() {
  return (
    <div className="h-auto min-h-auto flex flex-col py-1 justify-start items-stretch">
      {/* Wide container */}
      <div className="w-full mx-auto px-1 max-w-none flex flex-col justify-start items-stretch flex-grow-1">
        {/* Hero */}
        <div className="flex flex-col gap-1 justify-start items-stretch flex-grow-1">
          {/* Hero Content Wrapper */}
          <header className="w-auto h-auto bg-[#f2f2f2] rounded-lg flex flex-col justify-start items-stretch flex-grow-1">
            {/* Nav */}
            <Header />

            {/* Hero content  */}
            <div className="w-full relative overflow-hidden p-6 pb-10 pt-30 lg:pt-6 flex flex-col justify-end items-start gap-4 z-10 grow">
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
  );
}
