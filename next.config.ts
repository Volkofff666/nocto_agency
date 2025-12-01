import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  
  turbopack: {},
  
  // Отключить source maps в production для уменьшения размера
  productionBrowserSourceMaps: false,
  
  // Генерация уникального build ID для сброса кеша
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  
  experimental: {
    optimizePackageImports: [
      '@vercel/analytics', 
      '@vercel/speed-insights'
    ],
    webpackBuildWorker: true,
    optimizeCss: true,
  },
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },
  
  reactStrictMode: true,
  
  headers: async () => [
    {
      source: '/_next/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
        {
          key: 'Connection',
          value: 'keep-alive',
        },
      ],
    },
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
      ],
    },
  ],
};

export default nextConfig;
