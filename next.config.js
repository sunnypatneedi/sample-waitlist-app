/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for better development practices
  reactStrictMode: true,
  
  // Enable SWC minification for better performance
  swcMinify: true,
  
  // Configure images for Next.js Image optimization
  images: {
    // Add your image domains here if you're using external image sources
    domains: [],
    // Enable modern formats like WebP and AVIF
    formats: ['image/avif', 'image/webp'],
  },

  // Environment variables that should be available to the client
  env: {
    // Add any client-side environment variables here
    // These will be inlined at build time
  },

  // Enable production browser source maps
  productionBrowserSourceMaps: false, // Set to true for debugging production builds

  // Configure webpack
  webpack: (config, { isServer }) => {
    // Add custom webpack configuration here if needed
    
    // Important: return the modified config
    return config;
  },

  // Enable experimental features (only if needed)
  experimental: {
    // Enable server components (if using the app directory)
    serverComponents: true,
    // Enable new Next.js Link behavior
    newNextLinkBehavior: true,
  },

  // Configure headers (these will be overridden by Netlify's _headers file)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },

  // Configure redirects (these will be overridden by Netlify's _redirects file)
  async redirects() {
    return [
      // Add any redirects you need here
    ];
  },

  // Configure rewrites (for API routes or other rewrites)
  async rewrites() {
    return [
      // Add any rewrites you need here
    ];
  },
};

module.exports = nextConfig;
