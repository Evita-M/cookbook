import { AuthorStoryblok } from '@/types/storyblok';

const IMAGE_SIZE = 80;

export const Author = ({ author }: { author: AuthorStoryblok }) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`flex h-[${IMAGE_SIZE}px] w-[${IMAGE_SIZE}px] items-center justify-center overflow-hidden rounded-full bg-gray-200`}
      >
        <img
          src={`${author.img.filename}/m/${IMAGE_SIZE}x${IMAGE_SIZE}/filters:quality(100)`}
          alt={author.img.alt || 'Author image'}
          loading="lazy"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          className="object-cover"
        />
      </div>
      <div>
        <p className="font-bold">{author.name}</p>
        <p className="text-gray-700">{author.job_title}</p>
      </div>
    </div>
  );
};
