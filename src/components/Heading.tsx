interface HeadingProps {
  text: string;
}

export const Heading = ({ text }: HeadingProps) => (
  <h2 className="mb-10 text-center text-3xl font-bold">{text}</h2>
);
