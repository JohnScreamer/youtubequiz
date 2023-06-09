const withNextIntl = require("next-intl/plugin")(
    // This is the default (also the `src` folder is supported out of the box)
    "./i18n.ts"
);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { domains: ["i.ytimg.com"] },
};

module.exports = withNextIntl(nextConfig);
