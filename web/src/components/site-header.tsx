"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { navLinks, phones } from "@/lib/site";

function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || !onHome
          ? "border-b border-white/10 bg-[#05080f]/80 shadow-lg shadow-black/30 backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-[#05080f]/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link href="/" className="group transition hover:opacity-95" aria-label="DoctorShina.by — на главную">
          <BrandLogo className="group-hover:brightness-105" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isNavActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-amber-400/15 text-amber-200"
                    : "text-slate-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={phones[0].href}
          className="hidden rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/25 transition hover:brightness-110 md:inline-flex"
        >
          Вызвать мастера
        </a>

        <button
          type="button"
          className="inline-flex rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white lg:hidden"
          aria-expanded={open}
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Закрыть" : "Меню"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#05080f]/95 px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-slate-100 hover:bg-white/5">
                {link.label}
              </Link>
            ))}
            <a href={phones[0].href} className="mt-2 rounded-lg bg-amber-400 px-3 py-3 text-center font-bold text-slate-950">
              Вызвать мастера
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
