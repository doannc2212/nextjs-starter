import type { ReactNode } from "react";
import { GoogleAnalytics } from "./google";

type AnalyticsProviderProps = {
  readonly children: ReactNode;
};

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  return (
    <>
      {process.env.NODE_ENV === "development" &&
        process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      {children}
    </>
  );
};
