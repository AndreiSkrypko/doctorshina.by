import Link from "next/link";
import { adviceList } from "@/lib/site";
import { PhoneButtons } from "./phone-buttons";

type ArticleSidebarProps = {
  currentSlug?: string;
  title?: string;
  text?: string;
};

export function ArticleSidebar({
  currentSlug,
  title = "Передвижной шиномонтаж",
  text = "Вызвать передвижной шиномотаж в Минске круглосуточно можно, позвонив в круглосуточную службу DoctorShina.by",
}: ArticleSidebarProps) {
  const others = adviceList.filter((a) => a.slug !== currentSlug);

  return (
    <aside className="space-y-6">
      <section className="premium-panel rounded-2xl p-5">
        <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">{text}</p>
        <PhoneButtons />
      </section>

      <section className="premium-panel rounded-2xl p-5">
        <h3 className="mb-3 text-lg font-semibold text-white">Другие полезные советы</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={`/sovety/${item.slug}/`} className="transition hover:text-amber-300">
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/sovety/" className="font-medium text-amber-300">
              Все статьи
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
}
