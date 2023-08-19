const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
});

module.exports = withNextra({
  output: "standalone",
  reactStrictMode: true,
  i18n: {
    locales: ["pt-BR", "en"],
    defaultLocale: "pt-BR",
  },
  // trailingSlash: true,
});
