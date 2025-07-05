import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['vlmdgeqahhdpdrswaqsh.supabase.co'],
  },
};

export default nextConfig;
