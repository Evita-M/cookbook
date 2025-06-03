import Link from 'next/link';
import { Flag } from './Flag';
import { Rating } from './Rating';

export const RecommendedRecipe = (story: any) => {
  const { category, main_img, name, rating } = story.content;
  return (
    <>
      <Link href={`/${story.full_slug}`} className="group block">
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white duration-200">
          <div className="absolute top-4 right-4 z-10">
            <Flag category={category} />
          </div>
          <div className="relative overflow-hidden">
            <img
              className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
              src={`${story.content.main_img.filename}/m/736x414/filters:quality(70)`}
              width={736}
              height={414}
              alt={main_img.alt || 'Recipe image'}
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <div className="flex flex-col justify-between gap-4 text-lg font-bold">
              <Rating value={rating} size="sm" />
              <h3 className="text-xl transition-colors group-hover:text-[var(--color-green)]">
                {name}
              </h3>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};
