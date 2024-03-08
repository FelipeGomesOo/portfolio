const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin(
  // Specify a custom path here
  './i18n.ts'
);
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
module.exports = withNextIntl(nextConfig);