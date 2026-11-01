"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { OperatorContactButton } from "@/components/operator-contact-button";
import { premium } from "@/lib/media";
import { phones, stats } from "@/lib/site";

export function HeroPremium() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35]);

  return (
    <section ref={ref} className="relative min-h-[92vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-105">
        <Image
          src={premium.hero}
          alt="Передвижной шиномонтаж DoctorShina — выезд круглосуточно"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(251,191,36,0.18),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(45,212,191,0.16),transparent_35%),linear-gradient(180deg,rgba(5,8,15,0.55)_0%,rgba(5,8,15,0.92)_70%,#05080f_100%)]" />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 md:px-8 md:pb-20 lg:pb-24"
      >
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_min(100%,22rem)] lg:items-end lg:gap-10 xl:grid-cols-[minmax(0,1fr)_24rem]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex w-fit max-w-full flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-amber-100 backdrop-blur-md"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              <span className="uppercase tracking-[0.15em] text-slate-300">Минск</span>
              {phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-white transition hover:bg-amber-400/20"
                >
                  <Image src={phone.icon} alt="" width={14} height={14} />
                  {phone.label}
                </a>
              ))}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display max-w-4xl text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-[3.35rem] lg:leading-[1.08] xl:text-7xl"
            >
              Передвижной шиномонтаж круглосуточно в Минске
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base text-slate-200 md:text-lg"
            >
              <p className="font-medium">
                Прибытие — <span className="text-amber-200">от 15 минут</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-8 hidden overflow-hidden rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl sm:block"
            >
              <div className="grid grid-cols-2 divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
                {stats.map((item) => (
                  <div key={item.label} className="px-4 py-4 text-center md:px-5 md:py-5 md:text-left">
                    <p className="font-display text-xl font-bold text-amber-300 md:text-2xl">{item.value}</p>
                    <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 flex flex-wrap gap-2 sm:hidden"
            >
              {stats.map((item) => (
                <span
                  key={item.label}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                >
                  <span className="font-semibold text-amber-200">{item.value}</span> {item.label.toLowerCase()}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-10 lg:mt-0"
          >
            <div className="premium-panel rounded-3xl p-6 shadow-2xl shadow-black/40">
              <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Срочный выезд
              </p>
              <p className="mt-2 text-center text-sm text-slate-300">Круглосуточный выезд · приедем с оборудованием</p>
              <div className="mt-5">
                <OperatorContactButton size="large" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
