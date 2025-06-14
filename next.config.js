const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Configure allowed image domains
  images: {
    domains: ['d1olseq3j3ep4p.cloudfront.net'],
  },
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
