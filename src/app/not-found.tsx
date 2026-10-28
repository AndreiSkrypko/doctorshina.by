import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-start justify-center px-4 py-16 md:px-6">
      <h1 className="text-3xl font-bold text-white">Страница не найдена</h1>
      <p className="mt-3 text-slate-300">Вернитесь на главную или позвоните нам — мы на связи 24/7.</p>
      <Link href="/" className="mt-6 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-slate-950">
        На главную
      </Link>
    </section>
  );
}
