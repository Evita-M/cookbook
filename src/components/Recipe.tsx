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
    <main className="mx-auto max-w-7xl flex-1 px-4">
      <BreadCrumbs className="mt-5 mb-10" />
      <section {...storyblokEditable(blok)} className="flex gap-8">
        <div className="w-1/2 overflow-hidden rounded-[24px]">
          <Image
            src={blok.main_img.filename || ''}
            alt={blok.main_img.alt || 'Recipe image'}
            width={Number(blok.main_img.filename?.split('/')[5].split('x')[0])}
            height={Number(blok.main_img.filename?.split('/')[5].split('x')[1])}
            sizes="(max-width: 1538px) 100vw, 1504px"
            priority={true}
          />
        </div>
        <div className="flex h-full w-1/2 flex-col justify-center gap-4">
          <div>
            <Flag category={blok.category} />
          </div>
          <h1 className="max-w-md text-4xl font-bold">{blok.name}</h1>
          <Rating value={Number(blok.rating)} />
          <p className="text-lg leading-relaxed">{blok.introduction}</p>
          <div className="flex gap-4">
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
      <div className="my-10 flex gap-4 text-center tracking-wider uppercase">
        <div className="flex w-[168px] flex-col items-center justify-center gap-2 rounded-lg bg-white p-3 text-lg text-gray-900">
          <CookingPotIcon size={32} className="text-green" />
          <p className="block font-bold">{blok.servings}</p>
        </div>
        <div className="flex w-[168px] flex-col items-center justify-center gap-2 rounded-lg bg-white p-3 text-lg">
          <ClockIcon size={32} className="text-green" />
          <p className="block font-bold">{blok.preparation_time}'</p>
        </div>
        <div className="text-md flex w-[168px] flex-col items-center justify-center gap-2 rounded-lg bg-white p-3">
          <ClockIcon size={32} className="text-green" />
          <p className="block font-bold">{blok.difficulty}</p>
        </div>
      </div>
      <div className="my-10">
        <StoryblokRichText doc={blok.body as any} resolvers={resolvers} />
      </div>
    </main>
  );
};
