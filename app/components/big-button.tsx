import { Link } from "react-router";

export default function BigButton({
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
