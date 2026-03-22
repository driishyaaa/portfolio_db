// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class",
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//         card: "var(--card)",
//         "card-foreground": "var(--card-foreground)",
//         popover: "var(--popover)",
//         "popover-foreground": "var(--popover-foreground)",
//         primary: "var(--primary)",
//         "primary-foreground": "var(--primary-foreground)",
//         secondary: "var(--secondary)",
//         "secondary-foreground": "var(--secondary-foreground)",
//         muted: "var(--muted)",
//         "muted-foreground": "var(--muted-foreground)",
//         accent: "var(--accent)",
//         "accent-foreground": "var(--accent-foreground)",
//         destructive: "var(--destructive)",
//         "destructive-foreground": "var(--destructive-foreground)",
//         border: "var(--border)",
//         input: "var(--input)",
//         ring: "var(--ring)",
//         pastel: {
//           pink: "var(--pastel-pink)",
//           blue: "var(--pastel-blue)",
//           green: "var(--pastel-green)",
//           purple: "var(--pastel-purple)",
//           yellow: "var(--pastel-yellow)",
//           peach: "var(--pastel-peach)",
//         },
//         matcha: "var(--matcha-green)",
//       },
//       borderRadius: {
//         sm: "calc(var(--radius) - 4px)",
//         md: "calc(var(--radius) - 2px)",
//         lg: "var(--radius)",
//         xl: "calc(var(--radius) + 4px)",
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        popover: 'var(--popover)',
        'popover-foreground': 'var(--popover-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        primary1: 'var(--primary1)',
        'primary1-foreground': 'var(--primary1-foreground)',
        primary2: 'var(--primary2)',
        'primary2-foreground': 'var(--primary2-foreground)',
        primary3: 'var(--primary3)',
        'primary3-foreground': 'var(--primary3-foreground)',
        primary4: 'var(--primary4)',
        'primary4-foreground': 'var(--primary4-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        ring: 'var(--ring)',
        border: 'var(--border)',
        input: 'var(--input)',
        'pastel-pink': '#f4a6cd',
        'pastel-blue': '#bae1ff',
        // 'pastel-green': #a8e6cf,
        // 'pastel-purple': #d4c5f9,
        // 'pastel-yellow': #f3f094,
        // 'pastel-peach': #ffcccb,
        // 'matcha-green': #91b500;
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseFast: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        rotate: 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
    },
  },
  plugins: [],
}
}
