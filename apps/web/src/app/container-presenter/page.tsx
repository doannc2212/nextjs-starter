import { query } from "@/lib/api-client";
import { QUERY } from "../query";
import Presenter from "./presenter";
import { GetRecordQuery } from "@/__gql__/graphql";
import { redirect } from "next/navigation";

function randomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// https://www.patterns.dev/react/presentational-container-pattern
// As a container component, it holds all sources of truth (state, logic, etc.) and only passes props down to its children */
export default async function Container() {
  const { data } = await query<GetRecordQuery>({ query: QUERY });

  const location = data.countries[randomInRange(0, data.countries.length)].capital;
  if (!location) redirect("/error");

  return <Presenter location={location} />;
}
