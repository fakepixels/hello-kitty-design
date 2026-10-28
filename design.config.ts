import type { DesignConfig } from "auto-design";

/**
 * The source of truth for this design system. Change a value here, run
 * `npx auto-design build`, and every token, component and agent file updates.
 * Every field is checked: values outside the system's options fail the build.
 */
export default {
  name: "hello-kitty",
  displayName: "Hello Kitty",
  description: "Hello Kitty World",
  personality: {
    energy: 0.9,
    warmth: 0.39,
    novelty: 0.53
  },
  texture: "minimal",
  color: {
    brand: "#ff5268",
    neutral: "neutral",
    modes: "both",
    defaultMode: "light"
  },
  type: {
    sans: {
      family: "Rubik Variable",
      fallback: [
        "Rubik",
        "ui-sans-serif",
        "system-ui",
        "sans-serif"
      ],
      weights: [
        400,
        500,
        600
      ],
      package: "@fontsource-variable/rubik",
      license: "OFL-1.1"
    },
    mono: {
      family: "Fira Code Variable",
      fallback: [
        "Fira Code",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "monospace"
      ],
      weights: [
        400,
        500
      ],
      package: "@fontsource-variable/fira-code",
      license: "OFL-1.1"
    },
    baseSize: 14,
    ratio: 1.2
  },
  shape: {
    radius: 8
  },
  density: "compact",
  motion: "expressive",
  surfaces: [
    "web-app",
    "code",
    "chat",
    "marketing",
    "messaging",
    "mcp-apps"
  ],
  voice: {
    uiCase: "sentence",
    emoji: "never",
    tone: "Plain and exact. Lead with the result, then the next step. No exclamation marks."
  },
  private: false
} satisfies DesignConfig;
