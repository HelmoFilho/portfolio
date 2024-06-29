import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from "next/font/google";
import "@/app/[locale]/globals.css";

import MyThemeProvider from "@/providers/MyThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <MyThemeProvider>
            {children}
          </MyThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
