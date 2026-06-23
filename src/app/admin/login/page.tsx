"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? "Erro ao entrar");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-primary-800 bg-primary-900/50 p-8 shadow-xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">CORBO MED</p>
        <h1 className="mt-2 text-2xl font-bold text-white">Entrar no painel</h1>
        <p className="mt-2 text-sm text-white/60">Gerencie os artigos do blog.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {error && (
            <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          )}

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-white/90">E-mail</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
              className="w-full rounded-lg border border-primary-700 bg-primary-950 px-4 py-3 text-sm text-white outline-none focus:border-teal-500"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-white/90">Senha</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-primary-700 bg-primary-950 px-4 py-3 text-sm text-white outline-none focus:border-teal-500"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-teal-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-400 disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
