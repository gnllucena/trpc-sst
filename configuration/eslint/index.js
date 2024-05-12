module.exports = {
  root: true,
  extends: [
    "prettier",
    "plugin:drizzle/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:storybook/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "eslint:recommended",
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["tailwindcss", "@tanstack/query"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "error",
    "drizzle/enforce-delete-with-where": "error",
    "drizzle/enforce-update-with-where": "error",
    "no-unused-vars": [
      "error",
      {
        args: "none",
        vars: "all",
        ignoreRestSiblings: true,
        varsIgnorePattern: "^_",
      },
    ],
  },
  settings: {
    tailwindcss: {
      callees: ["cn"],
      config: "tailwind.config.js",
    },
    next: {
      rootDir: ["./"],
    },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
  ],
}
