import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daksha Talekar | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
