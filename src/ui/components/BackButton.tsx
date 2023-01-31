import { CSS } from '@stitches/react';
import React from 'react';

import BackArrowToLeft from '/public/images/icons/arrowToLeft.svg';
import BackArrow from '/public/images/icons/backArrow.svg';

import { Image } from '../primitives/Image';
import { Typography } from '../primitives/Typography';
import { styled } from '../utils/theme';

interface BackButtonProps {
  onClick: () => void;
  variant?: 'flat';
  css?: CSS;
  withFlatArrow?: boolean;
}

const ButtonWrapper = styled('button', {
  transition: 'all 0.2s ease',
  display: 'inline-flex',
  alignItems: 'center',
  color: '$textSecondary',
  lineHeight: 1,
  '.BackButton__arrow': {
    path: {
      transition: 'all 0.2s ease',
      fill: '$textSecondary',
    },
  },
  variants: {
    variant: {
      flat: {
        hover: {
          color: '$text',
          '.BackButton__arrow': {
            path: {
              fill: '$text',
            },
          },
        },
      },
    },
  },
});

export function BackButton({
  onClick,
  css,
  variant = 'flat',
  withFlatArrow,
}: BackButtonProps) {
  return (
    <ButtonWrapper
      type="button"
      variant={variant}
      css={{
        ...css,
      }}
      onClick={onClick}>
      <Image as={BackArrow} css={{ mr: 5 }} className="BackButton__arrow" />
      {withFlatArrow && (
        <Image
          as={BackArrowToLeft}
          css={{
            position: 'absolute',
            left: 8,
            width: 10,
            height: 12,
            path: {
              stroke: '$main',
            },
          }}
        />
      )}
      <Typography variant="body">Back</Typography>
    </ButtonWrapper>
  );
}
