import type { ClassValue } from "clsx";
import { useState } from "react";
import { Link } from "react-router";
import { cn } from "~/libs/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="size-auto flex flex-col justify-start items-stretch lg:border-b lg:border-black/10 lg:p-6 lg:grid lg:grid-cols-4 lg:gap-8">
      {/* Menu and logo button */}
      <div className="bg-[#f2f2f2] flex flex-row justify-between items-center p-6 gap-6 border-b border-black/10 lg:border-b-0 lg:p-0 relative z-30">
        <Link to="/">
          <img
            src="/images/rarelogyx.logo.png"
            alt="Rarelogyx Primary Logo"
            className="w-36 px-1"
          />
        </Link>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-xs text-primary font-medium uppercase lg:hidden"
        >
          Menu
        </button>
      </div>
      {/* nav content wrapper */}
      <div
        data-open={isOpen}
        className={cn(
          "w-auto m-1 px-6 pt-20 bg-[#f2f2f2] overflow-hidden rounded-lg absolute top-0 left-0 transition-all duration-500 ease-in-out z-20 lg:rounded-none lg:opacity-100 lg:relative lg:translate-y-0 lg:size-auto lg:px-0 lg:pt-0 lg:mx-0 lg:col-span-3 lg:grid lg:grid-cols-3 gap-2 shrink",
          isOpen ? "max-h-dvh opacity-100" : "max-h-0 opacity-0 lg:max-h-max"
        )}
      >
        {/* Nav content */}
        <div className="flex flex-col items-stretch mt-6 gap-10 lg:mt-0 lg:col-span-3 lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Menu items wrapper */}
          <div className="flex flex-col justify-start items-stretch gap-3 lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-8">
            <ul className="flex flex-col justify-start items-start gap-3">
              <MenuItem to="/about" text="About" />
              <MenuItem to="/projects" text="Projects" />
            </ul>
            <ul className="flex flex-col justify-start items-start gap-3">
              <MenuItem to="/services" text="Services" />
              <MenuItem to="/contact" text="Contact Us" />
            </ul>
          </div>
          <div>
            <MenuItem
              to="https://map.google.com/maps/place/Dr+aggrey+street"
              text="GK1 Asofan Ave, Ofankor. Accra Ghana."
              base
              className="items-start uppercase"
            />
          </div>
          <div className="w-full h-auto min-h-60 relative rounded-lg border border-white/20 overflow-hidden grow lg:hidden">
            <img
              src="/images/office-space.jpg"
              alt="Office space"
              className="size-full max-w-full overflow-clip"
            />
          </div>
        </div>
        <img
          src="/images/rarelogyx.logo.png"
          alt="Rarelogyx Primary Logo"
          className="w-full my-20 lg:hidden"
        />
      </div>
    </nav>
  );
}

export function MenuItem({
  to,
  text,
  base,
  txtLink,
  className,
}: {
  to: string;
  text: string;
  base?: boolean;
  txtLink?: boolean;
  className?: ClassValue;
}) {
  return (
    <li
      className={cn(
        "flex flex-row justify-start items-center gap-2 p-0.5 group",
        base ? "transition-all duration-200 hover:opacity-70" : "",
        className
      )}
    >
      <span
        className={cn(
          !base
            ? "size-0 bg-primary -translate-x-1.5 group-hover:size-1.5 group-hover:translate-x-0 transition-all ease-in-out"
            : "size-1.5 bg-primary my-[7px]"
        )}
      />
      <Link
        to={to}
        className={cn(
          !base
            ? "text-xl font-normal capitalize leading-none text-primary lg:text-sm lg:font-medium lg:uppercase -translate-x-2.5 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all"
            : "max-w-60 font-medium leading-none lg:text-sm text-primary lg:uppercase lg:max-w-48 lg:font-medium"
        )}
      >
        {text}
      </Link>
    </li>
  );
}
