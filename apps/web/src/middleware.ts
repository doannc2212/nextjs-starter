// file generated by the Paraglide-Next init command
import { middleware as paraglide } from "@nextjs-starter/i18n/navigation";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // feel free to edit the request / response
  // and chain in other middlewares
  const response = paraglide(request);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
