import { styled } from '../utils/theme';

export const Typography = styled('p', {
  variants: {
    variant: {
      h1: {
        fontWeight: '700',
        letterSpacing: '0.03em',
        fontSize: 16,
        lineHeight: '19px',
        '@lg': {
          fontSize: 20,
          lineHeight: '24px',
        },
      },
      h2: {
        fontWeight: '600',
        letterSpacing: '0.03em',
        fontSize: 15,
        lineHeight: '18px',
        '@lg': {
          fontSize: 16,
          lineHeight: '21px',
        },
      },
      h3: {
        fontWeight: '400',
        letterSpacing: '0.03em',
        fontSize: 14,
        lineHeight: '17px',
        '@lg': {
          fontSize: 16,
          lineHeight: '19px',
        },
      },
      headline: {
        fontWeight: '700',
        fontSize: 13,
        lineHeight: '15px',
        '@lg': {
          fontSize: 15,
          lineHeight: '18px',
        },
      },
      body: {
        fontWeight: '400',
        fontSize: 13,
        lineHeight: '15px',
        '@lg': {
          fontSize: 15,
          lineHeight: '18px',
        },
      },
      descriptor: {
        fontWeight: '400',
        fontSize: 11,
        lineHeight: '13px',
      },
      descriptorAccent: {
        fontWeight: '700',
        fontSize: 11,
        lineHeight: '13px',
      },
      buttonLarge: {
        fontWeight: '700',
        letterSpacing: '0.03em',
        fontSize: 14,
        lineHeight: '17px',
        '@lg': {
          fontSize: 15,
          lineHeight: '18px',
        },
      },
      buttonMedium: {
        fontWeight: '600',
        letterSpacing: '0.03em',
        fontSize: 12,
        lineHeight: '15px',
        '@lg': {
          fontSize: 14,
          lineHeight: '17px',
        },
      },
      buttonSmall: {
        fontWeight: '400',
        letterSpacing: '0.03em',
        fontSize: 11,
        lineHeight: '13px',
        '@lg': {
          fontSize: 14,
          lineHeight: '17px',
        },
      },
    },
  },
});
