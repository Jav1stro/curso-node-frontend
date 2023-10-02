/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ebayimg.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "img.fruugo.com",
        port: "",
        pathname: "/product/**",
      },
      {
        protocol: "https",
        hostname: "vice-press.com",
        port: "",
        pathname: "/cdn/**",
      },
      {
        protocol: "https",
        hostname: "i.etsystatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
