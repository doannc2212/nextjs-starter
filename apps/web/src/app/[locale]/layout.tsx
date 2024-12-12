import { AnalyticsProvider } from "@nextjs-starter/analytics";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { PropsWithChildren } from "react";

export default async function Layout({
  children,
  params,
}: PropsWithChildren & { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <AnalyticsProvider>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
