export default function HeadingH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl leading-[46px] tracking-[-1.76px] text-center text-white text-clip lg:text-[44px]">
      {children}
    </h2>
  );
}
