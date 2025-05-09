import Footer from "./footer/footer";
import GridLines from "./grid-lines";
import Header from "./header/header";
import PrimaryButton from "./primary-button";
import PrimaryChips from "./primary-chips";

export default function ErrorPage({
  message,
  details,
  stack,
}: {
  message: string;
  details: string;
  stack: string | undefined;
}) {
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
                <PrimaryChips text={stack ? `Error: ${stack}` : "Error"} />
                <div className="w-full flex flex-col justify-start items-stretch lg:items-start lg:grid grid-cols-1 lg:grid-cols-4 gap-2 lg:gap-2">
                  <h1 className="max-w-2xl my-0 text-4xl lg:text-[64px] font-normal text-primary tracking-[-0.04em] lg:tracking-[-0.04em] text-balance col-span-3">
                    {message === "Ooops... Page Not Found" ? (
                      <>
                        {message.split(" ")?.[0]}
                        <br />
                        {message.split(" ").slice(1).join(" ")}
                      </>
                    ) : (
                      message
                    )}
                  </h1>
                  <div className="py-1 flex flex-col justify-between items-stretch lg:items-start lg:h-full gap-6">
                    <p className="max-w-96 lg:max-w-[280px] text-primary text-sm leading-4">
                      {details}
                    </p>
                    <PrimaryButton to="/" text="Go To Home" />
                  </div>
                </div>
                <GridLines />
              </div>
            </header>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
