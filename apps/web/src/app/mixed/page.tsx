import { PreloadQuery, query } from "@/lib/api-client";
import { QUERY } from "../query";
import { Suspense } from "react";
import { Content, Spinner } from "./content";

export default async function Page() {
  const { data } = await query({ query: QUERY });
  const item = data.countries[0];
  return (
    <div>
      <h1>Server</h1>
      <pre>{JSON.stringify(item, null, 2)}</pre>
      <PreloadQuery query={QUERY}>
        <Suspense fallback={<Spinner />}>
          <Content />
        </Suspense>
      </PreloadQuery>
      <Suspense fallback={<Spinner />}>
        <Content />
      </Suspense>
    </div>
  );
}
