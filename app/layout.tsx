import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://yenting.me'),
  title: {
    default: 'YenTing Wu',
    template: '%s | YenTing Wu',
  },
  description: 'My personal website',
  openGraph: {
    title: 'YenTing Wu',
    description: '0xDeveloper',
    url: 'https://yenting.me',
    siteName: 'YenTing Wu',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    title: 'YenTing Wu',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
