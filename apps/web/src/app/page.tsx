import { createMetadata } from "@nextjs-starter/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description: "Home page for my application",
});

export default function Home() {
  return (
    <div>
      <h1>NextJS Starter</h1>
    </div>
  );
}
