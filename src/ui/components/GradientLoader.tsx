import React from 'react';

import { Flex } from '../primitives/Flex';
import { Image } from '../primitives/Image';
import { keyframes } from '../utils/theme';

export function GradientLoader() {
  const load = keyframes({
    to: {
      transform: 'rotate(360deg)',
    },
  });

  const smSize = 120;
  const mdSize = 140;
  const lgSize = 160;

  return (
    <Flex
      css={{
        background: '$whiteBackground',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <Flex
        css={{
          display: 'inline-flex',
          borderRadius: '50%',
          animation: `${load} 1.3s linear infinite`,
          size: smSize,
          '@sm': {
            size: mdSize,
          },
          '@lg': {
            size: lgSize,
          },
        }}>
        <Image
          src="/images/bigGradientSpinner.gif"
          alt=""
          css={{
            size: smSize,
            '@sm': {
              size: mdSize,
            },
            '@lg': {
              size: lgSize,
            },
          }}
        />
      </Flex>
    </Flex>
  );
}
