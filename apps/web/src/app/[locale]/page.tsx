import { useTranslations } from "next-intl";
import LangSwitcher from "./lang-switcher";
import type { Metadata } from "next";
import { createMetadata } from "@nextjs-starter/seo";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: "Home page for my application",
});

export default function Home() {
  const t = useTranslations("home-page");
  return (
    <div>
      <h1>{t("title")}</h1>
      <LangSwitcher />
    </div>
  );
}
