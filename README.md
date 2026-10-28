# DoctorShina.by

Сайт на **Next.js 16** (App Router), **Tailwind CSS**, **Framer Motion**.

## Локально

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000)

## Сборка на хостинге (статика в `dist/`)

```bash
npm ci
npm run build
```

После сборки залейте **содержимое папки `dist/`** в корень сайта на хостинге (Apache/nginx). Для Apache в сборку уже попадает `public/.htaccess` с редиректами со старых URL.

Локально проверить статику:

```bash
npm start
```

(отдаёт папку `dist/` через `serve`)

### SEO

- Мета-теги: `src/lib/seo.ts`, страницы услуг — `src/lib/services.ts`
- **`/robots.txt`** и **`/sitemap.xml`** генерируются при сборке (`src/app/robots.ts`, `src/app/sitemap.ts`)
- Канонический домен: `https://doctorshina.by` (`siteUrl` в `src/lib/seo.ts`)

### Редиректы со старого сайта

В `next.config.ts` настроены постоянные редиректы с `/price/`, `/gallery/`, `*.php` и т.п. на новые URL.

### Статика

Картинки и иконки: `public/images/`, статьи — `public/gallery/`.

## Структура

```
src/app/          — страницы (App Router)
src/components/   — UI
src/lib/          — SEO, услуги, контент
public/           — статические файлы
```
