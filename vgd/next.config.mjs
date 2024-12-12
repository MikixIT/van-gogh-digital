const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  basePath: "/van-gogh-digital",
  trailingSlash: true,
};

export default nextConfig;
