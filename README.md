# NexiumCode — site + CMS próprio

App full-stack em **Next.js 16** (App Router) com **Prisma + SQLite**, **NextAuth v4**
(credenciais) e painel administrativo em `/gerencial`. O site público lê todo o
conteúdo do banco em runtime; o admin edita fundadores, produtos, serviços,
valores e configurações (WhatsApp, contato, hero, missão, visão), com upload de
fotos/logos.

## Stack
- Next.js 16 + React 19 + Tailwind v4 (paleta *ocean blue*, fonte Plus Jakarta Sans)
- Prisma 6 + SQLite (`DATABASE_URL`)
- NextAuth v4 (CredentialsProvider, sessão JWT, bcrypt)
- framer-motion (efeitos), lucide-react (ícones), react-dropzone (uploads)

## Rodando local
```bash
npm install

# 1) gerar client + criar o banco
DATABASE_URL="file:./dev.db" npx prisma generate
DATABASE_URL="file:./dev.db" npx prisma db push

# 2) semear admin + conteúdo inicial (idempotente)
DATABASE_URL="file:./dev.db" ADMIN_EMAIL=contato@nexiumcode.com.br ADMIN_PASSWORD=teste123 node seed.mjs

# 3) build + start (ou `npm run dev` para desenvolvimento)
DATABASE_URL="file:./dev.db" NEXTAUTH_SECRET=devsecret NEXTAUTH_URL=http://localhost:3000 npm run build
DATABASE_URL="file:./dev.db" NEXTAUTH_SECRET=devsecret NEXTAUTH_URL=http://localhost:3000 npm start
```
Veja `.env.example` para todas as variáveis.

- Site público: `/`
- Login admin: `/login`
- Painel: `/gerencial` (protegido por middleware → redireciona p/ `/login` sem sessão)

## Estrutura
- `prisma/schema.prisma` — modelos (User, SiteSetting, Founder, Product, Service, Value)
- `seed.mjs` — admin + conteúdo inicial (idempotente; roda no start do container)
- `lib/` — `prisma.ts`, `auth.ts`, `content.ts` (leitura c/ fallback), `serviceIcons.tsx`, `guard.ts`
- `app/api/admin/*` — CRUD protegido (founders/products/services/values/settings)
- `app/api/upload` — upload protegido → `public/uploads/`
- `components/` — site público (props do banco) + `components/admin/*` (painel)

## Produção (container)
`docker build` usa o `Dockerfile` (Node 20, `prisma generate`, `next build`). No
start: `prisma db push && node seed.mjs && next start`. Variáveis esperadas:
`DATABASE_URL=file:/app/data/nexium.db`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`,
`ADMIN_EMAIL`, `ADMIN_PASSWORD`. Montar volumes em `/app/data` (banco) e
`/app/public/uploads` (imagens).
