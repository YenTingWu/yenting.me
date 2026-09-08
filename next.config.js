/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next 16 only serves qualities listed here. `StyledImage` in
    // app/components/mdx.tsx renders MDX images at quality={100}.
    qualities: [75, 100],
  },
};

module.exports = nextConfig;
