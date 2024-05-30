/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**",
      }, {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      }, {
        protocol: "https",
        hostname: "media1.tenor.com",
        port: "",
        pathname: "/**",
      },
      
      
    ],
  },
};

module.exports = nextConfig;
