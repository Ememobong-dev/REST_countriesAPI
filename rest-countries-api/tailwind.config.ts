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
        darkModeDb: 'hsl(209, 23%, 22%)',
        darkModeBg: 'hsl(207, 26%, 17%)',
        lightModeLB: 'hsl(200, 15%, 8%)',
        lightModeInput: 'hsl(0, 0%, 52%)',
        lightModeBG: 'hsl(0, 0%, 98%)',
        darkLightMode: 'hsl(0, 0%, 100%)',

     
      },
    },
  },
  plugins: [],
} satisfies Config;
