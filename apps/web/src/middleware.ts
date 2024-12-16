import { parseError } from "@nextjs-starter/observability";
import { guard, secureHeader } from "@nextjs-starter/security";
import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default async function (request: NextRequest) {
  if (process.env.ARCJET_KEY) {
    try {
      await guard(request);
    } catch (error) {
      const message = parseError(error);

      return NextResponse.json({ error: message }, { status: 403 });
    }
  }
  const response = intlMiddleware(request);

  return secureHeader(response);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vi|en)/:path*"],
};
