import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("component", {
    description:
      "Creates a new file at the design system root with a .tsx extension",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the new file to create?",
        validate: (input: string) => {
          if (input.includes(".")) {
            return "file name cannot include an extension";
          }
          if (input.includes(" ")) {
            return "file name cannot include spaces";
          }
          if (!input) {
            return "file name is required";
          }
          return true;
        },
      },
      // {
      //   type: "list",
      //   name: "location",
      //   message: "Which place will have this component?",
      //   choices: ["packages", "apps"],
      // },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/design-system/{{ dashCase name }}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "{{ turbo.paths.root }}/packages/design-system/index.ts",
        template:
          'export { default as {{ properCase name }} } from "./{{ dashCase name }}";\n',
      },
    ],
  });

  plop.setGenerator("package", {
    description: "Creates a new package",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the new package to create?",
        validate: (input: string) => {
          if (!input) {
            return "package name is required";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of the new package?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/{{ dashCase name }}/package.json",
        templateFile: "templates/package/package.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/{{ dashCase name }}/tsconfig.json",
        templateFile: "templates/package/tsconfig.hbs",
      },
    ],
  });
}
