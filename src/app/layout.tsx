import theme from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Providers } from "./_components/Providers";
import "./globals.css";

export const revalidate = 60;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <Providers>{children}</Providers>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "UEC Review",
    template: "%s - UEC Review",
  },
  openGraph: {
    type: "website",
    title: "UEC Review",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "UEC Review",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
};
