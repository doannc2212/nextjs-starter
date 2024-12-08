import { captureException } from "@sentry/nextjs";

export const parseError = (error: unknown): string => {
  let message = "An error occurred";

  if (error instanceof Error) {
    message = error.message;
  } else {
    message = String(error);
  }

  try {
    // add observability instance

    captureException(error);
  } catch (newError) {
    console.error("Error parsing error:", newError);
  }

  return message;
};
