import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#073742",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1798C1",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#D160B7",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#EBFAFE",
          foreground: "#5A6C71",
        },
        accent: {
          DEFAULT: "#BDEDFC",
          foreground: "#073742",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#073742",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#073742",
        },
      },
      fontFamily: {
        inter: [
          "Inter",
          "Apple System",
          "System Ui",
          "Segoe Ui",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Sans Serif",
          "Apple Color Emoji",
          "Segoe Ui Emoji",
          "Segoe Ui Symbol",
          "Noto Color Emoji",
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

