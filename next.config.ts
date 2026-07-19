import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Required for JamBot canvas iframe embedding (cross-origin dev server)
  allowedDevOrigins: ["*.jam-bot.com"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
