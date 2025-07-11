'use client';

import { generateBreadcrumbs } from '@/utils/generate-breadcrumbs';
import { BreadCrumbLink } from './BreadCrumbLink';
import { FC, useMemo } from 'react';
import { usePathname } from 'next/navigation';

export interface BreadCrumbItem {
  label: string;
  href?: string;
}

interface BreadCrumbsProps {
  items?: BreadCrumbItem[];
  className?: string;
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({
  items: customItems,
  className,
}) => {
  const pathname = usePathname();

  const items = useMemo(() => {
    if (customItems) return customItems;
    return generateBreadcrumbs(pathname);
  }, [pathname, customItems]);

  const isLastItem = (index: number) => index === items.length - 1;

  return (
    <nav className={className}>
      <ul className="flex items-center">
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <>
                <BreadCrumbLink
                  label={item.label}
                  href={item.href}
                  disabled={isLastItem(index)}
                />
                {!isLastItem(index) && (
                  <span className="mx-[0.6rem] text-gray-400">/</span>
                )}
              </>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
