import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yummiyaam.umern.designtocodes.com",
        pathname: "/_next/static/media/**",
      },
    ],
  },
};

export default nextConfig;
