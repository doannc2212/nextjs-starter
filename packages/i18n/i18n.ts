import { PrefixStrategy, Navigation, Middleware } from "@inlang/paraglide-next";

const strategy = PrefixStrategy({ prefixDefault: "always" });

export const middleware = Middleware({ strategy });
export const { Link, useRouter, usePathname, redirect, permanentRedirect } =
  Navigation({ strategy });
