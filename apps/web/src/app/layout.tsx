import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { AnalyticsProvider } from "@nextjs-starter/analytics";
import type { PropsWithChildren } from "react";

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <AnalyticsProvider>
          <ApolloWrapper>{children}</ApolloWrapper>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
