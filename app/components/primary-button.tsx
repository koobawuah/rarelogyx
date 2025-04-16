import { Link, useNavigate } from "react-router";

export default function PrimaryButton({
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
      onClick={onClick && onClick}
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
