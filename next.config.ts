import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Configuração automática para o novo nome do seu repositório:
  basePath: "/lumina",
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
};

export default nextConfig;
