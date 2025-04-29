import BigButton from "~/components/big-button";
import Footer from "~/components/footer/footer";
import GridLines from "~/components/grid-lines";
import Header from "~/components/header/header";
import PrimaryButton from "~/components/primary-button";
import PrimaryChips from "~/components/primary-chips";

export default function ContactUs() {
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
                <PrimaryChips text="Contact Information" />
                <div className="w-full flex flex-col justify-start items-stretch lg:items-start lg:grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-2">
                  <h1 className="max-w-2xl my-0 text-4xl lg:text-[64px] font-normal text-primary tracking-[-0.04em] lg:tracking-[-0.04em] text-balance col-span-3">
                    Contact Us, its time to turn that idea into reality
                  </h1>
                  <div className="size-auto py-1 flex flex-col justify-between items-stretch lg:h-full lg:items-start lg:justify-end gap-6">
                    <p className="max-w-96 lg:max-w-[280px] text-primary text-sm leading-4">
                      Let&apos;s work together to bring your vision to life.
                      Reach out to explore how we can create solutions that
                      exceed your expectations.
                    </p>
                  </div>
                </div>
                <GridLines />
              </div>
            </header>
            {/* Action buttons */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
              <div className="flex flex-col lg:flex-row lg:items-stretch lg:justify-start gap-1 shrink">
                <BigButton
                  name="Email Us"
                  description="Share your questions and ideas, and we'll respond quickly."
                  to={"mailto:contact@rarelogyx.com"}
                  bgColor="#122c5f"
                />
                <BigButton
                  name="Call Us"
                  description="Contact us directly for immediate assistance."
                  to={"tel:+233209497199"}
                  bgColor="#254583"
                />
              </div>
              <BigButton
                name="Visit Us"
                to={"https://www.google.com/maps/place/dr+aggrey+street"}
                description="Visit us for personalized consultations and advice."
                bgColor="rgba(242,242, 242,0.5)"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
