import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { footerNav, phones } from "@/lib/site";
import { servicesCatalog } from "@/lib/services";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#020408]">
      <div className="section-glow mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <BrandLogo />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Передвижной шиномонтаж в Минске и по Беларуси. Выезд круглосуточно, гарантия на работы, прибытие от 15
              минут.
            </p>
            <ul className="mt-6 space-y-3">
              {phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="inline-flex items-center gap-2 text-base font-medium text-white transition hover:text-amber-300"
                  >
                    <Image src={phone.icon} alt="" width={20} height={20} />
                    {phone.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Навигация</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-amber-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Услуги</h3>
            <ul className="mt-4 grid gap-2.5 text-sm text-slate-300 sm:grid-cols-2">
              {servicesCatalog.map((service) => (
                <li key={service.slug}>
                  <Link href={`/uslugi/${service.slug}/`} className="transition hover:text-amber-300">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Контакты</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/kontakty/" className="font-medium text-amber-300 transition hover:underline">
                  Все контакты
                </Link>
              </li>
              <li>
                <a href="https://vk.com/id441043559" rel="nofollow" className="transition hover:text-amber-300">
                  ВКонтакте
                </a>
              </li>
              <li className="text-slate-500">Звонки 24/7</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-sm text-slate-500">
        © 2017 DoctorShina.by - Клуглосуточный выездной шиномонтаж.
      </div>
    </footer>
  );
}
