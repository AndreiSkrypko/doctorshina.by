import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { PageBanner } from "@/components/premium/page-banner";
import { PhoneButtons } from "@/components/phone-buttons";
import { premium } from "@/lib/media";
import { buildMetadata, pages } from "@/lib/seo";
import { phones } from "@/lib/site";

export const metadata = buildMetadata(pages.kontakty);

export default function KontaktyPage() {
  return (
    <>
      <PageBanner
        title="Контакты DoctorShina.by"
        subtitle="Круглосуточный выездной шиномонтаж в Минске и по Беларуси. Звоните — мастер выедет в ближайшее время."
        image={premium.hero}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="premium-panel h-full rounded-3xl p-8">
              <h2 className="font-display text-2xl font-bold text-white">Позвонить</h2>
              <p className="mt-2 text-slate-300">Звонки принимаются круглосуточно, без выходных.</p>
              <ul className="mt-8 space-y-4">
                {phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={phone.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-amber-300/30"
                    >
                      <Image src={phone.icon} alt="" width={28} height={28} />
                      <span className="text-xl font-semibold text-white group-hover:text-amber-200">{phone.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PhoneButtons size="large" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="premium-panel h-full rounded-3xl p-8">
              <h2 className="font-display text-2xl font-bold text-white">Реквизиты и связь</h2>
              <dl className="mt-6 space-y-5 text-slate-300">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Соцсети</dt>
                  <dd className="mt-1">
                    <a
                      href="https://vk.com/id441043559"
                      rel="nofollow"
                      className="text-lg text-amber-300 transition hover:underline"
                    >
                      Наша группа Вконтакте
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Юридическое лицо</dt>
                  <dd className="mt-1 text-lg text-white">ИП Маренин Денис Викторович</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">УНП</dt>
                  <dd className="mt-1 text-lg text-white">691827218</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Режим работы</dt>
                  <dd className="mt-1 text-lg text-white">24 часа · 7 дней в неделю</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Зона выезда</dt>
                  <dd className="mt-1">Минск — прибытие от 15 минут. По всей Республике Беларусь.</dd>
                </div>
              </dl>
              <p className="mt-8 text-sm text-slate-400">
                Стоимость выезда — 18 руб. Точная цена работ зависит от услуги — подскажем по телефону.
              </p>
              <Link
                href="/uslugi/"
                className="mt-6 inline-flex rounded-full border border-amber-300/40 px-5 py-2.5 text-sm font-semibold text-amber-200 transition hover:bg-amber-400/10"
              >
                Смотреть услуги
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
