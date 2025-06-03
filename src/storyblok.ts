import { Page } from '@/components/Page';
import { Recipe } from '@/components/Recipe';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import { Hero } from './components/Hero';
import { Grid } from './components/Grid';
import { Testimonial } from './components/Testimonial';
import { Feature } from './components/Feature';
import { RecommendedRecipes } from './components/RecommendedRecipes';
import { Author } from './components/Author';

const cachedFetch = (input: RequestInfo | URL, init?: RequestInit) => {
  return fetch(input, {
    ...init,
    cache: 'no-store',
  });
};

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
  components: {
    recipe: Recipe,
    page: Page,
    hero: Hero,
    grid: Grid,
    feature: Feature,
    testimonial: Testimonial,
    recommended_recipes: RecommendedRecipes,
    author: Author,
  },
  enableFallbackComponent: true,
});
