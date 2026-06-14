import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Cookies, Scottish Prime Energy",
  description:
    "What cookies Scottish Prime Energy sets, why, and how to manage them.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookies"
      updated="June 2026"
      intro="A short explanation of what cookies this site uses, what each one does, and how you can switch them off. Strictly necessary cookies are set automatically; everything else asks for your consent first."
      sections={[
        {
          heading: "Strictly necessary",
          body: "A single session cookie keeps you signed in to myHUB while you're using it, plus a CSRF cookie protecting form submissions. These can't be switched off; the site won't work without them.",
        },
        {
          heading: "Performance",
          body: "We use a privacy-friendly analytics tool (no third-party trackers) to count page views, quote starts and switch completions. Helps us improve the site. You can opt out via the cookie banner on first visit.",
        },
        {
          heading: "Functional",
          body: "If you set filter or sort preferences on the supplier directory or quote results page, we save them in a cookie so you don't have to reset them next visit. Optional.",
        },
        {
          heading: "Managing cookies",
          body: "You can clear cookies via your browser settings at any time. Browser-level Do Not Track signals are respected — when they're set, performance and functional cookies are disabled by default.",
        },
      ]}
    />
  );
}
