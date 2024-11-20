import analyzer from "@next/bundle-analyzer";
import { NextConfig } from "next";

const nextConfig: NextConfig = { experimental: { ppr: true } };

const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
