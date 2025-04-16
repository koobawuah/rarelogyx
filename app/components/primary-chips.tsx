export default function PrimaryChips({ text }: { text: string }) {
  return (
    <div className="max-w-max flex items-center gap-x-1.5 py-[6px] px-[10px] border border-primary rounded-full ">
      <span className="size-1 bg-primary rounded-full animate-pulse-2x" />
      <p className=" text-primary font-medium uppercase text-xs">{text}</p>
    </div>
  );
}
