import { PropsWithChildren } from "react";

export const Main = (props: PropsWithChildren) => (
  <main className="p-6 md:p-12 max-w-6xl w-full mx-auto">{props.children}</main>
);
