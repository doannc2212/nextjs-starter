import { useTranslations } from "next-intl";
import LangSwitcher from "./lang-switcher";

export default function Home() {
  const t = useTranslations("home-page");
  return (
    <div>
      <h1>{t("title")}</h1>
      <LangSwitcher />
    </div>
  );
}
