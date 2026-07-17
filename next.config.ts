import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Se for usar o GitHub Pages com o nome do repositório (ex: /lumina-landingpage),
  // remova o comentário da linha abaixo e ajuste o nome do repositório:
  // basePath: "/lumina-landingpage",
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
};

export default nextConfig;
