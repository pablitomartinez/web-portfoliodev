import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        background: "#0D1B2A",
        primary: "#1B6CA8",
        accent: "#68D9FF",
        text: "#FFFFFF",
        muted: "#A5B9C7",
      },
    },
  },
  plugins: [],
} satisfies Config;
