import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth/session";
import { createAdminSupabaseClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const authed = await getAdminSession();
  if (!authed) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });
    }

    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) {
      return NextResponse.json(
        { error: "Formato inválido. Use JPG, PNG ou WebP." },
        { status: 400 }
      );
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Imagem muito grande. Máximo 5 MB." }, { status: 400 });
    }

    const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const supabase = createAdminSupabaseClient();
    const { error } = await supabase.storage
      .from("blog-images")
      .upload(filename, file, { contentType: file.type, upsert: false });

    if (error) throw error;

    const { data } = supabase.storage.from("blog-images").getPublicUrl(filename);

    return NextResponse.json({ url: data.publicUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Erro ao fazer upload da imagem" }, { status: 500 });
  }
}
