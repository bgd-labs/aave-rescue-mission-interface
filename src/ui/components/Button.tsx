import { CSS } from '@stitches/react';
import { MouseEventHandler, ReactNode } from 'react';

import { Box } from '..';
import { Typography } from '../primitives/Typography';
import { styled } from '../utils/theme';
import { Spinner } from './Spinner';

export interface ButtonProps {
  type?: 'button' | 'submit';
  size?: 'medium' | 'small';
  color?: 'transparent' | 'white' | 'dark';
  children: string | ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  css?: CSS;
}

const ButtonWrapper = styled('button', {
  overflow: 'hidden',
  borderRadius: '$1',
  border: '1px solid $main',
  background: '$main',
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  color: '$textWhite',
  hover: {
    background: '$secondary',
  },
  '&:active': {
    boxShadow: 'inset -2px 6px 3px 2px rgba(27, 32, 48, 0.7)',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    boxShadow: 'unset',
    border: '1px solid $light',
    background: '$light',
    color: '$text !important',
  },
  variants: {
    size: {
      medium: {
        minWidth: 140,
        height: 36,
        p: 2,
        '@lg': {
          minWidth: 176,
          height: 46,
          p: 4,
        },
      },
      small: {
        minWidth: 120,
        height: 36,
        p: 2,
        '@lg': {
          minWidth: 150,
          height: 46,
          p: 4,
        },
      },
    },
    color: {
      transparent: {
        background: 'transparent',
        color: '$text',
        hover: {
          color: '$textWhite',
        },
      },
      white: {
        background: '$textWhite',
        color: '$text',
        hover: {
          color: '$textWhite',
        },
      },
      dark: {
        background: '$main',
      },
    },
  },
});

export function Button({
  type = 'button',
  size = 'medium',
  color = 'dark',
  children,
  disabled,
  loading,
  onClick,
  css,
}: ButtonProps) {
  const loaderSize = 16;
  const loaderLineSize = 3;

  return (
    <ButtonWrapper
      type={type}
      size={size}
      color={color}
      disabled={disabled || loading}
      css={{ ...css }}
      onClick={onClick}>
      <Typography
        className="Button__title"
        variant="button"
        css={{
          position: 'relative',
          zIndex: 5,
          flex: loading ? 'unset' : 1,
          alignSelf: 'center',
          whiteSpace: 'nowrap',
        }}>
        {children}
      </Typography>

      {loading && (
        <Box css={{ ml: 5, background: '$light' }}>
          <Spinner
            size={loaderSize}
            loaderLineColor="$paper"
            loaderCss={{ background: '$main' }}
            lineSize={loaderLineSize}
          />
        </Box>
      )}
    </ButtonWrapper>
  );
}
