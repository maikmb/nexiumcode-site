import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site totalmente estático: gera ./out para ser servido pelo nginx no K3s.
  output: "export",
};

export default nextConfig;
