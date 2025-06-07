/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { 
    unoptimized: true 
  },
  // Configuração otimizada para deploy em Vercel/Netlify
  trailingSlash: false,
  swcMinify: true,
};

module.exports = nextConfig;
