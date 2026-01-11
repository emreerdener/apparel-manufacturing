import type { Metadata } from "next";
// 1. Import Mantine styles
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: "Apparel Manufacturing",
  description:
    "Apparel Manufacturing team continues to offer world class screen printing, custom embroidery, custom sewing, ad specialty, and countless other branded products.",
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
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
