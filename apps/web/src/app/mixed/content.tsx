"use client";

import type { GetRecordQuery } from "@/__gql__/graphql";
import { useSuspenseQuery } from "@apollo/client";
import { QUERY } from "../query";

export const Spinner = () => <div>Loading...</div>;

export const Content = () => {
  const { data } = useSuspenseQuery<GetRecordQuery>(QUERY);

  const item = data.countries[1];

  return <pre>{JSON.stringify(item, null, 2)}</pre>;
};
