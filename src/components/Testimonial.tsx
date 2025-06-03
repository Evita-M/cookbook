import { TestimonialStoryblok } from '@/types/storyblok';
import { Rating } from './Rating';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  blok: TestimonialStoryblok;
  index: number;
}

const QUOTE_ICON_SIZE = 56;

export const Testimonial = ({ blok, index }: TestimonialProps) => {
  return (
    <article className="relative mx-auto mt-20 flex w-full flex-col items-center gap-3 rounded-xl bg-white p-7 pt-24 text-center">
      <span className="absolute -top-20 flex h-40 w-40 items-center justify-center overflow-hidden rounded-full">
        <img
          className="w-full object-cover"
          src={`${blok.image.filename}/m/640x640/filters:quality(100)`}
          width={140}
          height={140}
          alt={blok.image.alt || 'Avatar image'}
          loading={'lazy'}
        />
      </span>
      <p className="min-h-[120px]">{blok.comment}</p>
      {index === 0 && (
        <span className="absolute -top-10 left-0 p-4">
          <Quote
            fill="var(--color-yellow)"
            strokeWidth={0}
            size={QUOTE_ICON_SIZE}
          />
        </span>
      )}
      {index === 2 && (
        <span className="absolute right-0 -bottom-10 p-4">
          <Quote
            fill="var(--color-blue)"
            strokeWidth={0}
            size={QUOTE_ICON_SIZE}
          />
        </span>
      )}
      <Rating value={5} />
      <p className="font-secondary mt-2 text-xl tracking-wide text-[var(--color-green)]">
        {blok.name}
      </p>
    </article>
  );
};
