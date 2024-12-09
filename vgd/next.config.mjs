/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "/van-gogh-digital/" : "",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/van-gogh-digital" : "",
  trailingSlash: true,
  output: "export",
};

export default nextConfig;
