import { servicesCatalog } from "@/lib/services";

export const phones = [
  { href: "tel:+375296660844", label: "+375 29 666 0844", icon: "/images/velcome.png" },
  { href: "tel:+375336960844", label: "+375 33 696 0844", icon: "/images/mts.png" },
] as const;

export const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/uslugi/", label: "Услуги" },
  { href: "/sovety/", label: "Полезные советы" },
  { href: "/kontakty/", label: "Контакты" },
] as const;

export const footerNav = navLinks;

export const services = servicesCatalog.map((s) => s.title);

export const advantages = [
  "Прибытие от 15 до 40 минут по Минску",
  "Низкие цены на шиномонтаж с выездом на дом",
  "Передвижной шиномонтаж в Минске работает круглосуточно",
  "Осуществляем работы любой сложности",
  "Шиномонтаж на колесах работает круглый год 24 часа в сутки",
  "Высокое качество и гарантия на выполняемые работы",
  "Покрытие по всей Республике Беларусь",
  "Европейское качество",
  "Только положительные отзывы клиентов",
] as const;

export const workCards = servicesCatalog.map((s) => ({
  slug: s.slug,
  image: s.image,
  title: s.cardTitle ?? s.title,
  alt: s.imageAlt,
}));

export const adviceList = [
  {
    slug: "kogda-menyat-rezinu",
    title: "Когда следует менять сезонную резину",
    excerpt:
      "В данном разделе Вы сможете познакомиться с информацией о рекомендуемых периодах для смены сезонной резины.",
  },
  {
    slug: "spuskaet-koleso",
    title: "Что делать, если спускает колесо?",
    excerpt:
      "В данном разделе Вы сможете познакомиться с информацией о первых  действиях при отсутствии воздуха в колесе.",
  },
  {
    slug: "priznaki-iznosa-shin",
    title: "Первые признаки износа шин",
    excerpt:
      "В этом разделе мы расскажем о то, на что необходимо обратить внимание в Ваших колесах, а именно на какие визуальные дефекты.",
  },
  {
    slug: "prokol-shinyi",
    title: "Алгоритм действий при проколе шины",
    excerpt:
      "Данная статья будет особо важна для начинающих водителей и автоледи. Что делать, если лопнуло колесо?",
  },
] as const;

export const stats = [
  { value: "24/7", label: "Круглосуточно" },
  { value: "15+", label: "Минут до приезда" },
  { value: "18", label: "руб. выезд" },
  { value: "100%", label: "Гарантия работ" },
] as const;
