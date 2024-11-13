/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@nextjs-starter/eslint-config"],
  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: true,
  },
  rules: {
    "@next/next/no-html-link-for-pages": 0,
  },
};
