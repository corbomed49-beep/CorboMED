export type PostStatus = "draft" | "published";

export type DbPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  published_at: string;
  status: PostStatus;
  created_at: string;
  updated_at: string;
};

export type PostCard = {
  id?: string;
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  date: string;
  dateISO: string;
  readTime: string;
  category: string;
};

export type PostFormData = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  published_at: string;
  status: PostStatus;
};
