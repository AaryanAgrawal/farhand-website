import type { Metadata } from "next";
import { Inter, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

// Playfair Display is an elegant serif close to Bespoke Serif
const serifDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-display",
});

export const metadata: Metadata = {
  title: "FARHAND | Your field service partner",
  description: "AI-guided technicians install & service your robots & machinery at your client sites.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${serifDisplay.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
