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
import {
  Form,
  useActionData,
  useNavigation,
  type HeadersFunction,
} from "react-router";
import { Resend } from "resend";
import { siteConfig } from "~/site.config";

const resend = new Resend(process.env.RESEND_API_KEY);

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: "RARELOGYX - Contact Us" },
    { property: "og:title", content: "RARELOGYX - Contact Us" },
    {
      name: "description",
      content:
        "Let’s work together to bring your vision to life. Reach out today to explore how we can create innovative, functional products that exceed your expectations and needs.",
    },
    {
      property: "og:description",
      content:
        "Let’s work together to bring your vision to life. Reach out today to explore how we can create innovative, functional products that exceed your expectations and needs.",
    },
    {
      property: "og:image",
      content: "https://rarelogyx.com/images/Cover.png",
    },
    {
      property: "og:url",
      content: "https://rarelogyx.com/contact-us",
    },
  ];
}

export const headers: HeadersFunction = () => ({
  "Content-Security-Policy": [
    "default-src 'self';",
    "script-src 'self' https://challenges.cloudflare.com;",
    "frame-src https://challenges.cloudflare.com;",
    "style-src 'self' 'unsafe-inline';",
  ].join(" "),
});

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const fullname = String(formData.get("fullname"));
  const email = String(formData.get("email"));
  const phone = String(formData.get("phone"));
  const inquiry = String(formData.get("inquiryType"));
  const message = String(formData.get("message"));
  const honeypot = String(formData.get("company"));

  if (honeypot) {
    console.warn("Bot detected");
    return { error: "Bot detected" };
  }

  const response = formData.get("cf-turnstile-response");

  if (!response || typeof response !== "string") {
    console.error("Missing Turnstile token");
    return;
  }
  const result = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({
        secret:
          process.env.CLOUDFLARE_TURNSTILE ||
          "1x0000000000000000000000000000000AA",
        response: response as string,
        remoteip: request.headers.get("cf-connecting-ip") || "",
      }),
    }
  );
  const data = await result.json();
  if (!data.success) {
    console.warn("Bot detected: Turnstile flagged");
    return { error: "Bot detected: Turnstile flagged" };
  }

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
    return { success: true, error: null };
  } catch (err) {
    console.error("Error sending email:", err);
    return { success: null, error: "Failed to send email" };
  }
}

