import type { Metadata } from 'next';
import { TikTok_Sans } from 'next/font/google';
import './globals.css';

const primarySans = TikTok_Sans({
  variable: '--font-primary-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Furniture E-Commerce',
  description: 'A furniture e-commerce demo built with Next.js and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primarySans.variable} antialiased`}>{children}</body>
    </html>
  );
}
