import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://daksha-talekar.vercel.app"),
  title: "Daksha Talekar | Software Engineer & Systems Architect",
  description: "Software Engineer at Expedia building scalable data platforms. Specialized in distributed systems, data governance, and backend architecture.",
  keywords: ["Software Engineer", "Data Engineering", "Systems Design", "Java", "Spring Boot", "Expedia", "Backend"],
  authors: [{ name: "Daksha Talekar", url: "https://daksha-talekar.vercel.app" }],
  creator: "Daksha Talekar",
  openGraph: {
    type: "website",
    url: "https://daksha-talekar.vercel.app",
    title: "Daksha Talekar | Software Engineer",
    description: "Building scalable data systems at Expedia. 2+ years crafting reliable distributed platforms.",
    images: [
      {
        url: "https://daksha-talekar.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daksha Talekar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daksha Talekar | Software Engineer",
    description: "Building scalable data systems at Expedia. Systems design • Data governance • Backend architecture",
    images: ["https://daksha-talekar.vercel.app/og-image.png"],
    creator: "@coding_ship",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://daksha-talekar.vercel.app" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
