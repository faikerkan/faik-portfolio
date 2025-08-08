import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "react-hook-form",
    ],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "faikerkan.info" }],
        destination: "https://www.faikerkan.info/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
