import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./www/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
