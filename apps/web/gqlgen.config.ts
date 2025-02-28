import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://countries.trevorblades.com/",
  documents: ["src/**/*.tsx", "src/**/*.ts"],
  generates: {
    "src/__gql__/": {
      preset: "client",
      plugins: [],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
