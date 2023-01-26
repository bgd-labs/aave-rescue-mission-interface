import { CSS } from '@stitches/react';

import { Box } from '../primitives/Box';
import { keyframes, styled } from '../utils/theme';

export interface SpinnerProps {
  css?: CSS;
  size: number;
  loaderLineColor: string;
  loaderCss: CSS;
  lineSize?: number;
}

export function Spinner({
  css,
  size,
  loaderLineColor,
  loaderCss,
  lineSize = 2,
}: SpinnerProps) {
  const load = keyframes({
    to: {
      transform: 'rotate(360deg)',
    },
  });

  const LoaderLine = styled('div', {
    position: 'absolute',
    top: -1,
    width: size / 2 + 2,
    height: size + 2,
    borderRadius: '$4',
    zIndex: 3,
    ...loaderCss,
  });

  return (
    <Box
      css={{
        borderRadius: '$4',
        position: 'relative',
        size: size,
        transform: 'translateZ(0)',
        background: 'inherit',
        backgroundImage: 'inherit',
        overflow: 'hidden',
        ...css,
      }}>
      <Box
        css={{
          position: 'absolute',
          inset: lineSize,
          borderRadius: '$4',
          background: 'inherit',
          backgroundImage: 'inherit',
          zIndex: 4,
        }}
      />
      <Box
        css={{
          position: 'absolute',
          left: 0,
          top: 0,
          borderRadius: '$4',
          size: size,
          zIndex: 2,
          background: loaderLineColor,
        }}
      />

      <LoaderLine
        css={{
          borderRadius: '50% 0 0 50%',
          transformOrigin: `${size / 2}px ${size / 2}px`,
          left: -1,
          animation: `${load} 2s infinite ease 1.5s`,
        }}
      />
      <LoaderLine
        css={{
          borderRadius: '0 50% 50% 0',
          transformOrigin: `0 ${size / 2}px`,
          left: size / 2 - 1,
          animation: `${load} 2s infinite ease`,
        }}
      />
    </Box>
  );
}
