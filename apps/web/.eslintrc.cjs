/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@nextjs-starter/eslint-config"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
