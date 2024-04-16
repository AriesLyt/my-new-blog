import type { Config } from 'tailwindcss'

import { colors } from './tw-config/color'
import { shadow, shadowColor } from './tw-config/shadow'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: colors,
      boxShadowColor: shadowColor,
      boxShadow: shadow,
      maxWidth: {
        official: '1200px'
      },
      height: {
        official: '60px'
      }
    }
  },
  plugins: []
}
export default config
