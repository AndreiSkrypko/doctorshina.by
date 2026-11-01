import Image from "next/image";
import Link from "next/link";
import { HeroPremium } from "@/components/home/hero-premium";
import { FadeIn } from "@/components/motion/fade-in";
import { premium, serviceImages } from "@/lib/media";
import { advantages, services, workCards } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <HeroPremium />

      <section className="section-glow border-b border-white/10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-300/90">Акции</p>
            <h2 className="font-display mt-2 text-3xl font-bold text-white md:text-4xl">Выгоднее вместе</h2>
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <FadeIn className="lg:col-span-8">
              <article className="card-shine premium-frame group">
                <div className="relative aspect-[16/10] md:aspect-[16/9]">
                  <Image
                    src={premium.promo}
                    alt="Скидка на шиномонтаж выездной"
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    quality={90}
                  />
                </div>
                <div className="relative z-[2] -mt-16 p-6 md:p-8">
                  <div className="premium-panel max-w-xl rounded-2xl p-6">
                    <h3 className="font-display text-2xl font-bold text-white md:text-3xl">Вместе дешевле!</h3>
                    <p className="mt-3 text-slate-200">
                      Получите скидку 100% на выезд мобильного шиномонтажа в Минске при полном комплексе
                      замены шин от трёх автомобилей.
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>

            <FadeIn delay={0.08} className="lg:col-span-4">
              <article className="premium-frame flex h-full flex-col">
                <div className="relative min-h-[220px] flex-1">
                  <Image
                    src={premium.vygodnyeCeny}
                    alt="Выгодные цены на передвижной шиномонтаж в Минске"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white">Выгодные цены</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Специальные цены круглосуточного мобильного шиномонтажа действуют на все виды услуг —{" "}
                    <Link href="/uslugi/" className="font-semibold text-amber-300 hover:underline">
                      Все услуги
                    </Link>
                    . Высокое качество и гарантия на все работы!
                  </p>
                </div>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <FadeIn>
              <div className="premium-frame relative mb-6 aspect-[16/11]">
                <Image
                  src={serviceImages["hodovaya-chast"]}
                  alt="Услуги передвижного шиномонтажа в Минске"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Наши услуги:</h3>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {services.map((item) => (
                  <li key={item} className="flex gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2 text-sm text-slate-200">
                    <span className="text-teal-300">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.06}>
              <div className="premium-frame relative mb-6 aspect-[16/11]">
                <Image
                  src={serviceImages["proverka-davleniya"]}
                  alt="Преимущества мобильного шиномонтажа"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Наши преимущества:</h3>
              <ul className="mt-5 space-y-2">
                {advantages.map((item) => (
                  <li key={item} className="flex gap-2 text-slate-200">
                    <span className="mt-1 text-amber-300">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-glow border-y border-white/10 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Работы на выезде</h2>
            <p className="mt-2 max-w-2xl text-slate-400">Профессиональный сервис с премиальным оборудованием — прямо у вашего дома или на дороге.</p>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {workCards.map((card, index) => (
              <FadeIn key={card.slug} delay={index * 0.04}>
                <Link
                  href={`/uslugi/${card.slug}/`}
                  className="group premium-frame block transition duration-300 hover:-translate-y-1 hover:border-amber-300/30"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 25vw"
                      quality={90}
                    />
                    <div className="absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-[#05080f] via-[#05080f]/80 to-transparent p-4">
                      <h3 className="font-display text-base font-semibold text-white">{card.title}</h3>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-0">
        <div className="absolute inset-0">
          <Image src={serviceImages["ekstrennaya-pomoshch"]} alt="" fill className="object-cover" quality={90} />
          <div className="absolute inset-0 bg-[#05080f]/80" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">SOS на дороге</p>
            <h3 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
              Если у Вас в дороге случилась беда – DoctorShina поможет всегда!
            </h3>
            <Link
              href="/uslugi/"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-amber-300 to-amber-500 px-8 py-3.5 font-semibold text-slate-950 shadow-lg shadow-amber-500/30 transition hover:brightness-110"
            >
              Каталог услуг
            </Link>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="premium-frame relative aspect-[4/3]">
              <Image
                src={serviceImages["dostavka-pokryshek"]}
                alt="DoctorShina — мобильный шиномонтаж"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
