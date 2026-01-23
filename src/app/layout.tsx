import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/lib/theme";
import { MainAppShell } from "@/features/layout/components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apparelm.vercel.app/"),

  title: "Apparel Manufacturing",
  description:
    "Apparel Manufacturing is your source for branded merchandise. Expert embroidery, screen printing, and custom apparel for businesses nationwide since 1981.",
  openGraph: {
    title: "Apparel Manufacturing",
    description:
      "Apparel Manufacturing is your source for branded merchandise. Expert embroidery, screen printing, and custom apparel for businesses nationwide since 1981.",
    url: "/",
    siteName: "Apparel Manufacturing",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apparel Manufacturing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <MainAppShell>{children}</MainAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
