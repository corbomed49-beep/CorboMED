"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { slugify } from "@/lib/utils";
import type { DbPost, PostStatus } from "@/lib/posts/types";

const categories = [
  "Perícia Médica",
  "Saúde Ocupacional",
  "Direito Médico",
  "Perícia Judicial",
  "Seguros",
  "Saúde Mental",
];

type PostFormProps = {
  post?: DbPost;
};

export default function PostForm({ post }: PostFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
  const [content, setContent] = useState(post?.content ?? "");
  const [image, setImage] = useState(post?.image ?? "");
  const [category, setCategory] = useState(post?.category ?? "Perícia Médica");
  const [status, setStatus] = useState<PostStatus>(post?.status ?? "draft");
  const [publishedAt, setPublishedAt] = useState(
    post?.published_at?.slice(0, 10) ?? new Date().toISOString().slice(0, 10)
  );
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [slugTouched, setSlugTouched] = useState(Boolean(post?.slug));

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slugTouched) {
      setSlug(slugify(value));
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    const form = new FormData();
    form.append("file", file);

    const res = await fetch("/api/admin/upload", { method: "POST", body: form });
    const data = await res.json();
    setUploading(false);

    if (!res.ok) {
      setError(data.error ?? "Erro ao fazer upload");
      return;
    }

    setImage(data.url);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!image) {
      setError("Adicione uma imagem de capa antes de salvar.");
      setLoading(false);
      return;
    }

    const payload = {
      title,
      slug,
      excerpt,
      content,
      image,
      category,
      status,
      published_at: new Date(`${publishedAt}T12:00:00.000Z`).toISOString(),
    };

    const url = post ? `/api/admin/posts/${post.id}` : "/api/admin/posts";
    const method = post ? "PATCH" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? "Erro ao salvar");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  async function handleDelete() {
    if (!post) return;
    if (!confirm("Tem certeza que deseja excluir este artigo?")) return;

    setLoading(true);
    const res = await fetch(`/api/admin/posts/${post.id}`, { method: "DELETE" });
    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Erro ao excluir");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Título *">
          <input
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
            className={inputClass}
          />
        </Field>

        <Field label="Slug (URL) *">
          <input
            value={slug}
            onChange={(e) => {
              setSlugTouched(true);
              setSlug(slugify(e.target.value));
            }}
            required
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Resumo *">
        <textarea
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          rows={3}
          className={inputClass}
        />
      </Field>

      <Field label="Conteúdo do artigo">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={14}
          placeholder="Escreva o texto do artigo. Parágrafos separados por linha em branco. Use **negrito** e ## Título."
          className={inputClass}
        />
      </Field>

      {/* Upload de imagem */}
      <Field label="Imagem de capa *">
        <div className="space-y-3">
          {/* Preview */}
          {image && (
            <div className="relative h-44 w-full overflow-hidden rounded-xl border border-primary-700">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt="Preview da capa"
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                onClick={() => { setImage(""); if (fileInputRef.current) fileInputRef.current.value = ""; }}
                className="absolute right-2 top-2 rounded-full bg-black/60 px-2.5 py-1 text-xs text-white hover:bg-black/80"
              >
                Trocar
              </button>
            </div>
          )}

          {/* Botão de upload */}
          {!image && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-dashed border-primary-600 bg-primary-900/40 py-8 text-sm text-white/60 transition-colors hover:border-teal-500 hover:text-teal-400 disabled:opacity-60"
            >
              {uploading ? (
                <>
                  <span className="animate-spin">⟳</span> Enviando…
                </>
              ) : (
                <>
                  <span className="text-xl">↑</span> Clique para enviar a imagem de capa
                </>
              )}
            </button>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleImageUpload}
            className="hidden"
          />
          <p className="text-xs text-white/40">JPG, PNG ou WebP · Máximo 5 MB</p>
        </div>
      </Field>

      <div className="grid gap-6 md:grid-cols-3">
        <Field label="Categoria">
          <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Data de publicação">
          <input
            type="date"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label="Status">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as PostStatus)}
            className={inputClass}
          >
            <option value="draft">Rascunho</option>
            <option value="published">Publicado</option>
          </select>
        </Field>
      </div>

      <div className="flex flex-wrap items-center gap-3 border-t border-primary-800 pt-6">
        <button
          type="submit"
          disabled={loading || uploading}
          className="rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-400 disabled:opacity-60"
        >
          {loading ? "Salvando..." : post ? "Salvar alterações" : "Criar artigo"}
        </button>

        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="rounded-lg border border-primary-700 px-6 py-3 text-sm font-medium text-white/80 hover:bg-primary-800"
        >
          Cancelar
        </button>

        {post && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={loading}
            className="ml-auto rounded-lg border border-red-500/50 px-6 py-3 text-sm font-medium text-red-300 hover:bg-red-500/10 disabled:opacity-60"
          >
            Excluir
          </button>
        )}
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white/90">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-primary-700 bg-primary-900/80 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-teal-500";
