/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        "error-red": "var(--error-red)",
        "grey-600": "var(--grey-600)",
        "grey-aaa": "var(--grey-aaa)",
        "system-colors-miscellaneous-text-field-BG":
          "var(--system-colors-miscellaneous-text-field-BG)",
        "variable-collection-white": "var(--variable-collection-white)",
        white: "var(--white)",
        colorsred: "var(--colorsred)",
      },
      fontFamily: {
        "body-l-bold": "var(--body-l-bold-font-family)",
        "body-m-bold": "var(--body-m-bold-font-family)",
        "body-m-regular": "var(--body-m-regular-font-family)",
        "body-s-bold": "var(--body-s-bold-font-family)",
        "body-s-regular": "var(--body-s-regular-font-family)",
        "default-bold-body": "var(--default-bold-body-font-family)",
        "font-for-buttons": "var(--font-for-buttons-font-family)",
        "heading-l": "var(--heading-l-font-family)",
        "heading-XL": "var(--heading-XL-font-family)",
        "instrument-sans-16px": "var(--instrument-sans-16px-font-family)",
        "instrument-sans-18px": "var(--instrument-sans-18px-font-family)",
        "MGP-medium-22px": "var(--MGP-medium-22px-font-family)",
        "instrument-sans-20px-semibold": "var(--instrument-sans-20px-semibold-font-family)",
        "MGP-text-14px": "var(--MGP-text-14px-font-family)",
        "MGP-text-18px": "var(--MGP-text-18px-font-family)",
        "instrument-sans-16pc-BOLD": "var(--instrument-sans-16pc-BOLD-font-family)",
        "instrument-sans-16px": "var(--instrument-sans-16px-font-family)",
      },
    },
  },
  plugins: [],
};
