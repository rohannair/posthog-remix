import { useLocation } from "@remix-run/react";
import posthog, { PostHogConfig } from "posthog-js";
import { useEffect } from "react";

export const usePostHog = (
  apiKey: string,
  config?: Partial<PostHogConfig>,
  name?: string
): void => {
  const location = useLocation();
  posthog.init(apiKey, config, name);

  useEffect(() => {
    posthog.capture("$pageview");
  }, [location]);
};
