const { BLOG_URL } = process.env;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      // {
      //   source: '/blog',
      //   destination: `${BLOG_URL}/blog`,
      // },
      // {
      //   source: '/blog/:path*',
      //   destination: `${BLOG_URL}/blog/:path*`,
      // },
    ];
  },
  images: {
    domains: ["static.ascot.ws"],
  },
  env: {
    ACCESS_KEY: process.env.ACCESS_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
    BUCKET_NAME: process.env.BUCKET_NAME,
  },
};
