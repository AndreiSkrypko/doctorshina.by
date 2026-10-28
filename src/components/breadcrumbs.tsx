"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { articleSeo, siteUrl } from "@/lib/seo";
import { serviceBySlug, type ServiceSlug } from "@/lib/services";

type Crumb = { label: string; href?: string };

const sectionLabels: Record<string, string> = {
  uslugi: "Услуги",
  kontakty: "Контакты",
  sovety: "Полезные советы",
};

function buildCrumbs(pathname: string): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return [];

  const crumbs: Crumb[] = [{ label: "Главная", href: "/" }];

  if (segments[0] === "uslugi") {
    crumbs.push({ label: "Услуги", href: segments.length > 1 ? "/uslugi/" : undefined });
    if (segments[1]) {
      const service = serviceBySlug[segments[1] as ServiceSlug];
      crumbs.push({ label: service?.title ?? segments[1] });
    }
    return crumbs;
  }

  if (segments[0] === "sovety") {
    crumbs.push({ label: "Полезные советы", href: segments.length > 1 ? "/sovety/" : undefined });
    if (segments[1]) {
      const article = articleSeo[segments[1] as keyof typeof articleSeo];
      crumbs.push({ label: article?.title ?? segments[1] });
    }
    return crumbs;
  }

  if (segments[0] === "kontakty") {
    crumbs.push({ label: sectionLabels.kontakty });
    return crumbs;
  }

  const label = sectionLabels[segments[0]];
  if (label) crumbs.push({ label });
  return crumbs;
}

function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${siteUrl}${crumb.href}` } : {}),
    })),
  };
}

export function Breadcrumbs() {
  const pathname = usePathname() ?? "/";
  const crumbs = buildCrumbs(pathname);

  if (crumbs.length === 0) return null;

  const jsonLd = breadcrumbJsonLd(crumbs);

  return (
    <nav
      aria-label="Хлебные крошки"
      className="border-b border-white/5 bg-[#05080f]/70 pt-20 backdrop-blur-sm md:pt-[4.75rem]"
    >
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-sm md:px-8">
        {crumbs.map((crumb, index) => {
          const last = index === crumbs.length - 1;
          return (
            <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
              {index > 0 ? (
                <span className="text-slate-600 select-none" aria-hidden>
                  /
                </span>
              ) : null}
              {crumb.href && !last ? (
                <Link href={crumb.href} className="text-slate-400 transition hover:text-amber-300">
                  {crumb.label}
                </Link>
              ) : (
                <span className={last ? "font-medium text-amber-100/90" : "text-slate-400"} aria-current={last ? "page" : undefined}>
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </nav>
  );
}
