import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.deere.co.in",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
