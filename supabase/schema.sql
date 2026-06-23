-- CORBO MED – schema do blog (executar no SQL Editor do Supabase)

create extension if not exists "pgcrypto";

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null default '',
  image text not null default '/images/blogs/nexoblog.png',
  category text not null default 'Perícia Médica',
  published_at timestamptz not null default now(),
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists posts_status_published_at_idx
  on public.posts (status, published_at desc);

alter table public.posts enable row level security;

-- Leitura pública apenas de posts publicados
drop policy if exists "Public can read published posts" on public.posts;
create policy "Public can read published posts"
  on public.posts for select
  using (status = 'published');

-- Posts iniciais (mesmos do site)
insert into public.posts (title, slug, excerpt, content, image, category, published_at, status)
values
  (
    'O que é Nexo Causal e por que é fundamental em processos judiciais?',
    'nexo-causal-processos-judiciais',
    'Entenda como a prova do nexo causal entre o dano e o evento pode determinar o resultado de uma ação judicial e como uma perícia médica especializada é indispensável.',
    'Este artigo aborda em detalhes os aspectos técnicos e jurídicos relacionados ao nexo causal em processos judiciais.

A perícia médica é um instrumento técnico-científico fundamental na instrução de processos. Um laudo pericial bem elaborado pode ser determinante para o resultado de uma ação.',
    '/images/blogs/nexoblog.png',
    'Perícia Médica',
    '2026-05-05T12:00:00+00',
    'published'
  ),
  (
    'Doenças Ocupacionais: como a perícia médica protege seus direitos',
    'doencas-ocupacionais-pericia-medica',
    'LER, DORT, PAIR e outras doenças ocupacionais podem garantir indenizações e benefícios ao trabalhador. Saiba como a perícia médica documenta esses casos.',
    'Doenças ocupacionais exigem documentação técnica precisa. A perícia médica especializada analisa o nexo entre o trabalho e o agravo à saúde do trabalhador.',
    '/images/blogs/saudeblog.png',
    'Saúde Ocupacional',
    '2026-04-20T12:00:00+00',
    'published'
  ),
  (
    'Assistente técnico x Perito judicial: qual a diferença e quando contratar?',
    'assistente-tecnico-vs-perito-judicial',
    'Advogados frequentemente confundem os dois papéis. Entenda as diferenças, as responsabilidades de cada um e a importância de ter um bom assistente técnico no seu lado.',
    'Perito judicial e assistente técnico têm papéis distintos no processo. Conhecer essa diferença é essencial para uma estratégia processual eficaz.',
    '/images/blogs/peritoblog.png',
    'Direito Médico',
    '2026-04-08T12:00:00+00',
    'published'
  ),
  (
    'Como funciona o processo de perícia médica judicial: guia completo',
    'como-funciona-pericia-medica-judicial',
    'Entenda passo a passo como funciona uma perícia médica judicial, os direitos das partes, o papel do perito e do assistente técnico e como se preparar.',
    'Guia completo sobre o fluxo da perícia médica judicial, desde a nomeação do perito até a entrega do laudo pericial.',
    '/images/blogs/periciablog.png',
    'Perícia Judicial',
    '2026-03-15T12:00:00+00',
    'published'
  ),
  (
    'Invalidez permanente em seguros de vida: como calcular e comprovar',
    'invalidez-permanente-seguros-vida',
    'Entenda o que configura invalidez permanente para fins de seguro, como é calculado o percentual e qual documentação médica é necessária para acionar a cobertura.',
    'A invalidez permanente em seguros de vida exige comprovação médica rigorosa. Saiba como a perícia documenta o percentual e os critérios técnicos.',
    '/images/blogs/invalidezblog.png',
    'Seguros',
    '2026-03-01T12:00:00+00',
    'published'
  ),
  (
    'Burnout como doença ocupacional: o que a perícia médica avalia',
    'burnout-doenca-ocupacional-pericia',
    'Com o reconhecimento do burnout pela OMS como doença ocupacional, a demanda por perícias especializadas cresceu. Saiba o que é analisado pelo médico perito.',
    'O burnout reconhecido pela OMS como fenômeno ocupacional demanda avaliação pericial criteriosa sobre nexo causal e incapacidade.',
    '/images/blogs/burnoutblog.png',
    'Saúde Mental',
    '2026-02-15T12:00:00+00',
    'published'
  )
on conflict (slug) do nothing;
