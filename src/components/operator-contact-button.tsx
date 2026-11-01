"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { phones } from "@/lib/site";

type OperatorContactButtonProps = {
  size?: "default" | "large";
  className?: string;
};

export function OperatorContactButton({ size = "default", className = "" }: OperatorContactButtonProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const large = size === "large";

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (ref.current?.contains(event.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        className={`inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold text-slate-950 shadow-[0_12px_40px_rgba(245,158,11,0.35)] transition hover:scale-[1.02] hover:brightness-105 ${
          large ? "px-5 py-4 text-lg" : "px-4 py-3 text-base"
        }`}
        onClick={() => setOpen((v) => !v)}
      >
        Связаться с оператором
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute inset-x-0 z-[60] mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#0a101c]/98 p-2 shadow-xl shadow-black/50 backdrop-blur-xl"
        >
          {phones.map((phone) => (
            <a
              key={phone.href}
              role="menuitem"
              href={phone.href}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              <Image src={phone.icon} alt="" width={22} height={22} className="shrink-0" />
              {phone.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
