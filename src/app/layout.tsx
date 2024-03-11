import "@mantine/core/styles.css";

import { theme } from "@/theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";
import "./globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
