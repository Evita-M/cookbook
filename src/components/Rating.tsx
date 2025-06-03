import React from 'react';

interface RatingProps {
  value: number; // Accepts values like 3, 3.5, 4, etc.
  max?: number; // Optional, default to 5
  size?: 'sm' | 'md';
}

const YELLOW = '#FFD66B';
const STAR_SIZE = {
  sm: 16,
  md: 20,
};

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  size = 'md',
}) => {
  // Helper to render a star (filled, half, or empty)
  const renderStar = (type: 'full' | 'half' | 'empty', idx: number) => {
    if (type === 'full') {
      return (
        <svg
          key={idx}
          width={STAR_SIZE[size]}
          height={STAR_SIZE[size]}
          viewBox="0 0 24 24"
          fill={YELLOW}
          stroke={YELLOW}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    } else if (type === 'half') {
      return (
        <svg
          key={idx}
          width={STAR_SIZE[size]}
          height={STAR_SIZE[size]}
          viewBox="0 0 24 24"
          fill="none"
          stroke={YELLOW}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <defs>
            <linearGradient id={`half-star-${idx}`}>
              {' '}
              <stop offset="50%" stopColor={YELLOW} />{' '}
              <stop offset="50%" stopColor="white" stopOpacity="1" />{' '}
            </linearGradient>
          </defs>
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            fill={`url(#half-star-${idx})`}
          />
        </svg>
      );
    } else {
      return (
        <svg
          key={idx}
          width={STAR_SIZE[size]}
          height={STAR_SIZE[size]}
          viewBox="0 0 24 24"
          fill="none"
          stroke={YELLOW}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    }
  };

  // Build the stars array
  const stars = [];
  for (let i = 1; i <= max; i++) {
    if (value >= i) {
      stars.push(renderStar('full', i));
    } else if (value >= i - 0.5) {
      stars.push(renderStar('half', i));
    } else {
      stars.push(renderStar('empty', i));
    }
  }

  return <div style={{ display: 'flex', gap: 2 }}>{stars}</div>;
};
