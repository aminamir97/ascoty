module.exports = {
  images: {
    domains: ["http://static.ascot.ws/"],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
    ];
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    NEXT_APP_BACKEND_URL: process.env.NEXT_APP_BACKEND_URL,
    ACCESS_KEY: process.env.ACCESS_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
    BUCKET_NAME: process.env.BUCKET_NAME,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};