export default function ContactUs() {
  const response = useActionData();
  const navigation = useNavigation();

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
                  <HeadingH1>
                    Contact Us, its time to turn that idea into reality
                  </HeadingH1>
                  <div className="size-auto py-1 flex flex-col justify-between items-stretch lg:h-full lg:items-start lg:justify-end gap-6">
                    <p className="max-w-96 lg:max-w-[280px] text-primary text-sm leading-4">
                      Let’s work together to bring your vision to life. Reach
                      out to explore how we can create solutions that exceed
                      your expectations.
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
                      src="/images/icons/mail.svg"
                      alt="Mail Rarelogyx Icon"
                      className="size-6 max-w-full"
                    />
                  }
                  name="Email Us"
                  description="Share your questions and ideas and we'll respond quickly."
                  to={"mailto:contact@rarelogyx.com"}
                  variation="withIcon"
                  bgColor="#122c5f"
                />
                <BigButton
                  icon={
                    <img
                      src="/images/icons/phone.svg"
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
                    src="/images/icons/building.svg"
                    alt="Visit Rarelogyx Icon"
                    className="size-6 max-w-full"
                  />
                }
                name="Visit Us"
                description="Visit us for personalized consultations and advice."
                to={siteConfig.core.address || ""}
                variation="withIcon"
                bgColor="rgba(242,242, 242,0.5)"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blocks Section */}
      <div className="size-auto pb-1 flex flex-col justify-start items-stretch">
        {/* Wide Container */}
        <div className="w-full max-w-none lg:max-w-482 mx-auto px-1 flex flex-col justify-start items-stretch grow">
          {/* Container Grid */}
          <div className="size-auto flex flex-col justify-start items-stretch gap-1 grow lg:grid lg:grid-cols-2">
            <div className="w-full h-140 lg:h-auto overflow-hidden col-span-1 relative rounded-lg border border-white/20 shrink order-last lg:order-none">
              <img
                src="/images/lady-on-phone.jpg"
                alt="Contact Rarelogyx - Lady on the phone"
                className="size-full max-w-full mx-auto inline-block absolute inset-0 object-cover overflow-clip"
              />
            </div>
            <div className="size-auto px-6 pt-8 pb-12 bg-[#f2f2f2] rounded-lg flex flex-col justify-start items-stretch gap-8 cols-span-1">
              <HeadingH2 className=" text-primary max-w-80 text-left">
                We would love to
                <br /> hear from you
              </HeadingH2>
              <div className="w-full max-w-full lg:h-144">
                {response?.success && response?.success === true ? (
                  <div className="size-auto mt-6 mx-auto mb-0 px-6 py-5 bg-bg-primary/7 rounded-lg flex lg:flex-row justify-center items-center gap-2">
                    <img
                      src="https://cdn.prod.website-files.com/67f8396791b9193c487e231d/67f8396891b9193c487e23af_Check.svg"
                      className="size-6 max-w-full overflow-clip"
                      alt="check icon"
                    />
                    <p className="text-left text-sm font-medium text-primary leading-4 uppercase">
                      Your Message Has Been Sent
                      <span className="text-xs font-light leading-4 block normal-case">
                        You can expect a response within 24 hours.
                      </span>
                    </p>
                  </div>
                ) : (
                  <Form
                    id="contact-form"
                    method="post"
                    reloadDocument={false}
                    preventScrollReset
                    className="size-auto flex flex-col justify-start items-stretch gap-8"
                  >
                    <div className="size-auto flex flex-col justify-start items-stretch gap-6">
                      <FormInput
                        name="fullname"
                        label="Full Name"
                        placeholder="Kwame O. Nkrumah"
                      />
                      <input
                        name="company"
                        type="text"
                        autoComplete="off"
                        className="hidden"
                      />
                      <div className="size-auto flex flex-col lg:flex-row justify-start items-stretch gap-6 lg:gap-2">
                        <FormInput
                          name="email"
                          label="Email"
                          type="email"
                          placeholder="nkwame.o@gmail.com"
                          required
                        />
                        <FormInput
                          name="phone"
                          label="Phone"
                          placeholder="+233 (0)24 488 2388"
                          required
                        />
                      </div>
                      <FormInputSelect
                        label="Inquiry Type"
                        name="inquiryType"
                        options={[
                          {
                            value: "request-quote",
                            label: "Request for Quotation",
                          },
                          {
                            value: "partnership",
                            label: "Partnership Opportunities",
                          },
                          { value: "volunteer", label: "Volunteering" },
                          { value: "support", label: "Support" },
                          { value: "feedback", label: "Feedback" },
                          { value: "other", label: "Other" },
                        ]}
                      />
                      <FormTextArea
                        name="message"
                        label="Message"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    <button
                      className={cn(
                        "size-auto min-w-0 min-h-0 rounded-full p-[18px] bg-primary border border-primary hover:bg-transparent group duration-400 shrink cursor-auto text-xs text-[#f2f2f2] hover:text-primary font-medium uppercase"
                      )}
                      type="submit"
                    >
                      {navigation.state === "submitting"
                        ? "Sending..."
                        : "Send A Message"}
                    </button>

                    {/* 👇 Turnstile widget */}
                    <div
                      id="turnstile-container"
                      className="cf-turnstile"
                      // data-sitekey="1x00000000000000000000AA" // ✅ Cloudflare test site key
                      data-sitekey="0x4AAAAAABkhzEC1mv9i9DQl"
                      data-callback="onTurnstileSuccess" // ✅ Calls JS function on success
                      data-size="invisible"
                    />
                  </Form>
                )}
                <script
                  src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                  async
                  defer
                />
                {/* 👇 Run Turnstile before form submission */}
                <script
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                  dangerouslySetInnerHTML={{
                    __html: `
                    const form = document.getElementById("contact-form");
                    const turnstileContainer = document.getElementById("turnstile-container");

                    // Prevent default form submission
                    form.addEventListener("submit", function (e) {
                      const tokenInput = form.querySelector('input[name="cf-turnstile-response"]');
                      if (!tokenInput?.value) {
                        e.preventDefault();
                        // Run Turnstile (this triggers data-callback)
                        turnstile.execute(turnstileContainer);
                      }
                    });

                    // Called when Turnstile validates
                    function onTurnstileSuccess(token) {
                      form.submit();
                    }
                    window.onTurnstileSuccess = onTurnstileSuccess;
                  `,
                  }}
                />

                {/* error */}
                {response?.error && (
                  <div className="size-auto mt-6 mx-auto mb-0 px-6 py-5 bg-bg-primary/7 rounded-lg">
                    <p className="text-center text-sm font-normal text-primary leading-4">
                      Oops, sending message failed. Try again.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
