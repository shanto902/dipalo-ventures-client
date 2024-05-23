import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';

import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/NavBar';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home | Dipalo Ventures',
  description:
    'We invest in a balanced portfolio across pre-seed to early-stage rounds in physical products utilizing data intelligence and designed for sustainability.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          color="#FFB012"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          shadow={false}
          speed={200}
        />
        <Navbar />

        <main> {children}</main>

        <Footer />
      </body>
    </html>
  );
}
