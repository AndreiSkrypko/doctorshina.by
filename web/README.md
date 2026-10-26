# DoctorShina.by — Next.js

Современная версия сайта на **Next.js (App Router)** + **Tailwind CSS** + **Framer Motion**.

## Запуск

```bash
cd web
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
npm start
```

## SEO

`<title>`, `description` и `keywords` сохранены с оригинальных PHP-страниц (см. `src/lib/seo.ts`).

## Статика

Изображения лежат в `public/images` и `public/gallery` (скопированы из legacy-сайта).
Сгенерированные баннеры: `public/images/generated/`.

## Деплой

Подходит Vercel, Node-хостинг или Docker. Для замены старого сайта на домене настройте reverse proxy на `next start` (порт 3000) и сохраните редиректы — часть уже в `next.config.ts`.

Legacy PHP-файлы остаются в корне репозитория для справки.
