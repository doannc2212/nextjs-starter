import { NextResponse } from "next/server";
import nosecone, { defaults, NoseconeOptions } from "nosecone";

export function secureHeader(
  response: NextResponse,
  options: NoseconeOptions = defaults,
) {
  // https://github.com/arcjet/arcjet-js/blob/02e4435a86b6b40b97feb369f0402b2199a4bc12/nosecone-next/index.ts#L41-L59
  const headers = nosecone(options);
  response.headers.entries().forEach(([key, value]) => {
    if (!headers.has(key)) headers.set(key, value);
  });
  headers.set("x-middleware-next", "1");
  return new NextResponse(response.body, { headers });
}
