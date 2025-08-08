import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(request: Request) {
  try {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token)
      return NextResponse.json({ error: "BLOB_READ_WRITE_TOKEN missing" }, { status: 500 });

    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return NextResponse.json({ error: "No file" }, { status: 400 });
    }

    const ext = file.name.split(".").pop() || "bin";
    const key = `images/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const blob = await put(key, file, { access: "public", token });
    return NextResponse.json({ url: blob.url });
  } catch (e) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}


