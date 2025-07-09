import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import ScreenLines from "./components/screen-lines";
import { GlobalPendingIndicator } from "./components/global-pending-indicator";
import ErrorPage from "./components/404";
import { inject } from "@vercel/analytics";

inject();
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* <title>RARELOGYX - Digital Solutions, Engineered for Growth.</title> */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <Meta />
        <Links />
      </head>
      <body className="relative">
        <GlobalPendingIndicator />
        <ScreenLines />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Ooops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message =
      error.status === 404 ? "Ooops... Page Not Found" : "An Error Occured";
    details =
      error.status === 404
        ? "We couldn’t find the page you requested. Please go back to our homepage for more information."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <ErrorPage message={message} details={details} stack={stack} />
    // <main className="pt-16 p-4 container mx-auto">
    //   <h1>{message}</h1>
    //   <p>{details}</p>
    //   {stack && (
    //     <pre className="w-full p-4 overflow-x-auto text-aswhite">
    //       <code>{stack}</code>
    //     </pre>
    //   )}
    // </main>
  );
}
