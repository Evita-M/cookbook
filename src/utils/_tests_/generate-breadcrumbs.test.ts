import { describe, it, expect } from 'vitest';
import { generateBreadcrumbs } from '../generate-breadcrumbs';

describe('generateBreadcrumbs', () => {
  it('returns Home for root path', () => {
    expect(generateBreadcrumbs('/')).toEqual([{ label: 'Home', href: '/' }]);
  });

  it('returns correct breadcrumbs for single segment', () => {
    expect(generateBreadcrumbs('/recipes')).toEqual([
      { label: 'Home', href: '/' },
      { label: 'Recipes' },
    ]);
  });

  it('returns correct breadcrumbs for multiple segments', () => {
    expect(generateBreadcrumbs('/recipes/desserts/chocolate-cake')).toEqual([
      { label: 'Home', href: '/' },
      { label: 'Recipes', href: '/recipes' },
      { label: 'Desserts', href: '/recipes/desserts' },
      { label: 'Chocolate Cake' },
    ]);
  });

  it('handles trailing slashes', () => {
    expect(generateBreadcrumbs('/recipes/desserts/')).toEqual([
      { label: 'Home', href: '/' },
      { label: 'Recipes', href: '/recipes' },
      { label: 'Desserts' },
    ]);
  });

  it('handles empty string as root', () => {
    expect(generateBreadcrumbs('')).toEqual([{ label: 'Home', href: '/' }]);
  });

  it('capitalizes and formats hyphenated segments', () => {
    expect(generateBreadcrumbs('/user-profile/settings')).toEqual([
      { label: 'Home', href: '/' },
      { label: 'User Profile', href: '/user-profile' },
      { label: 'Settings' },
    ]);
  });
});
