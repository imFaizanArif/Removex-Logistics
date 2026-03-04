import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Removex-Logistics",
  description: "Next.js app with TypeScript, Tailwind CSS & Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
