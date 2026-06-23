"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminHeader() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="border-b border-primary-800 bg-primary-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">
            CORBO MED
          </p>
          <h1 className="text-lg font-bold text-white">Painel do Blog</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Ver site
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg border border-primary-700 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-800"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}
