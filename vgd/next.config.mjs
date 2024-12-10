/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/" : "",
  images: {
    unoptimized: true,
  },
  basePath: "",
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
