import { HeartIcon } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-[#2C3930] py-8 text-white">
    <p className="flex items-center justify-center gap-1 text-center">
      Made with
      <HeartIcon
        className="inline-block"
        strokeWidth="0"
        fill="#fff"
        size={20}
      />{' '}
      by
      <a
        className="text-yellow transition-colors hover:text-white"
        href="https://github.com/Evita-M"
        target="_blank"
        rel="noopener noreferrer"
      >
        Evita-M
      </a>
    </p>
  </footer>
);
