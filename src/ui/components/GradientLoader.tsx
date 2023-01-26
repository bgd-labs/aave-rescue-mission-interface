import React from 'react';

import { Flex } from '../primitives/Flex';
import { Image } from '../primitives/Image';
import { keyframes } from '../utils/theme';

interface GradientLoaderProps {
  size?: number;
}

export function GradientLoader({ size = 77 }: GradientLoaderProps) {
  const load = keyframes({
    to: {
      transform: 'rotate(360deg)',
    },
  });

  return (
    <Flex
      css={{
        display: 'inline-flex',
        borderRadius: '50%',
        size: size,
        animation: `${load} 1.3s linear infinite`,
      }}>
      <Image src="/images/bigGradientSpinner.gif" alt="" css={{ size: size }} />
    </Flex>
  );
}
