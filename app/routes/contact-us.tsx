import type { ClassValue } from "clsx";
import { Form } from "react-router";
import BigButton from "~/components/big-button";
import Footer from "~/components/footer/footer";
import { FormInput } from "~/components/form-input";
import GridLines from "~/components/grid-lines";
import Header from "~/components/header/header";
import HeadingH2 from "~/components/heading-h2";
import PrimaryButton from "~/components/primary-button";
import PrimaryChips from "~/components/primary-chips";
import { cn } from "~/libs/utils";

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
                  icon={
                    <img
                      src="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f8396891b9193c487e23ad_Mail.svg"
                      alt="Mail Rarelogyx Icon"
                      className="size-6 max-w-full"
                    />
                  }
                  name="Email Us"
                  description="Share your questions and ideas, and we'll respond quickly."
                  to={"mailto:contact@rarelogyx.com"}
                  variation="withIcon"
                  bgColor="#122c5f"
                />
                <BigButton
                  icon={
                    <img
                      src="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f8396891b9193c487e23ab_Phone.svg"
                      alt="Mail Rarelogyx Icon"
                      className="size-6 max-w-full"
                    />
                  }
                  name="Call Us"
                  description="Contact us directly for immediate assistance."
                  to={"tel:+233209497199"}
                  variation="withIcon"
                  bgColor="#254583"
                />
              </div>
              <BigButton
                icon={
                  <img
                    src="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f8396891b9193c487e23ac_Building.svg"
                    alt="Mail Rarelogyx Icon"
                    className="size-6 max-w-full"
                  />
                }
                name="Visit Us"
                description="Visit us for personalized consultations and advice."
                to={"https://www.google.com/maps/place/dr+aggrey+street"}
                variation="withIcon"
                bgColor="rgba(242,242, 242,0.5)"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="size-auto pb-1 flex flex-col justify-start items-stretch">
        <div className="w-full max-w-none lg:max-w-482 mx-auto px-1 flex flex-col justify-start items-stretch grow">
          <div className="size-auto flex flex-col justify-start items-stretch gap-1 grow lg:grid lg:grid-cols-2">
            <div className="w-full overflow-hidden col-span-1 relative rounded-lg border border-white/20">
              <img
                src="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f9708b8f8a5c8a050c0529_joyce-busola-L9U5UUScnHY-unsplash.jpg"
                alt="Contact Rarelogyx - Lady on the phone"
                className="size-full max-w-full absolute inset-0 object-cover overflow-clip"
              />
            </div>
            <div className="size-auto px-6 pt-8 pb-12 bg-[#f2f2f2] rounded-lg flex flex-col justify-start items-stretch gap-8 cols-span-1">
              <HeadingH2 className=" text-primary max-w-80 text-left">
                We would love to
                <br /> hear from you
              </HeadingH2>
              <div className="w-full">
                <form
                  method="post"
                  className="size-auto flex flex-col justify-start items-stretch gap-8"
                >
                  <div className="size-auto flex flex-col justify-start items-stretch gap-6">
                    <FormInput
                      name="fullname"
                      label="Full Name"
                      placeholder="Kwame O. Nkrumah"
                    />
                    <div className="size-auto flex flex-col lg:flex-row justify-start items-stretch gap-6 lg:gap-2">
                      <FormInput
                        name="email"
                        label="Email"
                        placeholder="nkwame.o@gmail.com"
                      />
                      <FormInput
                        name="phone"
                        label="Phone"
                        placeholder="+233 (0)24 488 2388"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-stretch gap-2">
                      <label
                        htmlFor="message"
                        className="text-xs text-bg-primary/70 font-medium text-left uppercase"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="How can we help you?"
                        className={cn(
                          "size-auto min-h-42 py-5 px-6 bg-bg-primary/7 hover:bg-bg-primary/10 focus:bg-bg-primary/10 rounded-lg border border-bg-primary/0 text-base placeholder:text-bg-primary/50 placeholder:font-normal overflow-clip focus:border-bg-primary/7 focus:outline-none transition-all duration-250"
                        )}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    className={cn(
                      "size-auto min-w-0 min-h-0 rounded-full p-[18px] bg-primary border border-primary hover:bg-transparent group duration-400 shrink cursor-auto text-xs text-[#f2f2f2] hover:text-primary font-medium uppercase"
                    )}
                    type="submit"
                  >
                    Send A Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
