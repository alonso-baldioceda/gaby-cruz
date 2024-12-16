import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      // "cmyk",
      {
        cmyk: {
          primary: "#45aeed",
          secondary: "#e7478a",
          accent: "#00ff00",
          neutral: "#0000ff",
          "base-100": "#ffffff",
          "base-200": "#f8f8f8",
          "base-300": "#cccccc",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
      "sunset",
    ],
  },
} satisfies Config;
