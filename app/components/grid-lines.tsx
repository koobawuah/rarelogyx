export default function GridLines() {
  return (
    <div className="absolute grid grid-cols-2 lg:grid-cols-4 gap-2 px-6 select-none inset-0 z-0 pointer-events-none">
      <div className="hidden border-l border-black/10 lg:block select-none"></div>
      <div className="hidden border-l border-black/10 lg:block select-none"></div>
      <div className="border-l border-black/10 select-none"></div>
      <div className="border-l border-r border-black/10 lg:border-r-none select-none"></div>
    </div>
  );
}
