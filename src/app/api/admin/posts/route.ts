import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth/session";
import { createPostAdmin, getAllPostsAdmin } from "@/lib/posts";
import { slugify } from "@/lib/utils";
import { isSupabaseAdminConfigured } from "@/lib/supabase/config";
import type { PostFormData } from "@/lib/posts/types";

export async function GET() {
  const authed = await getAdminSession();
  if (!authed) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json({
      posts: [],
      warning: "Supabase não configurado. Configure .env.local para salvar posts.",
    });
  }

  try {
    const posts = await getAllPostsAdmin();
    return NextResponse.json({ posts });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao buscar posts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const authed = await getAdminSession();
  if (!authed) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json(
      { error: "Supabase não configurado. Impossível salvar posts." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const input = normalizePostInput(body);
    const post = await createPostAdmin(input);
    return NextResponse.json({ post }, { status: 201 });
  } catch (error: unknown) {
    console.error(error);
    const message =
      error && typeof error === "object" && "code" in error && error.code === "23505"
        ? "Já existe um post com este slug"
        : "Erro ao criar post";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function normalizePostInput(body: Record<string, unknown>): PostFormData {
  const title = String(body.title ?? "").trim();
  const slug = String(body.slug ?? "").trim() || slugify(title);
  const excerpt = String(body.excerpt ?? "").trim();
  const content = String(body.content ?? "").trim();
  const image = String(body.image ?? "").trim() || "/images/blogs/nexoblog.png";
  const category = String(body.category ?? "").trim() || "Perícia Médica";
  const status = body.status === "draft" ? "draft" : "published";
  const published_at = String(body.published_at ?? new Date().toISOString());

  if (!title || !excerpt) {
    throw new Error("Título e resumo são obrigatórios");
  }

  return { title, slug, excerpt, content, image, category, published_at, status };
}
