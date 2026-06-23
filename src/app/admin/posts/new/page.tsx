import Link from "next/link";
import AdminHeader from "@/components/admin/AdminHeader";
import PostForm from "@/components/admin/PostForm";

export default function AdminNewPostPage() {
  return (
    <>
      <AdminHeader />
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Link href="/admin" className="text-sm text-teal-400 hover:text-teal-300">
          ← Voltar
        </Link>
        <h2 className="mt-4 text-2xl font-bold text-white">Novo artigo</h2>
        <div className="mt-8">
          <PostForm />
        </div>
      </div>
    </>
  );
}
