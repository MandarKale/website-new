import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Mandar Kale | Engineering Leader at Intuit',
  description: 'Personal website of Mandar Kale - Engineering Leader at Intuit, Technology Enthusiast, and Blogger.',
  keywords: ['Mandar Kale', 'Engineering Leader', 'Intuit', 'Technology Enthusiast', 'Blogger'],
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Mandar Kale | Software Engineer',
    description: 'Personal website of Mandar Kale - Software Engineer, Blogger, and Technology Enthusiast.',
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
    <html lang="en">
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
} 