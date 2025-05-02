import BigButton from "~/components/big-button";
import Footer from "~/components/footer/footer";
import FormInput from "~/components/form-input";
import FormInputSelect from "~/components/form-input-select";
import FormTextArea from "~/components/form-textarea";
import GridLines from "~/components/grid-lines";
import Header from "~/components/header/header";
import HeadingH1 from "~/components/heading-h1";
import HeadingH2 from "~/components/heading-h2";
import PrimaryChips from "~/components/primary-chips";
import { cn } from "~/libs/utils";
import type { Route } from "../+types/root";
import { Form, useActionData, useNavigation } from "react-router";
import { Resend } from "resend";
import NavCard from "~/components/nav-card";
import SectionBlock from "~/components/section-block";
import LogoBlock from "~/components/logo-block";
import PrimaryButton from "~/components/primary-button";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const fullname = String(formData.get("fullname"));
  const email = String(formData.get("email"));
  const phone = String(formData.get("phone"));
  const inquiry = String(formData.get("inquiryType"));
  const message = String(formData.get("message"));

  console.log("Form Data:", { fullname, email, phone, inquiry, message });
  //Send email with resend
  try {
    const res = await resend.emails.send({
      from: "Rarelogyx Official Website <contact@rarelogyx.com>",
      to: process.env.CONTACT_EMAIL ?? "contact@rarelogyx.com",
      subject: `Mail from ${fullname} - Rarelogyx Contact Us Page`,
      html: `
      <div style="font-family: 'IBM Plex Sans', sans-serif; font-size: 16px; line-height: 1.5;">
        <h2 style="color: #122c5f;">Mail from ${fullname} - Rarelogyx Contact Us Page</h2>
        <p><strong>Full Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Inquiry Type:</strong> ${inquiry}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `,
    });
    console.log("Email sent successfully:", res);
    return { response: { success: true, error: null } };
  } catch (err) {
    console.error("Error sending email:", err);
    return { response: { success: null, error: "Failed to send email" } };
  }
}

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
              link="/contact-us"
              bgImage="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f86989473eada6fb902a57_20fa007f0fd356ab36364e17fa68e029_the-jopwell-collection-kmBE0ircrQ0-unsplash.jpg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
