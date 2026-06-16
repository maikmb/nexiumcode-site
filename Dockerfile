# NexiumCode — app full-stack Next.js (servidor) com SQLite + Prisma.
# Espelha o padrão do projeto-irmão (Cezano), adaptado para SQLite.
FROM node:20-alpine

WORKDIR /app

# openssl é necessário para o Prisma; libc6-compat para binários nativos no Alpine.
RUN apk add --no-cache libc6-compat openssl

COPY package.json ./
RUN npm install --no-audit --no-fund

COPY . .

RUN npx prisma generate
RUN npm run build

# Diretórios graváveis (montados como volume no k8s):
#   /app/data           -> banco SQLite (DATABASE_URL=file:/app/data/nexium.db)
#   /app/public/uploads  -> fotos/logos enviadas pelo painel
RUN mkdir -p public/uploads data

# NOTA SOBRE PERMISSÕES / USUÁRIO:
# Para SQLite em volume montado pelo k8s, manter o processo como root simplifica
# a escrita no volume (evita problemas de fsGroup/ownership). Por isso NÃO criamos
# usuário não-root aqui — é uma escolha consciente para garantir escrita no
# volume do banco e dos uploads. Endurecer via securityContext no manifesto k8s.

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NODE_ENV=production

# Em produção, defina via env do container/secret:
#   DATABASE_URL=file:/app/data/nexium.db
#   NEXTAUTH_SECRET=<segredo forte>
#   NEXTAUTH_URL=https://www.nexiumcode.com
#   ADMIN_EMAIL / ADMIN_PASSWORD
CMD ["sh", "-c", "node_modules/.bin/prisma db push && node seed.mjs && node_modules/.bin/next start -p 3000 -H 0.0.0.0"]
