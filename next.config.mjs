import dns from "node:dns";

try {
  dns.setDefaultResultOrder("ipv4first");
} catch {}

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/images/da42/:path*",
        destination: "/images/DA42/:path*",
      },
    ];
  },
};

export default nextConfig;
