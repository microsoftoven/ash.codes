import { PropsWithChildren } from "react";

export const Text = (props: PropsWithChildren) => (
  <p className="font-regular text-base md:text-large mb-6">{props.children}</p>
);
