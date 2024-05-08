import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth : {
      '3' : '3px',
      '4' : '4px'
    },
    extend: {
      backgroundImage: {
        'login': "url('/img/bg-login.png')"
      },
    },
  },
  plugins: [],
};
export default config;
