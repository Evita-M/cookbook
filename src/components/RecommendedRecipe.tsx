import Link from 'next/link';
import { Flag } from './Flag';
import { Rating } from './Rating';

export const RecommendedRecipe = (props: any) => {
  return (
    <>
      <Link href={`/${props.story.full_slug}`} className="group block">
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white duration-200">
          <div className="absolute top-4 right-4 z-10">
            <Flag category={props.story.content.category} />
          </div>
          <div className="relative overflow-hidden">
            <img
              className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
              src={`${props.story.content.main_img.filename}/m/736x414/filters:quality(70)`}
              width={736}
              height={414}
              alt={props.story.content.main_img.alt || 'Recipe image'}
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <div className="flex flex-col justify-between gap-4 text-lg font-bold">
              <Rating value={props.story.content.rating} size="sm" />
              <h3 className="text-xl transition-colors group-hover:text-[var(--color-green)]">
                {props.story.content.name}
              </h3>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
};
