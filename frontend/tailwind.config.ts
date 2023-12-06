import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      '2xl': '0px 60px 60px 10px rgba(0,0,0,0.4)',
      '3xl': '0px 60px 60px 10px rgba(0,0,0,0.4)',
      '4xl': '20px 60px 60px 10px rgba(0,0,0,0.4)',
    },
    extend: {},
  },
  plugins: [],  
}
export default config
