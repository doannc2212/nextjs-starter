import type { GetRecordQuery } from "@/__gql__/graphql";
import { query } from "@/lib/api-client";
import { QUERY } from "../query";

export default async function Page() {
  const { data } = await query<GetRecordQuery>({ query: QUERY });
  return (
    <div>
      <h1>Server</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
