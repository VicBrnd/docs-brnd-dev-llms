import { FlatCompat } from "@eslint/eslintrc";
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import unusedImports from "eslint-plugin-unused-imports";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {

    plugins: {
      unusedImports,
      eslintPluginUnicorn,
      perfectionist,


    },
    rules: {
      'perfectionist/sort-imports': [
        'warn',
        {
          customGroups: {
            type: {
              next: '^next$',
              react: '^react$',
            },
            value: {
              next: ['^next$'],
              react: ['^react$', '^react-.*$'],
            },
          },
          groups: [
            'react',
            ['type', 'internal-type'],
            'next',
            ['builtin', 'external'],
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'side-effect',
            'style',
            'object',
            'unknown',
          ],
          internalPattern: ['^@/.*'],
          type: 'natural',
        },
      ],
      'eslintPluginUnicorn/better-regex': 'error',
      "react/display-name": "off",
      "@next/next/no-html-link-for-pages": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "import/no-anonymous-default-export": "off",

    }
  }
];

export default eslintConfig;
