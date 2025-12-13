import type { Metadata } from "next";
import { Playfair_Display, Inter } from 'next/font/google';
import ModernNavbar from "./components/ModernNavbar";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Austin Gilbert Liwanto | Full-Stack Developer & UI/UX Designer',
  description: 'Full-stack developer and UI/UX designer specializing in modern web applications, clean code, and exceptional user experiences. View my portfolio and get in touch.',
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
    title: 'Austin Gilbert Liwanto | Full-Stack Developer & UI/UX Designer',
    description: 'Full-stack developer and UI/UX designer specializing in modern web applications, clean code, and exceptional user experiences.',
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
    title: 'Austin Gilbert Liwanto | Full-Stack Developer & UI/UX Designer',
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
    <html lang="en">
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
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <ModernNavbar />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}