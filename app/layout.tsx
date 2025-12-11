import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Austin Gilbert Liwanto | Full-Stack Developer & UI/UX Designer",
  description: "Portfolio of Austin Gilbert Liwanto - Informatics student passionate about Software Development and UI/UX Design. Explore my projects and get in touch.",
  keywords: ["Austin Gilbert Liwanto", "Full-Stack Developer", "UI/UX Designer", "Portfolio", "Software Development", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Austin Gilbert Liwanto" }],
  creator: "Austin Gilbert Liwanto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://austingl.dev",
    title: "Austin Gilbert Liwanto | Full-Stack Developer",
    description: "Portfolio of Austin Gilbert Liwanto - Software Developer & UI/UX Designer",
    siteName: "Austin Gilbert Liwanto Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Gilbert Liwanto | Full-Stack Developer",
    description: "Portfolio of Austin Gilbert Liwanto - Software Developer & UI/UX Designer",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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