import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daksha Talekar | Software Engineer",
  description: "Software Development Engineer at Expedia Group. Building scalable data platforms with Java, Spring Boot, Kafka, Flink & Iceberg. Open to SDE2 opportunities.",
  keywords: ["Software Engineer", "SDE2", "Backend Developer", "Data Engineering", "Java", "Spring Boot", "Kafka", "Flink", "Expedia"],
  authors: [{ name: "Daksha Talekar" }],
  openGraph: {
    title: "Daksha Talekar | Software Engineer",
    description: "Building scalable data platforms at Expedia Group. Open to SDE2 opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
