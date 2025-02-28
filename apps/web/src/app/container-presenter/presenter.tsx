"use client";

import { useActionState } from "react";
import { submitForm } from "./action";

type State = {
  location: string | null;
  res?: any;
  errors?: undefined;
};

type Props = { location: string };
export default function Presenter({ location }: Props) {
  const initialState: State = { location };

  const [state, formAction, pending] = useActionState(submitForm, initialState);

  return (
    <div>
      <h1>Your location is {state.location?.toString()}</h1>
      {pending && <div>Submitting...</div>}
      <form action={formAction}>
        <label>
          Where are you? <br />
          <input type="text" name="location" placeholder="Location" />
        </label>
        <p aria-live="polite">{state?.errors?.location}</p>
        <button type="submit" disabled={pending}>
          Submit
        </button>
      </form>
    </div>
  );
}
