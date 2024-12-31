import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/web-portfolio",
  assetPrefix: "/web-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
