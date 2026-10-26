"use client";

import { phones } from "@/lib/site";

export function CallDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0a101c]/95 p-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        {phones.map((phone) => (
          <a
            key={phone.href}
            href={phone.href}
            className="rounded-xl bg-amber-400 px-3 py-3 text-center text-sm font-bold text-slate-950"
          >
            Позвонить
          </a>
        ))}
      </div>
    </div>
  );
}
