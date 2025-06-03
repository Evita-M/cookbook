const storyblokImageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality: number;
}) => {
  return `${src}/m/${width}x0/filters:quality(${quality || 75})`;
};

export default storyblokImageLoader;
