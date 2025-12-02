/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Votre échelle de gris fixe (inchangée)
        neutral: {
          50: "#FAFAFA",
          100: "#F3F3F4",
          200: "#E5E5E6",
          300: "#D6D6D8",
          400: "#A3A3AB",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
          950: "#0C0C0D",
        },

        // MODIFICATION ICI :
        // J'ai réintroduit des échelles de couleurs complètes pour 'primary' et 'secondary'
        // basées sur vos couleurs cibles (#2FBE36 et #0EA5E9).
        // Cela permettra à vos classes 'text-primary-500', 'text-primary-600' de fonctionner.

        // Vert (#2FBE36 est le 500)
        primary: {
          50: "#ebfef2",
          100: "#d0fbe0",
          200: "#a6f6c6",
          300: "#6defa5",
          400: "#35e07e",
          500: "#2FBE36", // Votre couleur de base
          600: "#0ea527",
          700: "#0c8322",
          800: "#0f6720",
          900: "#10551e",
          950: "#03300c",
          // On garde la compatibilité avec les variables CSS pour le DEFAULT
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        // Bleu (#0EA5E9 est le 500)
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0EA5E9", // Votre couleur de base
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
          // On garde la compatibilité avec les variables CSS pour le DEFAULT
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        /** 🎨 DESIGN TOKENS (Standard pour la thêmatisation) */
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },

      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.05)",
        soft: "0 4px 20px rgba(0,0,0,0.08)",
        hard: "0 8px 32px rgba(0,0,0,0.15)",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        4.5: "1.125rem",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
