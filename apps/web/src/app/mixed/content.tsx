"use client";

import { useSuspenseQuery } from "@apollo/client";
import { QUERY } from "../query";

export const Spinner = () => <div>Loading...</div>;

export const Content = () => {
  const { data } = useSuspenseQuery(QUERY);

  const item = (data as any).countries[1];

  return <pre>{JSON.stringify(item, null, 2)}</pre>;
};
