import path from "node:path";
import { fileURLToPath } from "node:url";

import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginAstro from "eslint-plugin-astro";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import security from "eslint-plugin-security";
import unicorn from "eslint-plugin-unicorn";
import { defineConfig } from "eslint/config";
import globals from "globals";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {any} */
const ts = tsPlugin;

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = defineConfig(
  ...(ts.configs["flat/recommended"] ?? []),
  ...eslintPluginAstro.configs["flat/recommended"],
  ...eslintPluginAstro.configs["flat/jsx-a11y-recommended"],
  unicorn.configs.recommended,

  // Unicorn overrides
  {
    rules: {
      "unicorn/filename-case": "off",
      "unicorn/name-replacements": "off",
      "unicorn/no-null": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/prefer-math-trunc": "off",
      "unicorn/prefer-string-slice": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/no-empty-file": "off",
      "unicorn/prefer-logical-operator-over-ternary": "off",
      "unicorn/text-encoding-identifier-case": "off",
      "unicorn/consistent-boolean-name": "off",
      "unicorn/no-top-level-side-effects": "off",
      "unicorn/no-unnecessary-global-this": "off",
      "unicorn/prefer-ternary": "off",
      "unicorn/no-computed-property-existence-check": "off",
      "unicorn/no-top-level-assignment-in-function": "off",
      "unicorn/prefer-at": "off",
    },
  },

  // TypeScript
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: ["prettier.config.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: { project: true, tsconfigRootDir: __dirname },
    },
    plugins: { "@typescript-eslint": /** @type {any} */ (tsPlugin) },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      "@typescript-eslint/array-type": ["error", { default: "array" }],
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/return-await": ["error", "in-try-catch"],
      "@typescript-eslint/prefer-promise-reject-errors": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
    },
  },

  // General quality
  {
    languageOptions: { globals: { ...globals.browser, ...globals.es2024 } },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "prefer-const": "error",
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-nested-ternary": "off",
      "no-implicit-coercion": "error",
      "no-return-assign": "error",
      "no-throw-literal": "error",
      "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
      "no-void": ["error", { allowAsStatement: true }],
    },
  },

  // Security
  {
    plugins: { security },
    rules: {
      "security/detect-object-injection": "off",
      "security/detect-non-literal-regexp": "warn",
    },
  },

  // Astro overrides
  {
    files: ["**/*.astro"],
    rules: {
      "unicorn/name-replacements": ["error", { allowList: { Props: true } }],
      "astro/no-set-html-directive": "error",
      "astro/no-unsafe-inline-scripts": "warn",
      "astro/no-exports-from-components": "error",
      "astro/no-prerender-export-outside-pages": "error",
      "astro/no-set-text-directive": "warn",
      "astro/no-unused-css-selector": "warn",
      "astro/prefer-class-list-directive": "warn",
      "astro/prefer-object-class-list": "warn",
      "astro/prefer-split-class-list": "warn",
      "astro/sort-attributes": ["warn", { type: "alphabetical", ignoreCase: true }],
    },
  },

  // Prettier — MUST be last
  prettierRecommended,

  // Global ignores
  {
    ignores: [
      "dist/**",
      ".astro/**",
      "node_modules/**",
      "public/**",
      ".gemini/**",
      ".kiro/**",
      ".agent/**",
      ".agents/**",
      "*.md",
      "*.json",
      "*.lock",
      "tsconfig.tsbuildinfo",
    ],
  },
);

export default eslintConfig;
