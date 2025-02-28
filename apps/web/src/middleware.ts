import { parseError } from "@nextjs-starter/observability";
import { guard, secureHeader } from "@nextjs-starter/security";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default async function (request: NextRequest) {
  if (process.env.ARCJET_KEY) {
    try {
      await guard(request);
    } catch (error) {
      const message = parseError(error);

      return NextResponse.json({ error: message }, { status: 403 });
    }
  }

  return secureHeader(request);
}

export const config = {
  matcher: ["/:path*"],
};
