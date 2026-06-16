import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // App full-stack servido com `next start` (não é mais static export).
  // Uploads locais em /public/uploads — desativamos a otimização de imagem.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
