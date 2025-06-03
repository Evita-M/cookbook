import React, { ReactNode, useMemo } from 'react';
import { FeatureStoryblok } from '@/types/storyblok';
import {
  CitrusIcon,
  CroissantIcon,
  PizzaIcon,
  SparklesIcon,
} from 'lucide-react';
import clsx from 'clsx';

interface FeatureProps {
  blok: FeatureStoryblok;
  index: number;
}

type Variant = 'primary' | 'secondary' | 'tertiary' | '';
const ICON_SIZE = 30;

function splitHeadline(headline: string) {
  const words = headline.trim().split(' ');
  if (words.length === 0) return null;
  return (
    <>
      <span className="font-primary">{words[0]}</span>
      <br />
      {words.slice(1).join(' ')}
    </>
  );
}

export const Feature = ({ blok, index }: FeatureProps) => {
  const variant = blok.variant as Variant;

  const cardVariant = useMemo(() => {
    const variantMap: Record<Variant, string> = {
      primary: 'bg-[var(--color-yellow)]',
      secondary: 'bg-[var(--color-blue)]',
      tertiary: 'bg-[var(--color-green)]',
      '': 'bg-[var(--color-light)]',
    };
    return variantMap[variant] || variantMap[''];
  }, [variant]);

  const accentImage = useMemo<ReactNode>(() => {
    const className = `h-${ICON_SIZE} w-${ICON_SIZE} text-white`;
    const accentImages: Record<Variant, React.ReactNode> = {
      primary: <CroissantIcon className={className} aria-hidden="true" />,
      secondary: (
        <PizzaIcon size={ICON_SIZE} className={className} aria-hidden="true" />
      ),
      tertiary: <CitrusIcon className={className} aria-hidden="true" />,
      '': <PizzaIcon className={className} aria-hidden="true" />,
    };
    return accentImages[variant] || accentImages[''];
  }, [variant]);

  const rotation = useMemo(() => {
    const rotationMap: Record<Variant, string> = {
      primary: '-10',
      secondary: '20',
      tertiary: '-90',
      '': '0',
    };
    return rotationMap[variant] || '0';
  }, [variant]);

  const isTertiary = variant === 'tertiary';

  return (
    <article
      className={clsx(
        'group relative flex min-h-[300px] w-full flex-col items-start justify-end gap-3 overflow-hidden rounded-3xl p-7',
        cardVariant
      )}
      aria-label={blok.headline}
    >
      <span
        className={clsx(
          'absolute top-7 right-7 z-0 flex items-center justify-center transition-transform group-hover:scale-115 group-hover:rotate-10',
          {
            'rotate-20': variant === 'primary',
            '-rotate-20': variant === 'secondary',
            '-rotate-30': variant === 'tertiary',
          }
        )}
        aria-hidden="true"
      >
        {accentImage}
      </span>
      <div className="mt-4 flex flex-col gap-2">
        <span className="wavy-circle flex h-20 w-20 rotate-[-6deg] items-center justify-center bg-white/50 shadow-lg transition-transform group-hover:-translate-y-2 group-hover:scale-110">
          <SparklesIcon
            className={clsx('h-8 w-8', { 'text-white': isTertiary })}
            aria-hidden="true"
          />
        </span>
        <h3
          className={clsx('font-secondary mb-1 text-4xl', {
            'text-white': isTertiary,
          })}
        >
          {splitHeadline(blok.headline)}
        </h3>
        <p
          className={clsx('min-h-[50px] text-base', {
            'text-white': isTertiary,
          })}
        >
          {blok.content}
        </p>
      </div>
      {index === 1 && (
        <span className="absolute right-0 -bottom-4 opacity-20 transition-opacity group-hover:opacity-50">
          <img
            src="/dots.svg"
            alt="Dots"
            className="h-20 w-20"
            aria-hidden="true"
          />
        </span>
      )}
    </article>
  );
};
