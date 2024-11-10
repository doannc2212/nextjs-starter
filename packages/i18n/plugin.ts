import { paraglide } from "@inlang/paraglide-next/plugin";

// https://github.com/opral/monorepo/blob/7f1f16ea239a82e680f8a263c6b37d52c6b511e3/inlang/source-code/paraglide/paraglide-next/src/plugin/index.ts#L44-L68
const plugin = (config?: ReturnType<typeof paraglide>) =>
  paraglide({
    paraglide: {
      project: "./project.inlang",
      outdir: "./paraglide",
    },
    ...config,
  });

export { plugin as i18nBuild };
