// next.config.js

module.exports = {
   // Generate robots.txt file
  images: {
    domains: ['cdn.hashnode.com', 'images.unsplash.com'], // Add all required domains here
  },
  eslint: {
    ignoreDuringBuilds: true, // Allow builds to complete even with ESLint errors
  },
};
