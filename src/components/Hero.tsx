import { HeroStoryblok } from '@/types/storyblok';

interface HeroProps {
  blok: HeroStoryblok;
}

export const Hero = ({ blok }: HeroProps) => {
  return (
    <section className="section relative mb-12 flex min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-white text-center md:min-h-[560px]">
      <img
        src={`${blok.image.filename}/m/1920x1080/filters:quality(100)`}
        alt={blok.image.alt || 'Hero image'}
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      <div className="z-20 flex flex-col items-center justify-center gap-2 gap-4 rounded-2xl bg-white/80 p-12">
        <span className="wavy-circle flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400">
          <img src="/logo-icon.svg" alt="Logo" className="h-8 w-8" />
        </span>
        <h1 className="font-secondary text-5xl">{blok.headline}</h1>
        <p className="max-w-2xl text-lg text-[var(--color-text)]">
          {blok.content}
        </p>
      </div>
    </section>
  );
};
