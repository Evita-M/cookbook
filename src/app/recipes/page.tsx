import { RecommendedRecipe } from '@/components/RecommendedRecipe';
import { getStoryblokApi } from '@/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';
import React from 'react';

const fetchRecipesPage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`recipes`, {
    version: 'draft',
  });
  return response.data.story;
};

const fetchAllRecipes = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: 'recipe',
    version: 'draft',
  });
  return response.data.stories;
};

const RecipesPage = async () => {
  const story = await fetchRecipesPage();
  const recipes = await fetchAllRecipes();
  return (
    <div>
      <StoryblokStory
        bridgeOptions={{ resolveRelations: ['recommended_tours.tours'] }}
        story={story}
      />
      <div>
        {recipes.map((recipe: any) => (
          <RecommendedRecipe story={recipe} key={recipe.content._uid} />
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
