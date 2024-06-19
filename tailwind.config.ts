import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(86, 16, 198)'
      }
    }
  }
} satisfies Config;
