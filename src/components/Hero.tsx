import { HeroStoryblok } from '@/types/storyblok';

interface HeroProps {
  blok: HeroStoryblok;
}

const HeroImage = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt || 'Hero image'}
    aria-hidden="true"
    width={1920}
    height={1080}
    className="absolute inset-0 z-0 h-full w-full object-cover object-center"
  />
);

const HeroPrimary = ({ blok }: HeroProps) => (
  <section className="relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-100 text-center md:min-h-[560px]">
    <HeroImage
      src={blok.image.filename || ''}
      alt={blok.image.alt || 'Hero image'}
    />
    <div className="z-20 flex flex-col items-center justify-center gap-4 rounded-xl bg-white/80 p-12">
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

const HeroSecondary = ({ blok }: HeroProps) => (
  <section className="relative flex min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-gray-100 text-center md:min-h-[560px]">
    <HeroImage
      src={blok.image.filename || ''}
      alt={blok.image.alt || 'Hero image'}
    />
    <div className="pointer-events-none absolute inset-0 z-10 h-full w-full rounded-2xl bg-gradient-to-tl from-black/60 via-black/20 to-black/0" />
    <div className="bg-green z-20 flex h-full flex-col gap-6 rounded-xl p-12">
      <h1 className="font-secondary text-5xl text-white">{blok.headline}</h1>
      <p className="max-w-2xl text-lg text-white">{blok.content}</p>
    </div>
  </section>
);

export const Hero = ({ blok }: HeroProps) => {
  if (blok.variant === 'secondary') {
    return <HeroSecondary blok={blok} />;
  }
  return <HeroPrimary blok={blok} />;
};
