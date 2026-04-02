import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  pageExtensions: ["ts", "tsx"],
};

export default nextConfig;
