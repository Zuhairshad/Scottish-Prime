import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Frap } from "@/components/frap";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scottish Prime Energy, Compare Business Energy in 30 Seconds",
  description:
    "The UK's leading business energy comparison marketplace. Switch electricity and gas suppliers online in seconds. Trusted by 500,000+ UK businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${inter.variable} ${lora.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Frap />
      </body>
    </html>
  );
}
