import { paraglide } from "@inlang/paraglide-next/plugin";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "en",
  },
};

export default paraglide({
  paraglide: {
    project: "./project.inlang",
    outdir: "./src/paraglide",
  },
  ...nextConfig,
});
