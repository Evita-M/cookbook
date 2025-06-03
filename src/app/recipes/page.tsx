import { Heading } from '@/components/Heading';
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
    <main className="mx-auto max-w-7xl flex-1 px-4">
      <StoryblokStory story={story} />
      <section className="section px-4">
        <Heading text={story.content.headline} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {recipes.map((recipe) => (
            <RecommendedRecipe story={recipe} key={recipe.content._uid} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default RecipesPage;
