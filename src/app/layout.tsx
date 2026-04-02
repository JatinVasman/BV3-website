import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://businessvolunteers.online'),
  title: 'Digital Marketing Agency India | Business Volunteers',
  description:
    'We help businesses grow with data-driven advertising, social media marketing, branding, and high-converting campaigns tailored for the Delhi market',
  keywords: [
    'advertising agency India',
    'digital marketing agency India',
    'creative branding agency',
    'social media marketing India',
    'best advertising agency in India',
    'brand strategy India',
    'performance marketing',
    'SEO services India',
    'PPC campaigns India',
    'content marketing agency',
    'influencer marketing India',
    'lead generation agency',
    'business growth marketing',
    'high-converting campaigns',
    'data-driven advertising',
    'creative agency India',
    'Business Volunteers',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://businessvolunteers.online',
    siteName: 'Business Volunteers',
    title: 'Digital Marketing Agency India | Business Volunteers',
    description: 'Creative solutions that move brands forward. Affordable excellence for growing businesses.',
    images: [
      {
        url: '/logo-dark.png',
        width: 1200,
        height: 630,
        alt: 'Business Volunteers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Agency India | Business Volunteers',
    description: 'Creative solutions that move brands forward. Affordable excellence for growing businesses.',
    images: ['/logo-dark.png'],
    creator: '@Business8920',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  alternates: {
    canonical: 'https://businessvolunteers.online',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d0d0d" />
        <link rel="icon" href="/logo-dark.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <Analytics />
      </body>
    </html>
  );
}
