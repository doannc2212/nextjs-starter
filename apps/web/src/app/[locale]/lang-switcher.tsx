"use client";

import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@nextjs-starter/design-system";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

export default function LangSwitcher() {
  const t = useTranslations("home-page");
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const handleClick = () => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: params.locale === "en" ? "vi" : "en" },
      );
    });
  };
  return (
    <Button onClick={handleClick} disabled={isPending}>
      {t("click-me")}
    </Button>
  );
}
