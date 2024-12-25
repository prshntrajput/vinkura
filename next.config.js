// next.config.js

module.exports = {
  siteUrl: 'https://vinkura.in', // Replace with your site URL
  generateRobotsTxt: true, // Generate robots.txt file
  images: {
    domains: ['cdn.hashnode.com', 'images.unsplash.com'], // Add all required domains here
  },
  eslint: {
    ignoreDuringBuilds: true, // Allow builds to complete even with ESLint errors
  },
};
