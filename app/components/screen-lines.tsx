export default function ScreenLines() {
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center fixed z-100 pointer-events-none select-none">
      <div className="w-full max-w-482 h-1 px-1 bg-bg-primary block relative pointer-events-none">
        <img
          src="/Corner.svg"
          alt="corner decoration"
          className="size-2 max-w-full overflow-clip pointer-events-none select-none absolute inset-auto top-1 left-1"
        />
        <img
          src="/Corner.svg"
          alt="corner decoration"
          className="size-2 max-w-full overflow-clip pointer-events-none select-none absolute inset-auto top-1 right-1 rotate-90"
        />
      </div>
      <div className="w-full max-w-482 h-1 px-1 bg-bg-primary block relative pointer-events-none">
        <img
          src="/Corner.svg"
          alt="corner decoration"
          className="size-2 max-w-full overflow-clip pointer-events-none select-none absolute inset-auto bottom-1 left-1 -rotate-90"
        />
        <img
          src="/Corner.svg"
          alt="corner decoration"
          className="size-2 max-w-full overflow-clip pointer-events-none select-none absolute inset-auto bottom-1 right-1 rotate-180"
        />
      </div>
    </div>
  );
}
