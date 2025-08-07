Kişisel web sitesi — Faik Erkan

Bu proje, Next.js 15 + TailwindCSS 4 kullanılarak oluşturulmuş, karanlık tema ve Bauhaus etkili modern bir kişisel web sitesidir.

## Kurulum

1) Bağımlılıklar

```bash
npm install
```

2) Geliştirme

```bash
npm run dev
```

3) Üretim

```bash
npm run build && npm start
```

## Teknolojiler

- Next.js 15 (App Router)
- TailwindCSS 4
- Framer Motion (animasyon)
- React Hook Form + Zod (form & doğrulama)
- Lucide Icons

## Yapı

- `src/app` — sayfalar, layout ve global stiller
- `src/components` — Navbar, Footer ve UI bileşenleri
- `src/lib` — yardımcı fonksiyonlar

## Deploy

- Vercel önerilir. Projeyi import et ve aşağıdaki env değişkenini ekle:

```
NEXT_PUBLIC_SITE_URL=https://<senin-domainin>
```

- Geliştirme için `.env.local` örneği:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```
