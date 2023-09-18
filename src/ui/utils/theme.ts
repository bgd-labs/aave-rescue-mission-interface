import { createStitches, CSS } from '@stitches/react';

export const media = {
  xs: '(min-width: 420px)',
  sm: '(min-width: 768px)',
  md: '(min-width: 1024px)',
  lg: '(min-width: 1400px)',
  xl: '(min-width: 1800px)',
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {
      main: '#1B2030',
      secondary: '#5C6279',
      gray: '#D9D9D9',
      disabled: '#ABB1C5',
      light: '#E2E5F0',
      error: '#FF607B',
      paper: '#FFFFFF',
      backgroundOverlap: '#292E4199',
      appBackground: '#FDF5EB',
      whiteBackground: '#FFFDFA',
      text: '#1B2030',
      textSecondary: '#BDBDBD',
      textDisabled: '#ABB1C5',
      textWhite: '#FFFFFF',
      // gradients
      mainGradientFirst: '#B6509E',
      mainGradientSecond: '#2EBAC6',
    },
    fonts: {
      inter: "'Inter', sans-serif",
    },
    shadows: {
      paper: '0px 2px 5px rgba(0, 0, 0, 0.2)',
      paperHover: '0px 1px 1px rgba(0, 0, 0, 0.35)',
      buttonInset: 'inset 0px 2px 1px rgba(0, 0, 0, 0.2)',
      buttonInsetBig: 'inset 0px 3px 4px rgba(0, 0, 0, 0.15)',
    },
    radii: {
      1: '8px',
      2: '50%',
    },
  },
  media,
  utils: {
    // Abbreviated padding properties
    p: (val: number | string) => ({
      padding: val,
    }),
    pt: (val: number | string) => ({
      paddingTop: val,
    }),
    pr: (val: number | string) => ({
      paddingRight: val,
    }),
    pb: (val: number | string) => ({
      paddingBottom: val,
    }),
    pl: (val: number | string) => ({
      paddingLeft: val,
    }),
    px: (val: number | string) => ({
      paddingLeft: val,
      paddingRight: val,
    }),
    py: (val: number | string) => ({
      paddingTop: val,
      paddingBottom: val,
    }),

    // Abbreviated margin properties
    m: (val: number | string) => ({
      margin: val,
    }),
    mt: (val: number | string) => ({
      marginTop: val,
    }),
    mr: (val: number | string) => ({
      marginRight: val,
    }),
    mb: (val: number | string) => ({
      marginBottom: val,
    }),
    ml: (val: number | string) => ({
      marginLeft: val,
    }),
    mx: (val: number | string) => ({
      marginLeft: val,
      marginRight: val,
    }),
    my: (val: number | string) => ({
      marginTop: val,
      marginBottom: val,
    }),

    // A property for applying width/height together
    size: (val: number | string) => ({
      width: val,
      height: val,
    }),

    // A property to apply gradients
    linearGradient: (val: string) => ({
      backgroundImage: `linear-gradient(${val})`,
    }),

    // An abbreviated property for border-radius
    br: (val: number | string) => ({
      borderRadius: val,
    }),
    // hover
    hover: (val: CSS) => ({
      '@media (hover: hover) and (pointer: fine)': {
        '&:hover': {
          ...val,
        },
      },
    }),

    // gradients
    mainGradient: () => ({
      linearGradient:
        '92.22deg, $mainGradientFirst 12.43%, $mainGradientSecond 89.01%',
    }),
  },
});

export const globalStyles = globalCss({
  '*': {
    m: 0,
    p: 0,
    boxSizing: 'border-box',
    outline: 'none',
    '&:after, &:before': {
      boxSizing: 'border-box',
    },
  },

  body: {
    fontFamily: '$inter',
    minWidth: 365,
    color: '$text',
    background: '$appBackground',
    fontSize: 12,
    lineHeight: '15px',
    '@lg': {
      fontSize: 15,
      lineHeight: '18px',
    },
  },

  '#root': {
    background: 'inherit',
  },

  'h1, h2, h3, h4, h5, h6': {
    m: 0,
    marginBlock: 0,
    fontSize: 'unset',
  },

  a: {
    transition: 'all 0.2s ease',
    color: '$text',
  },

  ul: {
    display: 'block',
  },

  'input, button': {
    fontFamily: '$inter',
  },
  input: {
    width: '100%',
  },
  button: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },

  // only for storybooks
  '#story--components-spinner--default': {
    background: '$paper',
  },
});
