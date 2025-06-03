import type { Metadata } from 'next';
import './globals.css';
import { StoryblokProvider } from '@/components/StoryblokProvider';
import { Lato, Satisfy } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'CookBook',
  description: 'Healthy recipes for the whole family',
};

const satisfy = Satisfy({
  weight: ['400'],
  subsets: ['latin'],
});

const lato = Lato({
  weight: ['400'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StoryblokProvider>
      <html lang="en" className="h-full">
        <body
          suppressHydrationWarning
          className={`${satisfy.className} ${lato.className} flex h-full flex-col bg-gray-100`}
        >
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
