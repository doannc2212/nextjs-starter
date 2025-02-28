import { query } from "@/lib/api-client";
import { QUERY } from "../query";

export default async function Page() {
  const { data } = await query({ query: QUERY });
  return (
    <div>
      <h1>Server</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
