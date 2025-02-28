"use client";

import { useSuspenseQuery } from "@apollo/client";
import { Suspense } from "react";
import { QUERY } from "../query";
import { GetRecordQuery } from "@/__gql__/graphql";

const Spinner = () => <div>Loading...</div>;

const Content = () => {
  const { data } = useSuspenseQuery<GetRecordQuery>(QUERY);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <div>
        <h1>Client</h1>
        <Content />
      </div>
    </Suspense>
  );
}
