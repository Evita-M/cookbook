import { storyblokEditable, StoryblokRichText } from '@storyblok/react/rsc';
import Image from 'next/image';
import { Rating } from './Rating';
import { Flag } from './Flag';
import { Author } from './Author';
import { AuthorStoryblok, RecipeStoryblok } from '@/types/storyblok';
import { BreadCrumbs } from './BreadCrumbs';
import { ClockIcon, CookingPotIcon } from 'lucide-react';
import { resolvers } from '@/utils/resolvers';

interface RecipeProps {
  blok: RecipeStoryblok;
}

export const Recipe = ({ blok }: RecipeProps) => {
  return (
    <main className="mx-auto max-w-7xl flex-1 px-2 sm:px-4">
      <BreadCrumbs className="mt-5 mb-10" />
      <section
        {...storyblokEditable(blok)}
        className="flex flex-col gap-8 md:flex-row"
      >
        <div className="w-full flex-shrink-0 overflow-hidden rounded-[24px] md:w-1/2">
          <Image
            src={blok.main_img.filename || ''}
            alt={blok.main_img.alt || 'Recipe image'}
            width={Number(blok.main_img.filename?.split('/')[5].split('x')[0])}
            height={Number(blok.main_img.filename?.split('/')[5].split('x')[1])}
            sizes="(max-width: 768px) 100vw, (max-width: 1538px) 50vw, 752px"
            className="h-48 w-full object-cover md:h-full md:w-full"
            priority={true}
          />
        </div>
        <div className="flex h-full w-full flex-col justify-center gap-4 md:w-1/2">
          <div>
            <Flag category={blok.category} />
          </div>
          <h1 className="max-w-md text-3xl font-bold sm:text-4xl">
            {blok.name}
          </h1>
          <Rating value={Number(blok.rating)} />
          <p className="text-base leading-relaxed sm:text-lg">
            {blok.introduction}
          </p>
          <div className="flex flex-wrap gap-2">
            {blok.author
              .filter(
                (author): author is AuthorStoryblok =>
                  author.component === 'author'
              )
              .map((author) => (
                <Author key={author._uid} author={author} />
              ))}
          </div>
        </div>
      </section>
      <div className="my-10 flex flex-col gap-4 text-center tracking-wider uppercase sm:flex-row">
        <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-white p-3 text-lg text-gray-900 sm:w-[168px]">
          <CookingPotIcon size={32} className="text-green" />
          <p className="block font-bold">{blok.servings}</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-white p-3 text-lg sm:w-[168px]">
          <ClockIcon size={32} className="text-green" />
          <p className="block font-bold">{blok.preparation_time}'</p>
        </div>
        <div className="text-md flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-white p-3 sm:w-[168px]">
          <ClockIcon size={32} className="text-green" />
          <p className="block font-bold">{blok.difficulty}</p>
        </div>
      </div>
      <div className="my-10 max-w-full sm:max-w-5xl">
        <StoryblokRichText doc={blok.body as any} resolvers={resolvers} />
      </div>
    </main>
  );
};
