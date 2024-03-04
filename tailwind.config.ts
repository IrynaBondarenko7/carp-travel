import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0.00) 100%)",
      },
      backgroundColor: {
        custom: "rgba(2, 15, 8, 0.50)",
        btn: "rgba(255, 255, 255, 0.10)",
        btnHover: "rgba(255, 255, 255, 0.20)",
        burgerBg: "rgba(1, 10, 5, 0.75)",
      },
      letterSpacing: {
        custom: "9.48px",
        "1.6": "-1.6px",
        "2.4": "2.4px",
      },
      lineHeight: {
        "56": "56px",
      },
      fontSize: {
        "40": "40px",
      },
      width: {
        "180": "180px",
        "170": "170px",
      },
      margin: {
        "top-74": "74px 0 0 0 ",
      },
    },
  },
  plugins: [],
};
export default config;
