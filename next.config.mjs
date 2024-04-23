const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your custom webpack configurations here
  webpack: (config, { isServer }) => {
    // Add aliasing for imports
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    config.resolve.alias['@data'] = path.join(__dirname, 'data');
    // Add more aliases as needed

    return config;
  },
};

module.exports = nextConfig;
