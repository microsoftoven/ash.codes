import { PropsWithChildren } from "react";

export const Container = (props: PropsWithChildren) => (
  <div>{props.children}</div>
);
