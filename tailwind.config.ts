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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'go-green': '#CAFFD0',
        'go-cyan': '#C9E4E7',
        'go-wisteria': '#B4A0E5',
        'go-phlox': '#CA3CFF',
        'go-licorice': '#1E1014',
        'go-green-shadow': '#B2DFB7',
        'go-cyan-shadow': '#B5CFD1',
      },
    },
  },
  plugins: [],
};
export default config;
