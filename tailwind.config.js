// tailwind.config.js
const { heroui } = require("@heroui/theme"); // Use heroui plugin

// Assuming you set up fonts using CSS variables like before
// --font-inter, --font-lora, --font-poppins

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // Paths to your Next.js components/pages
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Path to HeroUI components within node_modules
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}", // Updated path
  ],
  theme: {
    extend: {
      // --- Define custom font families using CSS Variables ---
      fontFamily: {
        // Match variable names to your font loading setup
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"], // Body/UI Font
        serif: ["var(--font-lora)", "ui-serif", "Georgia", "serif"],             // Quote Font
        heading: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"], // Heading Font
        // mono: ["var(--font-mono)", "ui-monospace", "monospace"], // Keep if you defined --font-mono
      },
      // --- Define QuoteCraft colors directly in Tailwind theme ---
      // HeroUI *might* pick some of these up, or you'll use them directly
      // e.g., className="bg-primary text-primary-foreground"
      colors: {
        // Light Mode Colors (default)
        background: "#F8F9FA",
        foreground: "#212529",
        divider: "#DEE2E6",
        primary: {
          DEFAULT: "#0A58CA",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFC107",
          foreground: "#212529", // Check contrast
        },
        success: {
          DEFAULT: "#198754",
          foreground: "#FFFFFF",
        },
        danger: {
          DEFAULT: "#DC3545",
          foreground: "#FFFFFF",
        },
        // Dark Mode Colors (will be applied via dark: variant)
        dark: {
          background: "#212529",
          foreground: "#E9ECEF",
          divider: "#495057",
          primary: {
            DEFAULT: "#3B71CA",
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#FFCA2C",
            foreground: "#212529", // Check contrast
          },
          success: {
            DEFAULT: "#20C997",
            foreground: "#000000", // Check contrast
          },
          danger: {
            DEFAULT: "#F44336",
            foreground: "#FFFFFF",
          },
        }
      }
    },
  },
  darkMode: "class", // Enable class-based dark mode
  plugins: [
    heroui() // Add the HeroUI plugin
  ],
};

module.exports = config;