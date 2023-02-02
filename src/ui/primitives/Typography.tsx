import { styled } from '../utils/theme';

export const Typography = styled('p', {
  variants: {
    variant: {
      h1: {
        fontWeight: '500',
        fontSize: 15,
        lineHeight: '18px',
        '@sm': {
          fontSize: 16,
          lineHeight: '19px',
        },
        '@lg': {
          letterSpacing: '0.03em',
          fontSize: 20,
          lineHeight: '24px',
        },
      },
      headline: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: '15px',
        '@sm': {
          fontSize: 13,
          lineHeight: '16px',
        },
        '@lg': {
          fontSize: 15,
          lineHeight: '18px',
        },
      },
      body: {
        fontWeight: '400',
        fontSize: 10,
        lineHeight: '12px',
        '@sm': {
          fontSize: 12,
          lineHeight: '15px',
        },
        '@lg': {
          fontSize: 15,
          lineHeight: '18px',
        },
      },
      descriptor: {
        fontWeight: '400',
        fontSize: 10,
        lineHeight: '12px',
        '@sm': {
          fontSize: 11,
          lineHeight: '13px',
        },
        '@lg': {
          fontSize: 12,
          lineHeight: '15px',
        },
      },
      descriptorAccent: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: '15px',
      },
      button: {
        fontWeight: '600',
        letterSpacing: '0.03em',
        fontSize: 12,
        lineHeight: '15px',
        '@sm': {
          fontSize: 13,
          lineHeight: '16px',
        },
        '@lg': {
          fontSize: 15,
          lineHeight: '18px',
        },
      },
    },
  },
});
