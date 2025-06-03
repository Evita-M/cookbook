'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  label: string;
}

export const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-lg font-semibold text-gray-500 transition-colors hover:text-gray-900${isActive ? '' : ''}`}
      style={isActive ? { color: 'var(--color-dark)' } : undefined}
    >
      {label}
    </Link>
  );
};
