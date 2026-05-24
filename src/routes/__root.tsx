import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "msvalidate.01", content: "2F5FBB210D978E81CF8D081D87F0921F" },
      { title: "Wizzy Addon — Best Meteor Client Addon for DonutSMP (Free Download)" },
      {
        name: "description",
        content:
          "Wizzy Addon — Meteor Client addon for DonutSMP with full deepslate bypass. Free .jar download, 90+ modules for Crystal PvP, base finding, and AH sniping on Minecraft 1.21.11.",
      },
      {
        name: "keywords",
        content:
          "Wizzy Addon, Wizzy Addon download, Wizzy Addon donutsmp, best addon donut smp, meteor client addons donutsmp, donutsmp fly bypass, meteor client donutsmp",
      },
      { name: "author", content: "Wizzy Addon" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "application-name", content: "Wizzy Addon" },
      { name: "apple-mobile-web-app-title", content: "Wizzy Addon" },
      { property: "og:site_name", content: "Wizzy Addon" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: "Wizzy Addon — Best Meteor Client Addon for DonutSMP" },
      {
        property: "og:description",
        content:
          "Full deepslate bypass on DonutSMP. 90+ Meteor Client modules. Free Wizzy Addon .jar for Minecraft 1.21.11.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://wizzyaddon.com" },
      {
        property: "og:image",
        content: "https://wizzyaddon.com/og-card.png",
      },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:secure_url", content: "https://wizzyaddon.com/og-card.png" },
      {
        property: "og:image:alt",
        content:
          "Wizzy Addon × DonutSMP — full deepslate bypass. Free Meteor Client addon for Minecraft 1.21.11.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Wizzyaddon" },
      { name: "twitter:title", content: "Wizzy Addon — Best Meteor Client Addon for DonutSMP" },
      {
        name: "twitter:description",
        content: "Full deepslate bypass on DonutSMP. 90+ Meteor Client modules. Free Wizzy Addon download.",
      },
      {
        name: "twitter:image",
        content: "https://wizzyaddon.com/og-card.png",
      },
      {
        name: "twitter:image:alt",
        content: "Wizzy Addon × DonutSMP — full deepslate bypass.",
      },
      { name: "theme-color", content: "#3b82f6" },
      { name: "format-detection", content: "telephone=no" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", sizes: "any", href: "/favicon.png" },
      { rel: "shortcut icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", sizes: "1024x1024", href: "/favicon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Wizzy Addon",
          alternateName: ["Wizzy Meteor Client Addon", "Wizzy DonutSMP Addon"],
          url: "https://wizzyaddon.com",
          image: "https://wizzyaddon.com/og-card.png",
          logo: "https://wizzyaddon.com/favicon.png",
          description:
            "Wizzy Addon — the Meteor Client addon for DonutSMP and Minecraft 1.21.11. Full deepslate bypass, 90+ modules, free .jar download.",
          inLanguage: "en",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://wizzyaddon.com/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Wizzy Addon",
          url: "https://wizzyaddon.com",
          logo: "https://wizzyaddon.com/favicon.png",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
