import { getStoryblokApi } from '@/storyblok';
import { StoryblokStory } from '@storyblok/react/rsc';
import { draftMode } from 'next/headers';

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: 'recipe',
    version: 'draft',
  });

  return response.data.stories.map((story) => ({ slug: story.slug }));
};

const fetchRecipePage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`recipes/${slug}`, {
    version: 'draft',
  });
  return response.data.story;
};

const RecipePage = async (props: any) => {
  const story = await fetchRecipePage(props.params.slug);
  return <StoryblokStory story={story} />;
};

export default RecipePage;
