interface Props {
  [key: string]: string;
  src: string;
  alt: string;
}

export const Image = (props: Props) => {
  const { src, alt, className = "", ...restProps } = props;

  return (
    <img
      className={`rounded-2xl shadow-xl block ${className}`}
      src={props.src}
      alt={props.alt}
      {...restProps}
    />
  );
};
