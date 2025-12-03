import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Austin | Portfolio",
  description: "Full-stack developer crafting digital experiences with modern technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}