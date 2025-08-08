"use client";

import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [saving, setSaving] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: "<p>Yeni yazıya başlayın…</p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none min-h-[320px] rounded-xl border border-white/10 bg-white/5 p-4 focus:outline-none",
      },
    },
  });

  const canUpload = true;

  const onImageUpload = async (file: File) => {
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: form });
    const data = await res.json();
    if (data.url) {
      editor?.chain().focus().setImage({ src: data.url }).run();
    } else {
      alert("Yükleme başarısız");
    }
  };

  const handleSave = async () => {
    if (!title.trim()) return alert("Başlık gerekli");
    setSaving(true);
    try {
      const payload = {
        title,
        tag,
        html: editor?.getHTML() ?? "",
        date: new Date().toISOString(),
      };
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Kaydedilemedi");
      alert("Yazı kaydedildi");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Yeni Yazı</h1>
        <div className="mt-6 grid gap-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Başlık"
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-white/20"
          />
          <input
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Etiket (ör. Çağrı Merkezi)"
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-white/20"
          />
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-zinc-400">İçerik</span>
              {canUpload && (
                <div className="flex items-center gap-3">
                  <label className="text-sm underline cursor-pointer">
                    Görsel ekle
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => e.target.files && onImageUpload(e.target.files[0])}
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleBold().run()}
                    className="text-xs px-2 py-1 rounded-md border border-white/10 hover:bg-white/5"
                  >
                    Bold
                  </button>
                  <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleItalic().run()}
                    className="text-xs px-2 py-1 rounded-md border border-white/10 hover:bg-white/5"
                  >
                    Italic
                  </button>
                  <button
                    type="button"
                    onClick={() => editor?.chain().focus().setParagraph().run()}
                    className="text-xs px-2 py-1 rounded-md border border-white/10 hover:bg-white/5"
                  >
                    P
                  </button>
                  <button
                    type="button"
                    onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                    className="text-xs px-2 py-1 rounded-md border border-white/10 hover:bg-white/5"
                  >
                    H2
                  </button>
                </div>
              )}
            </div>
            <EditorContent editor={editor} />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={saving}
              className="inline-flex items-center justify-center rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 disabled:opacity-60"
            >
              Kaydet (Taslak)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


