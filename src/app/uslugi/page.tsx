import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { PageBanner } from "@/components/premium/page-banner";
import { serviceImages } from "@/lib/media";
import { buildMetadata, pages } from "@/lib/seo";
import { servicesCatalog } from "@/lib/services";

export const metadata = buildMetadata(pages.uslugi);

export default function UslugiPage() {
  return (
    <>
      <PageBanner
        title="Услуги мобильного шиномонтажа"
        subtitle="Каждая услуга — отдельный выезд с оборудованием. Минск и Беларусь, 24/7."
        image={serviceImages["remont-prokolov"]}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {servicesCatalog.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.04}>
              <Link
                href={`/uslugi/${service.slug}/`}
                className="group premium-frame flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:border-amber-300/30"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1280px) 50vw, 33vw"
                    quality={90}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-display text-lg font-bold text-white">{service.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-slate-300">{service.excerpt}</p>
                  <span className="mt-4 text-sm font-semibold text-amber-300 group-hover:underline">
                    Подробнее →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
