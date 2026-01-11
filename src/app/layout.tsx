import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/lib/theme";
import { MainAppShell } from "@/features/navigation/components/MainAppShell";

export const metadata: Metadata = {
  title: "Apparel Manufacturing",
  description:
    "Apparel Manufacturing team continues to offer world class branded products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <MainAppShell>{children}</MainAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
