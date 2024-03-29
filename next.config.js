const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler:{
    removeConsole:true,
  }
}

module.exports = withContentlayer(nextConfig,{webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push({ bufferutil: "bufferutil", "utf-8-validate": "utf-8-validate"}); 
      return config;
    }}})
