/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "mermaid-teal": {
          DEFAULT: "#8062FC",
        },
        "mermaid-blue": {
          DEFAULT: "#62C4FC",
        },
        "mermaid-indigo": {
          DEFAULT: "#8062FC",
        },
        "mermaid-magenta": {
          DEFAULT: "#DD62FC",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
