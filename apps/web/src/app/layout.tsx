import { AnalyticsProvider } from "@nextjs-starter/analytics";
import type { PropsWithChildren } from "react";

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}
