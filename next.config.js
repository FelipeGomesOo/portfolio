const createNextIntlPlugin = require("next-intl/plugin");
const withOptimizedImages = require("next-optimized-images");
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};
module.exports = withOptimizedImages({
  handleImages: ["jpeg", "png", "svg"],
});

module.exports = withNextIntl(nextConfig);
