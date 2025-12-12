import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

const primarySans = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-primary-sans',
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
      <body className={`${primarySans.variable} antialiased`}>
        {children}

        <Toaster position="top-right" visibleToasts={2} richColors />
      </body>
    </html>
  );
}
