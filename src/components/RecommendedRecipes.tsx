import { Heading } from './Heading';
import { RecommendedRecipe } from './RecommendedRecipe';
import { storyblokEditable } from '@storyblok/react/rsc';

export const RecommendedRecipes = (params: any) => {
  return (
    <section {...storyblokEditable(params.blok)} className="section">
      <Heading text={params.blok.headline} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {params.blok.recipes.map((recipe: any) => (
          <RecommendedRecipe story={recipe} key={recipe.content._uid} />
        ))}
      </div>
    </section>
  );
};
