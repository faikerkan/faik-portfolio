"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Metadata client componentlarda export edilemez; layout'ta başlık zaten set ediliyor.

const contactSchema = z.object({
  name: z.string().min(2, "Ad en az 2 karakter olmalı"),
  email: z.string().email("Geçerli bir e-posta girin"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalı"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    try {
      const FORM_URL =
        process.env.NEXT_PUBLIC_FORMSPREE_URL || "https://formspree.io/f/xqalglly";
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Form gönderimi başarısız");
      alert("Teşekkürler! Mesajınız alındı.");
      reset();
    } catch {
      alert("Şu anda form gönderilemiyor. Lütfen e-posta ile iletin.");
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          İletişim
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div>
            <label className="text-sm text-zinc-300">Ad</label>
            <input
              {...register("name")}
              className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Adınız"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm text-zinc-300">E-posta</label>
            <input
              {...register("email")}
              className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-white/20"
              placeholder="ornek@mail.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="text-sm text-zinc-300">Mesaj</label>
            <textarea
              {...register("message")}
              rows={5}
              className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Mesajınızı yazın"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 disabled:opacity-60"
          >
            Gönder
          </button>
        </form>
      </div>
    </section>
  );
}


