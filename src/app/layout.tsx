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
      <head>
        <meta name="facebook-domain-verification" content="nfla0sjkkzg556b9nwgktdftfas5gk" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var s = document.createElement('script');
                s.setAttribute('nowprocket', '');
                s.setAttribute('nitro-exclude', '');
                s.src = 'https://dashboard.searchatlas.com/scripts/dynamic_optimization.js';
                s.dataset.uuid = 'c3ddc202-592a-4afa-b651-4fdef43e7e20';
                s.id = 'sa-dynamic-optimization-loader';
                document.head.appendChild(s);
              })();
            `
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${serifDisplay.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
