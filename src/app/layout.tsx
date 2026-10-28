import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { YandexMetrika } from "@/components/yandex-metrika";
import { buildMetadata, pages, siteUrl } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata(pages.home),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${manrope.variable} ${syne.variable} h-full`}>
      <body className="min-h-full bg-[#05080f] text-slate-100 antialiased">
        <div className="flex min-h-full flex-col">
          <SiteHeader />
          <Breadcrumbs />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <YandexMetrika />
      </body>
    </html>
  );
}
