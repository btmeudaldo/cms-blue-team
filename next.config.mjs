import dns from "node:dns";

try {
  dns.setDefaultResultOrder("ipv4first");
} catch {}

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
