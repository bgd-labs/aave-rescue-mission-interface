import { styled } from '../utils/theme';

export const Container = styled('div', {
  mx: 'auto',
  position: 'relative',
  zIndex: 2,
  px: 12,
  '@sm': { px: 20 },
  variants: {
    size: {
      normal: {
        maxWidth: 1314,
      },
      small: {
        maxWidth: 1152,
      },
    },
  },
});
