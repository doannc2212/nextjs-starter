import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export default function Button({
  children,
  ...rest
}: PropsWithChildren &
  Pick<ButtonHTMLAttributes<unknown>, "onClick" | "disabled">) {
  return <button {...rest}>{children}</button>;
}
