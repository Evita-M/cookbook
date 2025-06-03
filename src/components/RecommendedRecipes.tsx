import { Heading } from './Heading';
import { RecommendedRecipe } from './RecommendedRecipe';
import { storyblokEditable } from '@storyblok/react/rsc';
import { RecommendedRecipesStoryblok } from '@/types/storyblok';

interface RecommendedRecipesProps {
  blok: RecommendedRecipesStoryblok;
}

export const RecommendedRecipes = ({ blok }: RecommendedRecipesProps) => (
  <section {...storyblokEditable(blok)} className="section">
    <Heading text={blok.headline} />
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {blok.recipes.map((recipe: any) => (
        <RecommendedRecipe story={recipe} key={recipe.content._uid} />
      ))}
    </div>
  </section>
);
