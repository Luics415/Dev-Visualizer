import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  allowedDevOrigins: ["192.168.100.49", "192.168.100.49:3000", "localhost:3000"],
};

export default nextConfig;
