/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "api.microlink.io", pathname: "/**" },
    ],
  },
}

module.exports = nextConfig
