const { withContentlayer } = require('next-contentlayer2');

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push({
        bufferutil: "bufferutil",
        "utf-8-validate": "utf-8-validate"
      });
    }
    return config;
  }
};

module.exports = withContentlayer(nextConfig);

