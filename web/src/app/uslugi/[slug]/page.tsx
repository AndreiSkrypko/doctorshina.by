import Image from "next/image";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion/fade-in";
import { PageBanner } from "@/components/premium/page-banner";
import { PhoneButtons } from "@/components/phone-buttons";
import { ServiceSidebar } from "@/components/service-sidebar";
import { buildMetadata } from "@/lib/seo";
import { getService, servicesCatalog, type ServiceSlug } from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicesCatalog.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata(service.seo);
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageBanner title={service.title} subtitle={service.excerpt} image={service.image} />
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.85fr]">
          <div className="space-y-8">
            <FadeIn>
              <article className="premium-panel rounded-3xl p-6 md:p-8">
                <p className="text-lg leading-relaxed text-slate-200">{service.lead}</p>
                <ul className="mt-6 space-y-3">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-300">
                      <span className="mt-1 text-amber-300">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>

            <FadeIn delay={0.06}>
              <div className="premium-frame relative aspect-[16/9] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  quality={90}
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="premium-panel rounded-3xl p-6 md:p-8">
                <h2 className="font-display text-xl font-bold text-white">Заказать выезд</h2>
                <p className="mt-2 text-slate-300">
                  Выезд шиномонтажа — 18 руб. Прибытие от 15 минут. Звоните — подберём время и рассчитаем стоимость
                  работ.
                </p>
                <div className="mt-5 max-w-md">
                  <PhoneButtons size="large" />
                </div>
              </div>
            </FadeIn>
          </div>

          <ServiceSidebar currentSlug={service.slug as ServiceSlug} />
        </div>
      </section>
    </>
  );
}
