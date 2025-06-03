import { StoryblokServerComponent } from '@storyblok/react/rsc';
import { Heading } from './Heading';
import { GridStoryblok } from '@/types/storyblok';

interface GridProps {
  blok: GridStoryblok;
}

export const Grid = ({ blok }: GridProps) => {
  return (
    <section className="section">
      {blok.headline && <Heading text={blok.headline} />}
      <div className="grid grid-cols-1 justify-center gap-8 md:grid-cols-3">
        {blok.items.map((blok: any, index: number) => (
          <StoryblokServerComponent blok={blok} key={blok._uid} index={index} />
        ))}
      </div>
    </section>
  );
};
