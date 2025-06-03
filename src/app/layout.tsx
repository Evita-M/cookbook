import type { Metadata } from 'next';
import './globals.css';
import { StoryblokProvider } from '@/components/StoryblokProvider';
import { Lato, Satisfy } from 'next/font/google';
import { HeartIcon } from 'lucide-react';
import { NavLink } from '@/components/NavLink';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="en" className="h-full">
        <body
          suppressHydrationWarning
          className={`${satisfy.className} ${lato.className} flex h-full flex-col bg-gray-100`}
        >
          <header>
            <nav>
              <ul className="flex w-full items-center justify-center gap-8 px-2 py-4 sm:flex-row sm:gap-6">
                <li>
                  <NavLink href="/" label="Home" />
                </li>
                <li>
                  <NavLink href="/recipes" label="Recipes" />
                </li>
              </ul>
            </nav>
          </header>
          {children}
          <footer className="h-20 bg-[#2C3930] py-4 text-white">
            <p className="text-center">
              Made with{' '}
              <HeartIcon
                className="inline-block"
                strokeWidth="0"
                fill="#f1bafc	"
              />{' '}
              by{' '}
              <a
                className="text-[#f1bafc] transition-colors hover:text-white"
                href="https://github.com/Evita-M"
                target="_blank"
                rel="noopener noreferrer"
              >
                Evita-M
              </a>
            </p>
          </footer>
        </body>
      </html>
    </StoryblokProvider>
  );
}
