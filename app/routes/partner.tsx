import type { Route } from "../+types/root";

export function meta({ params }: Route.MetaArgs) {
  return [{ title: "RARELOGYX Partner Program" }];
}

export default function Partner() {
  return (
    <div className="h-[100vh] p-2.5">
      <div className="p-1.5 bg-white size-full border border-white rounded-lg">
        <iframe
          src="https://tally.so/r/wdopoD?transparentBackground=1&formEventsForwarding=1"
          width="100%"
          height="100%"
          title="RARELOGYX Partner Program"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
    </div>
  );
}
