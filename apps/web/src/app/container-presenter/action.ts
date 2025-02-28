"use server";

import { GetRecordQuery } from "@/__gql__/graphql";
import { query } from "@/lib/api-client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { QUERY } from "../query";

const schema = z.object({
  location: z.string({ invalid_type_error: "Location must be a string" }),
});

export const submitForm = async (_: any, data: FormData) => {
  const location = data.get("location");
  const validatedFields = schema.safeParse({ location });
  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const res = await query<GetRecordQuery>({ query: QUERY });
  revalidatePath("/action");
  return { location, res };
};
