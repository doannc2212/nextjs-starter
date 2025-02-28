import type { GetRecordQuery } from "@/__gql__/graphql";
import { PreloadQuery, query } from "@/lib/api-client";
import { Suspense } from "react";
import { QUERY } from "../query";
import { Content, Spinner } from "./content";

export default async function Page() {
  const { data } = await query<GetRecordQuery>({ query: QUERY });
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
