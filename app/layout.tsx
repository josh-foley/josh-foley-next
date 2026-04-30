import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Josh Foley",
    template: "%s · Josh Foley",
  },
  description:
    "A personal blog rendered on a 1977 phosphor screen. Notes on software, design, and the things in between.",
  metadataBase: new URL("https://joshfoley.dev"),
  openGraph: {
    title: "Josh Foley",
    description:
      "A personal blog rendered on a 1977 phosphor screen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="relative flex min-h-screen flex-col">
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
