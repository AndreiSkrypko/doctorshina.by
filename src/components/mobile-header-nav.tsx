"use client";

import Image from "next/image";
import Link from "next/link";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { navLinks, phones } from "@/lib/site";

type MobileNavContextValue = {
  open: boolean;
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  phonesOpen: boolean;
  setPhonesOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
};

const MobileNavContext = createContext<MobileNavContextValue | null>(null);

function useMobileNav() {
  const ctx = useContext(MobileNavContext);
  if (!ctx) throw new Error("MobileNav components must be used within MobileNavProvider");
  return ctx;
}

export function MobileNavProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [phonesOpen, setPhonesOpen] = useState(false);

  return (
    <MobileNavContext.Provider value={{ open, setOpen, phonesOpen, setPhonesOpen }}>
      {children}
    </MobileNavContext.Provider>
  );
}

export function MobileHeaderControls() {
  const { open, setOpen, phonesOpen, setPhonesOpen } = useMobileNav();
  const phonesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!phonesOpen) return;
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (phonesRef.current?.contains(event.target as Node)) return;
      setPhonesOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [phonesOpen, setPhonesOpen]);

  return (
    <div className="flex items-center gap-2 lg:hidden">
      <div ref={phonesRef} className="relative md:hidden">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-300 to-amber-500 px-3 py-2 text-sm font-bold text-slate-950 shadow-md shadow-amber-500/20"
          aria-expanded={phonesOpen}
          aria-haspopup="true"
          aria-label="Выбрать номер для звонка"
          onClick={() => {
            setOpen(false);
            setPhonesOpen((v) => !v);
          }}
        >
          Связаться
        </button>
        {phonesOpen ? (
          <div
            role="menu"
            className="absolute right-0 z-[60] mt-2 w-[min(100vw-2rem,17rem)] overflow-hidden rounded-2xl border border-white/10 bg-[#0a101c]/98 p-2 shadow-xl shadow-black/50 backdrop-blur-xl"
          >
            <p className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Выберите номер
            </p>
            {phones.map((phone) => (
              <a
                key={phone.href}
                role="menuitem"
                href={phone.href}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                onClick={() => setPhonesOpen(false)}
              >
                <Image src={phone.icon} alt="" width={22} height={22} className="shrink-0" />
                {phone.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>

      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
        aria-expanded={open}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={() => {
          setPhonesOpen(false);
          setOpen((v) => !v);
        }}
      >
        <span className="sr-only">{open ? "Закрыть меню" : "Меню"}</span>
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}

export function MobileHeaderMenu() {
  const { open } = useMobileNav();

  if (!open) return null;

  return (
    <div className="border-t border-white/10 bg-[#05080f]/95 px-4 py-3 lg:hidden">
      <div className="mx-auto flex max-w-7xl flex-col gap-1">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-slate-100 hover:bg-white/5">
            {link.label}
          </Link>
        ))}
        <div className="mt-3 space-y-2 border-t border-white/10 pt-3 md:hidden">
          <p className="px-1 text-xs font-semibold uppercase tracking-wider text-slate-500">Позвонить</p>
          {phones.map((phone) => (
            <a
              key={phone.href}
              href={phone.href}
              className="flex items-center gap-3 rounded-lg bg-amber-400/15 px-3 py-2.5 font-semibold text-amber-100"
            >
              <Image src={phone.icon} alt="" width={20} height={20} />
              {phone.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
