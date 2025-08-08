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
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
      ],
    },
  ],
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
