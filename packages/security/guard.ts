import arcjet, { detectBot, shield } from "@arcjet/next";

export const sec = arcjet({
  // Get your site key from https://docs.arcjet.com/get-started
  key: process.env.ARCJET_KEY!,
  // Identify the user by their IP address
  characteristics: ["ip.src"],
  rules: [
    // Protect against common attacks with Arcjet Shield
    shield({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
    }),
    detectBot({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      // Block all bots except the following
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        // Uncomment to allow these other common bot categories
        // See the full list at https://arcjet.com/bot-list
        //"CATEGORY:MONITOR", // Uptime monitoring services
        //"CATEGORY:PREVIEW", // Link previews e.g. Slack, Discord
      ],
    }),
    // Other rules are added in different routes
  ],
  // log: undefined, // Enable logging
});

export const guard = async (req: Request) => {
  const decision = await sec.protect(req);
  if (decision.isDenied()) {
    if (decision.reason.isBot()) {
      throw new Error("No bots allowed");
    }

    if (decision.reason.isRateLimit()) {
      throw new Error("Rate limit exceeded");
    }

    throw new Error("Access denied");
  }
};
