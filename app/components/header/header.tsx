import { Link } from "react-router";

export default function Header() {
  return (
    <nav className="size-auto flex flex-col justify-start items-stretch border-b border-black/10">
      <div className="flex flex-row justify-between items-center p-6 gap-6">
        <Link to="/">
          <img src="/images/rarelogyx.logo.png" className="w-36 px-1" />
        </Link>
        <button className="text-xs text-primary font-medium uppercase">
          Menu
        </button>
      </div>
    </nav>
  );
}
