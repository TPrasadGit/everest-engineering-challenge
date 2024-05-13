import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto : 'Roboto, Calibri, Arial, Helvetica, sans-serif', // Creates a css class 'font-roboto'. Used for all text.
        dmserif: 'DM Serif Text',
        dmsans: 'DM Sans',
      },
    },
  },
  plugins: [],
};
export default config;
