import { getStoryblokApi } from '@/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';

const fetchHomePage = async () => {
  const client = getStoryblokApi();
  const response = await client.getStory(`home`, {
    version: 'draft',
    resolve_relations: 'recommended_recipes.recipes',
  });
  return response.data.story;
};

const HomePage = async () => {
  const story = await fetchHomePage();
  return (
    <StoryblokStory
      bridgeOptions={{ resolveRelations: ['recommended_recipes.recipes'] }}
      story={story}
    />
  );
};

export default HomePage;
