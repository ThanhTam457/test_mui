import type { Config } from 'tailwindcss'

const config: Config = {
  important: true,
  corePlugins: {
    preflight: false,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#10151A',
        buttonColor: '#243241',
        blueText: '#23c9de',
        bg_third: '#343A46',
        bg_third_2: '#252B36',
        txt_third: '#A2A8B4',
        bg_child_third: '#1B202A',
        bn_child: '#D0DCF5',
        txt_child_third_2: '#717A8C',
        bg_card: '#252B36',
        bn_end_third: '#FFCF01',
        bn_hover: '#404755',
        txt_sixth: '#9AAFC3',
        bn_sixth: '#CEAAFF',
        inp_sixth: '#121E28',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
      },
    },
  },
  plugins: [],
}
export default config
