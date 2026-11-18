/** @type {import('next').NextConfig} */
const resolvedBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.VERCEL ? "" : "/elearning");

const nextConfig = {
  reactStrictMode: true,
  // Permite abrir el servidor de desarrollo desde la IP de la red local
  // (sin esto Next bloquea chunks con 403 y el WebSocket de HMR falla)
  allowedDevOrigins: ["192.168.88.12", "192.168.*.*"],
  // Export estático solo en el build (Hostalia). En `next dev` se desactiva para
  // que las rutas dinámicas (/admin/courses/<id>) funcionen con IDs reales en
  // lugar de exigir que estén en generateStaticParams (en producción las
  // resuelve el .htaccess hacia _placeholder).
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
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
