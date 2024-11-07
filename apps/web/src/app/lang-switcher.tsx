"use client";

import { usePathname, useRouter } from "@/lib/i18n";
import { languageTag } from "@/paraglide/runtime";

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const handleNavigate = (locale: "en" | "vi") => {
    router.push(pathname, { locale });
  };
  const tag = languageTag();
  if (tag === "en") {
    return <button onClick={() => handleNavigate("vi")}>Vietnamese</button>;
  } else {
    return <button onClick={() => handleNavigate("en")}>English</button>;
  }
}
