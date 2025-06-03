import clsx from 'clsx';
import Link from 'next/link';

interface BreadCrumbLinkProps {
  label: string;
  href: string;
  disabled?: boolean;
}

export const BreadCrumbLink = ({
  label,
  href,
  disabled,
}: BreadCrumbLinkProps) => (
  <Link
    href={href}
    className={clsx(
      'capitalize',
      'text-gray-500 hover:text-gray-700',
      disabled && 'cursor-default'
    )}
  >
    {label}
  </Link>
);
