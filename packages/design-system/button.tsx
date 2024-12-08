import type { PropsWithChildren } from "react";

export default function Button(props: PropsWithChildren) {
  return <button>{props.children}</button>;
}
