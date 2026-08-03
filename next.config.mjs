/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: "/Data-analyst-portfolio",

  assetPrefix: "/Data-analyst-portfolio",

  trailingSlash: true,
};

export default nextConfig;
