import { Inter } from "next/font/google";
import "./globals.css";

import MyThemeProvider from "@/providers/MyThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default async function LocaleLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang={"pt-br"}>
      <body className={inter.className}>
        <MyThemeProvider>
          {children}
        </MyThemeProvider>
      </body>
    </html>
  );
}
