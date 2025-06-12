import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // to insert photos from any website we need to register here
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", //this is a gmail account image which is provide by google auth
      },
    ],
  },
};

export default nextConfig;
