/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/sobre",
        destination: "/about",
      },
      {
        source: "/contato",
        destination: "/contact",
      },
      {
        source: "/jornalistico",
        destination: "/journalistic",
      },
      {
        source: "/publicitario",
        destination: "/publicity",
      },
    ];
  },
  images: {
    domains: [
      "strapi.brunavaltrick.com.br",
      "brunavaltrick.com.br",
      "res.cloudinary.com",
    ],
  },
  pageExtensions: ["tsx"],
};
