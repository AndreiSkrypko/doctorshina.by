import Image from "next/image";
import { phones } from "@/lib/site";

type PhoneButtonsProps = {
  size?: "default" | "large";
};

export function PhoneButtons({ size = "default" }: PhoneButtonsProps) {
  const large = size === "large";
  return (
    <ul className={`flex flex-col ${large ? "gap-3" : "gap-2"}`}>
      {phones.map((phone) => (
        <li key={phone.href}>
          <a
            href={phone.href}
            className={`group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 font-bold text-slate-950 shadow-[0_12px_40px_rgba(245,158,11,0.35)] transition hover:scale-[1.02] hover:brightness-105 ${
              large ? "px-5 py-4 text-lg" : "px-4 py-3 text-base"
            }`}
          >
            <Image src={phone.icon} alt="" width={22} height={22} className="transition group-hover:scale-110" />
            {phone.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
