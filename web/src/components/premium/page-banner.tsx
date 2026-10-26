import Image from "next/image";
import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion/fade-in";

type PageBannerProps = {
  title: string;
  subtitle?: string;
  image: string;
  children?: ReactNode;
};

export function PageBanner({ title, subtitle, image, children }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05080f]/30 via-[#05080f]/75 to-[#05080f]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">DoctorShina.by</p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            {title}
          </h1>
          {subtitle ? <p className="mt-4 max-w-2xl text-lg text-slate-300">{subtitle}</p> : null}
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
