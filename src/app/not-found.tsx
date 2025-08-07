import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] grid place-items-center">
      <div className="text-center">
        <div className="mx-auto h-24 w-24 rounded-full border border-white/10 grid place-items-center bg-white/5">
          <div className="h-10 w-10 rotate-45 bg-gradient-to-br from-zinc-200 to-zinc-500" />
        </div>
        <h1 className="mt-6 text-3xl font-semibold">Sayfa bulunamadı</h1>
        <p className="mt-2 text-zinc-400">
          Aradığınız sayfa kaldırılmış veya hiç var olmamış olabilir.
        </p>
        <Link href="/" className="mt-6 inline-block text-zinc-200 underline">
          Anasayfa’ya dön →
        </Link>
      </div>
    </section>
  );
}


