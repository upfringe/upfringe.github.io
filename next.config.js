const { withContentlayer } = require('next-contentlayer2');

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: true,
  },
  // Add basePath and assetPrefix for GitHub Pages
  basePath: process.env.GITHUB_ACTIONS && '/upfringe.github.io',
  assetPrefix: process.env.GITHUB_ACTIONS && '/upfringe.github.io/',
};

module.exports = withContentlayer(nextConfig);
