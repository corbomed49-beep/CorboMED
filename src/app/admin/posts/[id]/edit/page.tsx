export const dynamic = "force-dynamic";

import Link from "next/link";
import { notFound } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import PostForm from "@/components/admin/PostForm";
import { getPostByIdAdmin } from "@/lib/posts";
import { isSupabaseAdminConfigured } from "@/lib/supabase/config";

type PageProps = { params: Promise<{ id: string }> };

export default async function AdminEditPostPage({ params }: PageProps) {
  const { id } = await params;

  if (!isSupabaseAdminConfigured()) {
    notFound();
  }

  const post = await getPostByIdAdmin(id);
  if (!post) notFound();

  return (
    <>
      <AdminHeader />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Link href="/admin" className="text-sm text-teal-400 hover:text-teal-300">
          ← Voltar
        </Link>
        <h2 className="mt-4 text-2xl font-bold text-white">Editar artigo</h2>
        <div className="mt-8">
          <PostForm post={post} />
        </div>
      </div>
    </>
  );
}
