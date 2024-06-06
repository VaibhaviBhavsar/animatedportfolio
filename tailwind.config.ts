import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'spin-3d': {
          '0%, 100%': { transform: 'rotateY(0deg) rotateX(0deg)' },
          '50%': { transform: 'rotateY(180deg) rotateX(180deg)' },
        },
        'text-3d': {
          '0%, 100%': { transform: 'rotateX(0) rotateY(0)' },
          '50%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
        'text-bounce': {
          '0%, 100%, 20%, 50%, 80%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
        'pulse': {
          '0%, 100%': { opacity: '1',transition: 'opacity 2s ease-in-out' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'spin-3d': 'spin-3d 4s linear infinite',
        'text-3d': 'text-3d 4s linear infinite',
        'text-bounce': 'text-bounce 2s infinite',
        'pulse': 'pulse 2s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
