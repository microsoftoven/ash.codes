import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  level: 1 | 2 | 3 | 4 | 5;
  spacing?: boolean;
}

export const Title = (props: Props) => {
  const { level, children, spacing = true } = props;

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  const titleClasses = {
    1: `font-extrabold text-4xl md:text-5xl lg:text-6xl ${spacing && "mb-6 md:mb-8"}`,
    2: `font-extrabold font-medium text-gray-400 text-xl md:text-2xl ${spacing && "mb-2"}`,
    3: "",
    4: "",
    5: "",
  };

  return <HeadingTag className={titleClasses[level]}>{children}</HeadingTag>;
};
