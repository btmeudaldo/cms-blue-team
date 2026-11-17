/** @type {import('next').NextConfig} */
const resolvedBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.VERCEL ? "" : "/elearning");

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: resolvedBasePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: resolvedBasePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
