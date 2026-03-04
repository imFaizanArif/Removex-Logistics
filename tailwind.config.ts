import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--color-primary))",
          light: "rgb(var(--color-primary-light))",
          dark: "rgb(var(--color-primary-dark))",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent))",
          light: "rgb(var(--color-accent-light))",
          dark: "rgb(var(--color-accent-dark))",
        },
        surface: {
          DEFAULT: "rgb(var(--color-surface))",
          alt: "rgb(var(--color-surface-alt))",
        },
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-primary-subtle": "var(--gradient-primary-subtle)",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-accent-hover": "var(--gradient-accent-hover)",
        "gradient-hero-overlay": "var(--gradient-hero-overlay)",
        "gradient-section": "var(--gradient-section)",
        "gradient-card": "var(--gradient-card)",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
        display: ["var(--font-roboto)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
