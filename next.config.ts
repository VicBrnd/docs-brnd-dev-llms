import type { NextConfig } from "next";

import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://wallpapercave.com/**")],
  },
  async rewrites() {
    return [
      {
        source: "/docs/:path*.mdx",
        destination: "/llms.mdx/:path*",
      },
    ];
  },
};

export default withMDX(nextConfig);
