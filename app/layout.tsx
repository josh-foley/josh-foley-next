import type { Metadata } from "next";
import { Open_Sans, VT323 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Josh Foley",
    template: "%s · Josh Foley",
  },
  description:
    "Thoughts on software, twin parenting, fitness, music, and the rest of life.",
  metadataBase: new URL("https://joshfoley.dev"),
  openGraph: {
    title: "Josh Foley",
    description:
      "Thoughts on software, twin parenting, fitness, music, and the rest of life.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} ${vt323.variable} flex min-h-screen flex-col`}
      >
        {/* Remove forcedTheme (and add <ThemeToggle /> to the header) when you ship dark mode. */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
