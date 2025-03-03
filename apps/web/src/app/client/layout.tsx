import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return children;
}

export const dynamic = "force-dynamic";
