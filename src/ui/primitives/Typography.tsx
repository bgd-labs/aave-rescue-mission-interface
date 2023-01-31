import { styled } from '../utils/theme';

export const Typography = styled('p', {
  variants: {
    variant: {
      h1: {
        fontWeight: '500',
        letterSpacing: '0.03em',
        fontSize: 20,
        lineHeight: '24px',
      },
      h2: {
        fontWeight: '600',
        letterSpacing: '0.03em',
        fontSize: 16,
        lineHeight: '21px',
      },
      h3: {
        fontWeight: '400',
        letterSpacing: '0.03em',
        fontSize: 16,
        lineHeight: '19px',
      },
      headline: {
        fontWeight: '600',
        fontSize: 15,
        lineHeight: '18px',
      },
      body: {
        fontWeight: '400',
        fontSize: 15,
        lineHeight: '18px',
      },
      descriptor: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: '15px',
      },
      descriptorAccent: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: '15px',
      },
      button: {
        fontWeight: '600',
        letterSpacing: '0.03em',
        fontSize: 15,
        lineHeight: '18px',
      },
    },
  },
});
