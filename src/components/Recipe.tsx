import { RecipeStoryblok } from '@/types/storyblok';
import { Heading } from './Heading';

interface RecipeProps {
  blok: RecipeStoryblok;
}

export const Recipe = ({ blok }: RecipeProps) => {
  return (
    <section className="section">
      <Heading text={blok.title} />
    </section>
  );
};
