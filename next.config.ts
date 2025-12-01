import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  
  turbopack: {},
  
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
    // Отключить автоматический preload для изображений
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
  },
  
  // Отключить избыточный prefetch для Link компонентов
  reactStrictMode: true,
  
  headers: async () => [
    {
      source: '/_next/static/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
    {
      source: '/fonts/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};

export default nextConfig;
