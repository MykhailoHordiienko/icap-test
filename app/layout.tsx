import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br
    from-indigo-800
    via-sky-700
    to-yellow-500
    bg-[size:300%]
    animate-gradient-x`}>
        <Providers>
          <main className="w-full h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
