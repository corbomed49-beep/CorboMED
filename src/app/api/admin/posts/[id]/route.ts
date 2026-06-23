import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth/session";
import { deletePostAdmin, getPostByIdAdmin, updatePostAdmin } from "@/lib/posts";
import { slugify } from "@/lib/utils";
import { isSupabaseAdminConfigured } from "@/lib/supabase/config";
import type { PostFormData } from "@/lib/posts/types";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const authed = await getAdminSession();
  if (!authed) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { id } = await context.params;

  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });
  }

  try {
    const post = await getPostByIdAdmin(id);
    if (!post) {
      return NextResponse.json({ error: "Post não encontrado" }, { status: 404 });
    }
    return NextResponse.json({ post });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao buscar post" }, { status: 500 });
  }
}

export async function PATCH(request: Request, context: RouteContext) {
  const authed = await getAdminSession();
  if (!authed) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });
  }

  const { id } = await context.params;

  try {
    const body = await request.json();
    const input = normalizePostInput(body);
    const post = await updatePostAdmin(id, input);
    return NextResponse.json({ post });
  } catch (error: unknown) {
    console.error(error);
    const message =
      error && typeof error === "object" && "code" in error && error.code === "23505"
        ? "Já existe um post com este slug"
        : "Erro ao atualizar post";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const authed = await getAdminSession();
  if (!authed) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json({ error: "Supabase não configurado" }, { status: 503 });
  }

  const { id } = await context.params;

  try {
    await deletePostAdmin(id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao excluir post" }, { status: 500 });
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
