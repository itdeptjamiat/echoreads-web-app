/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'pub-b8050509235e4bcca261901d10608e30.r2.dev',
      'via.placeholder.com',
      'api.echoreads.online'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Environment variables are automatically available via process.env
  // NEXT_PUBLIC_* variables are exposed to the browser
  // Other variables are only available server-side
  webpack: (config, { isServer }) => {
    // Fix for module resolution issues
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig

