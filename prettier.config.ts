import type { PluginConfig } from "@ianvs/prettier-plugin-sort-imports";
import type { Config } from "prettier";
import type { PluginOptions } from "prettier-plugin-tailwindcss";

const config: Config & PluginOptions & PluginConfig = {
  // Core
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",

  // HTML / Markup
  htmlWhitespaceSensitivity: "css",
  singleAttributePerLine: true,
  proseWrap: "always",
  embeddedLanguageFormatting: "auto",

  // Experimental (Prettier 3.x)
  experimentalTernaries: true,
  objectWrap: "collapse",
  experimentalOperatorPosition: "start",

  // Plugins — ORDER IS CRITICAL
  plugins: [
    "prettier-plugin-packagejson",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-jsdoc",
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-astro-organize-imports",
  ],

  // Import sorting
  importOrder: [
    "^(vue/(.*)$)|^(vue$)",
    "<THIRD_PARTY_MODULES>",
    "^(astro/(.*)$)|^(astro$)",
    "^@/(.*)$",
    "^@components/(.*)$",
    "^@layouts/(.*)$",
    "^@assets/(.*)$",
    "^@utils/(.*)$",
    "^[./]",
    String.raw`^.+\.css$`,
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "6.0.0",
  importOrderCaseSensitive: false,

  // Tailwind CSS v4
  tailwindStylesheet: "./src/styles/global.css",
  tailwindFunctions: ["cn", "cva", "clsx", "twMerge"],

  // Astro organize imports
  astroOrganizeImportsMode: "All",

  // File overrides
  overrides: [
    { files: "*.astro", options: { parser: "astro" } },
    { files: ["*.json", "*.jsonc"], options: { printWidth: 80 } },
    { files: ["*.md", "*.mdx"], options: { proseWrap: "always" } },
  ],
};

export default config;
