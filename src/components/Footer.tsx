import { HeartIcon } from 'lucide-react';

export const Footer = () => (
  <footer className="h-24 bg-[#2C3930] py-4 text-white">
    <p className="text-center">
      Made with{' '}
      <HeartIcon className="inline-block" strokeWidth="0" fill="#f1bafc	" /> by{' '}
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
);
