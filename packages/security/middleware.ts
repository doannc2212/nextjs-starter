import { NextRequest, NextResponse } from "next/server";
import nosecone, { defaults, NoseconeOptions } from "nosecone";

export function secureHeader(
  request: NextRequest,
  options: NoseconeOptions = defaults,
) {
  // https://github.com/arcjet/arcjet-js/blob/02e4435a86b6b40b97feb369f0402b2199a4bc12/nosecone-next/index.ts#L41-L59
  const headers = nosecone(options);
  headers.set("x-middleware-next", "1");

  return new NextResponse(request.body, { headers });
}
