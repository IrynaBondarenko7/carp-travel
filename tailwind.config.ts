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
        inputBg: "rgba(255, 255, 255, 0.05)",
      },
      letterSpacing: {
        custom: "9.48px",
        "1.6": "-1.6px",
        "2.4": "2.4px",
        "1.4": "1.4px",
        "8.71": "8.71px",
        "25.9": "25.9px",
        "2.68": "-2.68px",
        "3.92": "-3.92px",
        "36.48": "36.48px",
        "3.71": "3.71px",
        "2.16": "2.16px",
      },
      lineHeight: {
        "56": "56px",
        "70": "70px",
        "18": "18px",
      },
      fontSize: {
        "40": "40px",
        "13": "13px",
        "67": "67px",
        "43": "43px",
        "22": "22px",
        "98": "98px",
        "32": "32px",
        "28": "28px",
      },
      width: {
        "180": "180px",
        "170": "170px",
        "100%": "100%",
        "480": "480px",
        "768": "768px",
        "230": "230px",
        "220": "220px",
        "463": "463px",
        "466": "466px",
        "186": "186px",
        "222": "222px",
        "225": "225px",
        "50%": "calc((100% - 40px)/2)",
        "1440": "1440px",
        "294": "294px",
        "292": "292px",
        "605": "605px",
        "608": "608px",
      },
      height: {
        "370": "370px",
        "221": "221px",
        "434": "434px",
      },
      margin: {
        "top-74": "74px 0 0 0 ",
        "right-46": "0 46px 0 0",
        "right-15": "0 15px 0 0",
        "r-7.5rem": "0 7.5rem 0 0",
      },
      padding: {
        "x-104": "0 104px 0 104px",
        "b-104": "0 0 104px 0",
        "104": "104px",
      },
      colors: {
        "#FF5757": "#FF5757",
      },
      screens: {
        sm: { max: "480px" },
        smm: { max: "767px", min: "481px" },
        xl: { min: "1200px" },
        "2xl": { min: "1440px" },
      },
      gap: {
        "76": "76px",
        "170": "170px",
        "60": "60px",
      },
    },
  },
  plugins: [],
};
export default config;
