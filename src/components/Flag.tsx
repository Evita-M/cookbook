import React from 'react';
import clsx from 'clsx';

interface FlagProps {
  category: string;
  className?: string;
}

const categoryColors: Record<string, string> = {
  Dessert: '#F7D6E0', // soft pink
  Breakfast: '#FFF4CC', // light yellow
  Lunch: '#D1E7DD', // mint green
  Meat: '#F5CBA7', // light tan
  Salad: '#D4EFDF', // pale green
  Pastry: '#F9E7C2', // light beige
  Pasta: '#FDEBD0', // pale orange
  Soup: '#D6EAF8', // light blue
  Vegeterian: '#D0F0C0', // light-green
  Default: '#F0F0F0', // light gray
};

export const Flag = ({ category, className }: FlagProps) => {
  const bgColor = categoryColors[category] || categoryColors.Default;
  const textColor = 'text-gray-900';
  return (
    <span
      className={clsx(
        'inline-block rounded-lg px-4 py-2 text-sm font-bold tracking-[0.05em]',
        textColor,
        className
      )}
      style={{ backgroundColor: bgColor }}
    >
      {category}
    </span>
  );
};
