import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article-body";
import { ArticleSidebar } from "@/components/article-sidebar";
import { FadeIn } from "@/components/motion/fade-in";
import { PageBanner } from "@/components/premium/page-banner";
import { premium } from "@/lib/media";
import { articleSeo, buildMetadata, type ArticleSlug } from "@/lib/seo";

const bannerBySlug: Record<ArticleSlug, string> = {
  "kogda-menyat-rezinu": premium.promo,
  "spuskaet-koleso": premium.emergency,
  "priznaki-iznosa-shin": premium.service,
  "prokol-shinyi": premium.gallery[2],
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(articleSeo).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const seo = articleSeo[slug as ArticleSlug];
  if (!seo) return {};
  return buildMetadata(seo);
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const seo = articleSeo[slug as ArticleSlug];
  if (!seo) notFound();

  return (
    <>
      <PageBanner title={seo.title} image={bannerBySlug[slug as ArticleSlug]} />
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr]">
          <FadeIn>
            <article className="premium-panel rounded-3xl p-6 md:p-8">
              <ArticleBody slug={slug as ArticleSlug} />
            </article>
          </FadeIn>
          <ArticleSidebar currentSlug={slug as ArticleSlug} />
        </div>
      </section>
    </>
  );
}
