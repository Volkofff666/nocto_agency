import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  
  experimental: {
    optimizePackageImports: ['@vercel/analytics', '@vercel/speed-insights'],
    webpackBuildWorker: true,
  },
  
  // Уменьшить количество chunks
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
        framework: {
          name: 'framework',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
          priority: 40,
          enforce: true,
        },
        lib: {
          test: /[\\/]node_modules[\\/]/,
          name: 'lib',
          priority: 30,
          minChunks: 1,
          reuseExistingChunk: true,
        },
      },
      maxInitialRequests: 5, // Уменьшить с дефолтных 25
    };
    return config;
  },
};

export default nextConfig;
