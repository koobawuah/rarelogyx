import type { ReactNode } from "react";
import LinkItem from "../link-item";

export default function FooterMenu({
  heading,
  links,
}: {
  heading: string;
  links: { to: string; label: string | ReactNode }[];
}) {
  return (
    <div className="size-auto flex flex-col justify-start items-stretch gap-4">
      <p className="text-primary/70 font-medium text-xs tracking-wide uppercase">
        {heading}
      </p>
      <div className="size-auto flex flex-col justify-start items-start gap-1.5">
        {links.length > 0 ? (
          links.map((link, id) => (
            <LinkItem key={link.to} to={link.to}>
              {link.label}
            </LinkItem>
          ))
        ) : (
          <LinkItem to="/">Home</LinkItem>
        )}
      </div>
    </div>
  );
}
