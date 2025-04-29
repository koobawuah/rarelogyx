import SectionBlock from "~/components/section-block";
import type { Route } from "../+types/root";
import PrimaryChips from "~/components/primary-chips";
import HeadingH2 from "~/components/heading-h2";
import PrimaryButton from "~/components/primary-button";
import { siteConfig } from "~/site.config";
import ProjectItem from "~/components/project-item";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `RARELOGYX - Project` },
    { name: "description", content: "" },
  ];
}

export default function Project() {
  return (
    <>
      <SectionBlock></SectionBlock>
    </>
  );
}
