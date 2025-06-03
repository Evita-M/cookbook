import {
  RecipeStoryblok,
  RecommendedRecipesStoryblok,
} from '@/types/storyblok';
import { Heading } from './Heading';
import { RecommendedRecipe } from './RecommendedRecipe';
import { ISbStoryData, storyblokEditable } from '@storyblok/react/rsc';

interface RecommendedRecipesProps {
  blok: RecommendedRecipesStoryblok;
}

export const RecommendedRecipes = ({ blok }: RecommendedRecipesProps) => {
  return (
    <section {...storyblokEditable(blok)} className="section my-20">
      <Heading text={blok.headline} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {blok.recipes?.map((recipe: ISbStoryData<RecipeStoryblok>) => (
          <RecommendedRecipe story={recipe.content} key={recipe.content._uid} />
        ))}
      </div>
    </section>
  );
};
