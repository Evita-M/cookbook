import { ReactNode } from 'react';

interface RecipeFeatureProps {
  icon: ReactNode;
  text: string;
}

export const RecipeFeature = ({ icon, text }: RecipeFeatureProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-3 sm:w-[168px]">
      {icon}
      <p className="block text-center font-bold tracking-wider uppercase">
        {text}
      </p>
    </div>
  );
};
