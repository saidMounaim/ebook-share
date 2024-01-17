/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "xdilkry3y1uyobbp.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
