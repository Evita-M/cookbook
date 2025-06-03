import { storyblokEditable, StoryblokRichText } from '@storyblok/react/rsc';
import Image from 'next/image';
import { Rating } from './Rating';
import { Flag } from './Flag';
import { Author } from './Author';
import { AuthorStoryblok, RecipeStoryblok } from '@/types/storyblok';
import { BreadCrumbs } from './BreadCrumbs';
import { AwardIcon, ClockIcon, SaladIcon } from 'lucide-react';
import { resolvers } from '@/utils/resolvers';
import { RecipeFeature } from './RecipeFeature';

interface RecipeProps {
  blok: RecipeStoryblok;
}

export const Recipe = ({ blok }: RecipeProps) => {
  const {
    main_img,
    category,
    name,
    rating,
    introduction,
    author,
    servings,
    preparation_time,
    difficulty,
    body,
  } = blok;
  return (
    <main className="mx-auto max-w-7xl flex-1 px-2 sm:px-4">
      <BreadCrumbs className="mt-5 mb-10" />
      <section
        {...storyblokEditable(blok)}
        className="flex flex-col gap-8 md:flex-row"
      >
        <div className="w-full flex-shrink-0 overflow-hidden rounded-[24px] md:w-1/2">
          <Image
            src={main_img.filename || ''}
            alt={main_img.alt || 'Recipe image'}
            width={Number(main_img.filename?.split('/')[5].split('x')[0])}
            height={Number(main_img.filename?.split('/')[5].split('x')[1])}
            sizes="(max-width: 768px) 100vw, (max-width: 1538px) 50vw, 752px"
            className="h-48 w-full object-cover md:h-full md:w-full"
            priority={true}
          />
        </div>
        <div className="flex h-full w-full flex-col justify-center gap-4 md:w-1/2">
          <div>
            <Flag category={category} />
          </div>
          <h1 className="max-w-md text-3xl font-bold sm:text-4xl">{name}</h1>
          <Rating value={Number(rating)} />
          <p className="text-base leading-relaxed sm:text-lg">{introduction}</p>
          <div className="flex flex-wrap gap-2">
            {author
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
      <div className="my-10 flex flex-col gap-4 sm:flex-row">
        <RecipeFeature
          icon={<SaladIcon size={32} className="text-green" />}
          text={servings}
        />
        <RecipeFeature
          icon={<ClockIcon size={32} className="text-blue" />}
          text={preparation_time + "'"}
        />
        <RecipeFeature
          icon={<AwardIcon size={32} className="text-yellow" />}
          text={difficulty}
        />
      </div>
      <div className="my-10 max-w-full sm:max-w-5xl">
        <StoryblokRichText doc={body as any} resolvers={resolvers} />
      </div>
    </main>
  );
};
