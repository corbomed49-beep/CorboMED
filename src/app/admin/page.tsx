export const dynamic = "force-dynamic";

import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import { getAllPostsAdmin } from "@/lib/posts";
import type { DbPost } from "@/lib/posts/types";
import { isSupabaseAdminConfigured } from "@/lib/supabase/config";
import { formatPostDate } from "@/lib/utils";

export default async function AdminDashboardPage() {
  let posts: DbPost[] = [];
  let dbReady = isSupabaseAdminConfigured();

  if (dbReady) {
    try {
      posts = await getAllPostsAdmin();
    } catch {
      dbReady = false;
    }
  }

  return (
    <>
      <AdminHeader />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {!dbReady && (
          <div className="mb-6 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
            Supabase ainda não configurado. O site público usa os posts estáticos. Configure o{" "}
            <code className="rounded bg-black/30 px-1">.env.local</code> e execute o SQL em{" "}
            <code className="rounded bg-black/30 px-1">supabase/schema.sql</code> para salvar
            artigos.
          </div>
        )}

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">Artigos</h2>
            <p className="text-sm text-white/60">{posts.length} no total</p>
          </div>
          <Link
            href="/admin/posts/new"
            className="rounded-lg bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-400"
          >
            + Novo artigo
          </Link>
        </div>

        <div className="overflow-hidden rounded-xl border border-primary-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-primary-900/80 text-white/70">
              <tr>
                <th className="px-4 py-3 font-medium">Título</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">Categoria</th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">Data</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-white/50">
                    Nenhum artigo ainda. Crie o primeiro ou rode o SQL de seed.
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post.id} className="border-t border-primary-800/80">
                    <td className="px-4 py-4">
                      <p className="font-medium text-white">{post.title}</p>
                      <p className="text-xs text-white/45">/blog/{post.slug}</p>
                    </td>
                    <td className="hidden px-4 py-4 text-white/70 md:table-cell">{post.category}</td>
                    <td className="hidden px-4 py-4 text-white/70 sm:table-cell">
                      {formatPostDate(post.published_at)}
                    </td>
                    <td className="px-4 py-4">
                      <StatusBadge status={post.status} />
                    </td>
                    <td className="px-4 py-4 text-right">
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="text-teal-400 hover:text-teal-300"
                      >
                        Editar
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function StatusBadge({ status }: { status: string }) {
  const published = status === "published";
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
        published ? "bg-teal-500/20 text-teal-300" : "bg-white/10 text-white/60"
      }`}
    >
      {published ? "Publicado" : "Rascunho"}
    </span>
  );
}
