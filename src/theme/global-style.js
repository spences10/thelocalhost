import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { CustomScroll } from '../components/shared'

export const theme = {
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  colours: {
    transparent: 'transparent',

    black: '#000',
    white: '#fff',

    primary: {
      100: '#aa7fd4',
      200: '#9966cc',
      300: '#884cc3',
      400: '#773bb2',
      500: '#663399',
      600: '#552b80',
      700: '#442266',
      800: '#331a4d',
      900: '#221133',
    },

    warn: {
      100: '#f4c2c2',
      200: '#efa5a5',
      300: '#ea8888',
      400: '#e56b6b',
      500: '#e04e4e',
      600: '#db3131',
      700: '#c72323',
      800: '#aa1e1e',
      900: '#8d1919',
    },

    grey: {
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c',
    },
  },
  font: {
    sans: 'Poppins, sans-serif',
    serif: 'Pridi, sans',
    monospace: '"Space Mono", monospace',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  fontWeight: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  boxShadow: {
    default:
      '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  listStyleType: {
    none: 'none',
    disc: 'disc',
    decimal: 'decimal',
  },
  spacing: {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    default: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body[data-theme="light"] {
    --colour-background: ${({ theme }) => theme.colours.grey[100]};
    --colour-on-background: ${({ theme }) => theme.colours.grey[900]};
    --colour-primary: #6200ee;
    --colour-on-primary: #fff;
    --colour-warn: ${({ theme }) => theme.colours.warn[500]};
    --colour-on-warn: ${({ theme }) => theme.colours.black};
    --colour-secondary: ${({ theme }) => theme.colours.grey[300]};
    --colour-on-secondary: ${({ theme }) => theme.colours.grey[400]};
    --box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --box-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --title-gradient-from: ${({ theme }) =>
      theme.colours.primary[200]};
    --title-gradient-to: ${({ theme }) => theme.colours.primary[500]};
    --scrollbar-bg: ${({ theme }) => theme.colours.primary[100]};
    --thumb-bg: ${({ theme }) => theme.colours.primary[500]};
    --rainbow-one: #9349f0;
    --rainbow-two: #8f6f14;
    --rainbow-three: #da0498;
    --rainbow-four: #b05d2e;
    --rainbow-five: #864bfe;
    --rainbow-six: #cc4438;
  }

  body[data-theme="dark"] {
    --colour-background: ${({ theme }) => theme.colours.grey[900]};
    --colour-on-background: ${({ theme }) => theme.colours.grey[100]};
    --colour-primary: #bb86fc;
    --colour-on-primary: #000;
    --colour-warn: ${({ theme }) => theme.colours.warn[200]};
    --colour-on-warn: ${({ theme }) => theme.colours.white};
    --colour-secondary: ${({ theme }) => theme.colours.grey[800]};
    --colour-on-secondary: ${({ theme }) => theme.colours.grey[700]};
    --box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 5);
    --box-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 4);
    --title-gradient-from: ${({ theme }) =>
      theme.colours.primary[100]};
    --title-gradient-to: ${({ theme }) => theme.colours.primary[300]};
    --scrollbar-bg: ${({ theme }) => theme.colours.primary[900]};
    --thumb-bg: ${({ theme }) => theme.colours.primary[500]};
    --rainbow-one:#a269ee;
    --rainbow-two:#fab319;
    --rainbow-three:#f81cb1;
    --rainbow-four:#f16623;
    --rainbow-five:#976cf6;
    --rainbow-six:#d86253;
  }
  
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.font.sans};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  body {
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    background: var(
      --colour-background,
      ${({ theme }) => theme.colours.grey[100]}
    );
    color: var(
      --colour-on-background,
      ${({ theme }) => theme.colours.grey[900]}
    );
    -webkit-font-smoothing: antialiased;
    ${CustomScroll}
  }

  .vimeo-mdx-embed,
  .youtube-mdx-embed, 
  .twitter-tweet-mdx-embed,
  .gatsby-resp-image-wrapper {
    margin-top: ${({ theme }) => theme.spacing[10]};
    margin-bottom: ${({ theme }) => theme.spacing[10]};
  }

  .highlight-line {
    background-color: rgba(201, 167, 255, 0.2);
    margin: 0 -10px;
    padding: 0 5px;
    border-left: 5px solid ${({ theme }) =>
      theme.colours.primary[500]};
  }
  
  .__react_component_tooltip {
    height: 100px;
    max-width: 400px;
  }
`
