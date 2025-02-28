"use client";

import { useSuspenseQuery } from "@apollo/client";
import { Suspense } from "react";
import { QUERY } from "../query";

const Spinner = () => <div>Loading...</div>;

const Content = () => {
  const { data } = useSuspenseQuery(QUERY);

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
