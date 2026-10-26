import Link from "next/link";
import { ArticleSidebar } from "@/components/article-sidebar";
import { FadeIn } from "@/components/motion/fade-in";
import { PageBanner } from "@/components/premium/page-banner";
import { premium } from "@/lib/media";
import { buildMetadata, pages } from "@/lib/seo";
import { adviceList } from "@/lib/site";

export const metadata = buildMetadata(pages.sovety);

export default function SovetyPage() {
  return (
    <>
      <PageBanner
        title="Полезные советы DoctorShina.by"
        subtitle="Шиномонтажные и шиноремонтные работы - это не просто обыденная услуга, но и безопасность Вас и Ваших близких."
        image={premium.promo}
      />
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
          <ArticleSidebar
            title="Мобильный шиномонтаж"
            text="Вызвать передвижной шиномотаж в Минске можно, позвонив в круглосуточную службу DoctorShina.by"
          />

          <div className="space-y-5">
            {adviceList.map((item, index) => (
              <FadeIn key={item.slug} delay={index * 0.05}>
                <article className="premium-panel rounded-2xl p-6 transition hover:border-amber-300/25">
                  <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.excerpt}</p>
                  <Link href={`/sovety/${item.slug}/`} className="mt-4 inline-block font-semibold text-amber-300 hover:underline">
                    Подробнее &gt;&gt;
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
