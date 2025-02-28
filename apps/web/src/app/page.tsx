import type { Metadata } from "next";
import { createMetadata } from "@nextjs-starter/seo";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: "Home page for my application",
});

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
