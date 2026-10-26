import Link from "next/link";
import { PhoneButtons } from "@/components/phone-buttons";
import { servicesCatalog, type ServiceSlug } from "@/lib/services";

type ServiceSidebarProps = {
  currentSlug?: ServiceSlug;
};

export function ServiceSidebar({ currentSlug }: ServiceSidebarProps) {
  const others = servicesCatalog.filter((s) => s.slug !== currentSlug);

  return (
    <aside className="space-y-6">
      <section className="premium-panel rounded-2xl p-5">
        <h3 className="font-display text-lg font-semibold text-white">Вызов мастера</h3>
        <p className="mt-2 text-sm text-slate-300">Стоимость уточняем по телефону — выезд круглосуточно.</p>
        <div className="mt-4">
          <PhoneButtons />
        </div>
      </section>

      <section className="premium-panel rounded-2xl p-5">
        <h3 className="font-display text-lg font-semibold text-white">Все услуги</h3>
        <ul className="mt-3 max-h-80 space-y-2 overflow-y-auto text-sm text-slate-300">
          {others.map((item) => (
            <li key={item.slug}>
              <Link href={`/uslugi/${item.slug}/`} className="transition hover:text-amber-300">
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/uslugi/" className="font-medium text-amber-300">
              Каталог услуг
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
}
