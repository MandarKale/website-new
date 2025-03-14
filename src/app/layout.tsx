import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Inter, Montserrat } from 'next/font/google';

// Import for lazy loading to avoid server/client mismatch with framer-motion
import dynamic from 'next/dynamic';

// Dynamically import the PageTransition component with no SSR
const PageTransition = dynamic(() => import('@/components/PageTransition'), {
  ssr: false,
});

// Load fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Mandar Kale | Engineering Leader',
  description: 'Personal website of Mandar Kale - Engineering Leader, Vibe Coder, and Blogger.',
  keywords: ['Mandar Kale', 'Engineering Leader', 'Intuit', 'Vibe Coder', 'Blogger'],
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Mandar Kale | Engineering Leader',
    description: 'Personal website of Mandar Kale - Engineering Leader, Blogger, and Vibe Coder.',
    url: 'https://mandarkale.com',
    siteName: 'Mandar Kale',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mandar Kale',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
} 