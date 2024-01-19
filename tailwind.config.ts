import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        '35-35-35': 'rgb(35,35,35)',
      },
      // backgroundImage: {
      //   'login-poster':"url('.public/images/login-poster.jpg')"
      // }
    },
  },
  plugins: [],
}
export default config
