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
        bufferutil: 'bufferutil',
        'utf-8-validate': 'utf-8-validate',
      });
    }
    config.infrastructureLogging = {
      level: 'error',
    };

    // Add error handling for webpack configuration if needed
    try {
      // Additional Webpack configurations if needed
    } catch (err) {
      if (err instanceof Error) {
        console.error('Webpack configuration error:', err.message);
      } else {
        console.error('An unknown error occurred during Webpack configuration.');
      }
    }

    return config;
  },
};

module.exports = withContentlayer(nextConfig);
