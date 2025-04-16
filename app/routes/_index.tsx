import { Link, useNavigate } from "react-router";

export default function Index() {
  return (
    <div className="h-auto min-h-auto flex flex-col py-1 justify-start items-stretch">
      {/* Wide container */}
      <div className="w-full mx-auto px-1 max-w-none flex flex-col justify-start items-stretch flex-grow-1">
        {/* Hero */}
        <div className="flex flex-col gap-1 justify-start items-stretch flex-grow-1">
          {/* Hero Content Wrapper */}
          <header className="bg-white w-full rounded-lg flex flex-col justify-start items-stretch flex-grow-1">
            {/* Nav */}
            <nav className="w-full flex justify-between items-center p-6 border-b border-black/10"></nav>

            {/* Hero content  */}
            <div className="w-full relative p-6 pb-10 flex flex-col justify-end items-start gap-4 z-10">
              <PrimaryChips text="Building full-scale systems" />
              <div className="w-full flex flex-col justify-start items-stretch lg:items-start lg:grid grid-cols-1 lg:grid-cols-4 gap-8">
                <h1 className="max-w-2xl my-0 text-4xl lg:text-6xl text-primary tracking-tighter text-balance col-span-3">
                  Digital solutions, Engineered for Growth.
                </h1>
                <div className="flex flex-col justify-between items-stretch lg:items-start gap-y-6">
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

export function PrimaryChips({ text }: { text: string }) {
  return (
    <div className="max-w-max flex items-center gap-x-1.5 py-[6px] px-[10px] border border-primary rounded-full ">
      <span className="size-1 bg-primary rounded-full animate-pulse-2x" />
      <p className=" text-primary font-medium uppercase text-xs">{text}</p>
    </div>
  );
}

export function PrimaryButton({
  to,
  text,
  onClick,
}: {
  to?: string;
  text: string;
  onClick?: () => void;
}) {
  const naviagate = useNavigate();

  return (
    <Link
      to={typeof to === "string" ? to : ""}
      onClick={typeof to === "string" ? () => naviagate(to) : onClick}
      className="size-auto min-w-0 min-h-0 rounded-full px-[18px] py-3 bg-primary border border-primary hover:bg-transparent group duration-300 shrink cursor-pointer"
    >
      <div className="relative flex flex-col jutsify-start items-center">
        <p className="w-auto h-auto text-center text-xs text-white font-medium uppercase rotate-x-0 group-hover:rotate-x-90 transition-all origin-top transform-3d duration-200">
          {text}
        </p>
        <p className="w-auto h-auto text-center text-xs text-primary font-medium uppercase -rotate-x-90 group-hover:rotate-x-0 transition-all origin-bottom transform-3d duration-200 absolute inset-auto bottom-0">
          {text}
        </p>
      </div>
    </Link>
  );
}

export function BigButton({
  name,
  to,
  description,
  bgColor,
}: {
  name: string;
  to: string;
  description: string;
  bgColor?: string;
}) {
  return (
    <Link
      to={to}
      className={
        "w-auto group h-auto bg-primary hover:opacity-85 flex flex-col justify-start items-stretch gap-x-1.5 py-7 px-6 grow rounded-lg select-none gap-20 transition-all duration-300"
      }
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center gap-2">
        <span className="h-1.5 bg-white w-0 -translate-x-1.5 group-hover:w-1.5 group-hover:translate-x-0 transition-all ease-in-out" />
        <p className="text-white font-medium uppercase text-sm -translate-x-2.5 group-hover:opacity-100 group-hover:translate-x-0 duration-300 transition-all">
          {name}
        </p>
      </div>
      <p className="text-sm text-white font-normal max-w-52">{description}</p>
    </Link>
  );
}

export function GridLines() {
  return (
    <div className="absolute grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 select-none inset-0 z-0 pointer-events-none">
      <div className="hidden border-l border-black/10 lg:block select-none"></div>
      <div className="hidden border-l border-black/10 lg:block select-none"></div>
      <div className="border-l border-black/10 select-none"></div>
      <div className="border-l border-r border-black/10 lg:border-r-none select-none"></div>
    </div>
  );
}
