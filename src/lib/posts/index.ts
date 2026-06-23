import { calcReadTime, formatPostDate } from "@/lib/utils";
import { staticPosts } from "./static-posts";
import type { DbPost, PostCard, PostFormData } from "./types";
import { createAdminSupabaseClient, createPublicSupabaseClient } from "@/lib/supabase/server";
import { isSupabaseAdminConfigured, isSupabaseConfigured } from "@/lib/supabase/config";

export function toPostCard(post: DbPost): PostCard {
  return {
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    image: post.image,
    date: formatPostDate(post.published_at),
    dateISO: post.published_at.slice(0, 10),
    readTime: calcReadTime(post.content),
    category: post.category,
  };
}

export async function getPublishedPosts(): Promise<DbPost[]> {
  if (!isSupabaseConfigured()) {
    return staticPosts.filter((p) => p.status === "published");
  }

  try {
    const supabase = createPublicSupabaseClient();
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error) throw error;
    if (!data?.length) {
      return staticPosts.filter((p) => p.status === "published");
    }
    return data as DbPost[];
  } catch {
    return staticPosts.filter((p) => p.status === "published");
  }
}

export async function getPublishedPostBySlug(slug: string): Promise<DbPost | null> {
  if (!isSupabaseConfigured()) {
    return staticPosts.find((p) => p.slug === slug && p.status === "published") ?? null;
  }

  try {
    const supabase = createPublicSupabaseClient();
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    if (error) throw error;
    if (data) return data as DbPost;

    return staticPosts.find((p) => p.slug === slug && p.status === "published") ?? null;
  } catch {
    return staticPosts.find((p) => p.slug === slug && p.status === "published") ?? null;
  }
}

export async function getAllPostsAdmin(): Promise<DbPost[]> {
  if (!isSupabaseAdminConfigured()) {
    return staticPosts;
  }

  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("published_at", { ascending: false });

  if (error) throw error;
  return (data ?? []) as DbPost[];
}

export async function getPostByIdAdmin(id: string): Promise<DbPost | null> {
  if (!isSupabaseAdminConfigured()) return null;

  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase.from("posts").select("*").eq("id", id).maybeSingle();

  if (error) throw error;
  return (data as DbPost) ?? null;
}

export async function createPostAdmin(input: PostFormData): Promise<DbPost> {
  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase
    .from("posts")
    .insert({
      title: input.title,
      slug: input.slug,
      excerpt: input.excerpt,
      content: input.content,
      image: input.image,
      category: input.category,
      published_at: input.published_at,
      status: input.status,
    })
    .select("*")
    .single();

  if (error) throw error;
  return data as DbPost;
}

export async function updatePostAdmin(id: string, input: PostFormData): Promise<DbPost> {
  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase
    .from("posts")
    .update({
      title: input.title,
      slug: input.slug,
      excerpt: input.excerpt,
      content: input.content,
      image: input.image,
      category: input.category,
      published_at: input.published_at,
      status: input.status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select("*")
    .single();

  if (error) throw error;
  return data as DbPost;
}

export async function deletePostAdmin(id: string): Promise<void> {
  const supabase = createAdminSupabaseClient();
  const { error } = await supabase.from("posts").delete().eq("id", id);
  if (error) throw error;
}

export async function getPublishedSlugs(): Promise<string[]> {
  const posts = await getPublishedPosts();
  return posts.map((p) => p.slug);
}
