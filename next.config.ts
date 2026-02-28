import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/offhand",
  assetPrefix: "/offhand/",
};

export default nextConfig;
