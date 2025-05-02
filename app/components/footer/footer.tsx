import GridLines from "../grid-lines";
import FooterMenu from "./footer-menu";

export default function Footer() {
  return (
    <div className="pb-1">
      {/* Wide Container */}
      <div className="w-full mx-auto px-1 lg:max-w-482">
        {/* Footer Block */}
        <div className="px-6 pt-8 pb-5 bg-[#f2f2f2] text-primary rounded-lg flex flex-col justify-start items-stretch gap-6 lg:gap-0 relative">
          {/* Footer Content */}
          <div className="size-auto flex flex-col-reverse justify-start items-stretch gap-40 lg:grid lg:grid-cols-4 lg:gap-2">
            {/* Footer Main Wrapper */}
            <div className="size-auto flex flex-col justify-start items-stretch gap-6 lg:justify-between lg:gap-5 lg:col-span-1">
              <div className="size-auto flex flex-col justify-start items-start gap-5">
                <img
                  src="/images/rarelogyx.logo.png"
                  alt="Rarelogyx official logo"
                  className="w-36 px-1"
                />
                <p className="max-w-42 text-primary/70 text-xs font-normal uppercase">
                  We create innovative software solutions that inspire and
                  endure.
                </p>
              </div>
              <div className="size-auto flex flex-col justify-start items-start gap-1.5">
                <a
                  href="#"
                  className="text-primary/70 text-xs font-medium leading-4 uppercase"
                >
                  Licenses
                </a>
                <p className=" text-primary/70 text-xs font-medium leading-4 uppercase">
                  &copy; {new Date().getFullYear()}, RARELOGYX
                </p>
              </div>
            </div>
            {/* Footer Menu */}
            <div className="size-auto flex flex-col justify-start items-stretch gap-8 lg:col-span-3 lg:grid lg:grid-cols-3 lg:gap-2 ">
              <FooterMenu
                heading="Menu"
                links={[
                  { to: "/about", label: "About" },
                  { to: "/projects", label: "Projects" },
                  { to: "/services", label: "Services" },
                  { to: "/contact-us", label: "Contact Us" },
                ]}
              />
              <FooterMenu
                heading="Follow Us"
                links={[
                  {
                    to: "https://www.linkedin.com/company/rarelogyx",
                    label: "LinkedIn",
                  },
                  { to: "https://x.com/#", label: "X (Twitter)" },
                  { to: "https://instagram.com/#", label: "Instagram" },
                ]}
              />
              <FooterMenu
                heading="Address"
                links={[
                  {
                    to: "https://map.google.com/maps/place/Dr+aggrey+street",
                    label: (
                      <span>
                        GK1 Asofan Ave,
                        <br /> Ofankor. Accra Ghana.
                      </span>
                    ),
                  },
                ]}
              />
            </div>
          </div>
          <img
            src="/images/rarelogyx.logo.png"
            alt="Rarelogyx Company BW logo"
            className="w-[52.5%] h-auto max-w-full my-5 lg:my-37.5 mx-auto overflow-clip inline-block opacity-20 grayscale-100"
          />
          <GridLines />
        </div>
      </div>
    </div>
  );
}
