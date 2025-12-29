import type { Metadata } from "next";
import { Space_Grotesk, Inter } from 'next/font/google';
import Navbar from "./components/Navbar";
import "./globals.css";
import Providers from "./components/Providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-masthead',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Austin Gilbert Liwanto | Portfolio 2026',
  description: 'Full-stack developer and UI/UX designer. A high-impact portfolio showcasing modern web applications and exceptional user experiences.',
  keywords: ['Austin Gilbert Liwanto', 'Full-Stack Developer', 'UI/UX Designer', 'Web Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Austin Gilbert Liwanto' }],
  creator: 'Austin Gilbert Liwanto',
  metadataBase: new URL('https://austin-portfolio-eosin.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Austin Gilbert Liwanto | Portfolio 2026',
    description: 'Full-stack developer and UI/UX designer creating exceptional digital experiences.',
    siteName: 'Austin Gilbert Liwanto Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Austin Gilbert Liwanto - Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Austin Gilbert Liwanto | Portfolio 2026',
    description: 'Full-stack developer and UI/UX designer creating exceptional digital experiences.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Austin Gilbert Liwanto',
              jobTitle: 'Full-Stack Developer & UI/UX Designer',
              url: 'https://austin-portfolio-eosin.vercel.app/',
              sameAs: [
                'https://github.com/AustinGL',
                'https://www.linkedin.com/in/austin-gilbert-liwanto/',
              ],
              knowsAbout: ['Web Development', 'UI/UX Design', 'React', 'Next.js', 'TypeScript', 'Full-Stack Development'],
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <Providers>
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#1a0a2e] focus:text-sm focus:font-medium"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}