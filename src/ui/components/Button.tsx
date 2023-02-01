import { CSS } from '@stitches/react';
import { MouseEventHandler, ReactNode } from 'react';

import { Typography } from '../primitives/Typography';
import { styled } from '../utils/theme';
import { Spinner } from './Spinner';

export interface ButtonProps {
  type?: 'button' | 'submit';
  size?: 'medium' | 'small';
  color?: 'gray' | 'dark' | 'secondary' | 'white';
  activeColorType?: 'gradient';
  loadingColorType?: 'pending' | 'disabled';
  children: string | ReactNode;
  disabled?: boolean;
  loading?: boolean;
  gradientLoader?: boolean;
  leftComponent?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  transparent?: boolean;
  css?: CSS;
}

const ButtonWrapper = styled('button', {
  overflow: 'hidden',
  borderRadius: '$1',
  border: 'none',
  background: 'transparent',
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  '.Button__regular': {
    opacity: 1,
    transform: 'scale(1)',
    zIndex: 1,
  },
  '&.Button__gray .Button__title, &.Button__transparent .Button__title, &.Button__white .Button__title':
    {
      color: '$text',
    },
  '&.Button__secondary': {
    '&.Button__transparent .Button__title': {
      color: '$secondary',
    },
  },
  '.Button__title': {
    color: '$textWhite',
  },
  '&.Button__transparent .Button__hover': {
    transform: 'scale(1)',
  },
  hover: {
    boxShadow: 'unset',
    '&.Button__gray .Button__title': {
      color: '$textWhite',
    },
    '&.Button__secondary': {
      '&.Button__transparent .Button__title': {
        color: '$text',
      },
    },
    '&.Button__transparent .Button__title': {
      color: '$text',
    },
    '.Button__regular': {
      zIndex: 0,
    },
    '.Button__hover': {
      opacity: 1,
      transform: 'scale(1)',
      zIndex: 1,
    },
  },
  '&:active': {
    '.Button__title': {
      transition: 'unset',
      color: '$textWhite',
    },
    '&.Button__secondary': {
      '&.Button__transparent .Button__title': {
        color: '$text',
      },
    },
    '&.Button__transparent .Button__title': {
      color: '$text',
    },
    '.Button__icon': {
      path: { stroke: '$textWhite', fill: '$textWhite' },
    },
    '.Button__regular, .Button__hover': {
      zIndex: 0,
    },
    '.Button__hover': {
      transform: 'scale(0.95)',
    },
    '.Button__active': {
      opacity: 1,
      transition: 'unset',
      transform: 'scale(1)',
      zIndex: 1,
    },
  },
  '&:disabled': {
    cursor: 'not-allowed',
    boxShadow: 'unset',
    '.Button__title': {
      color: '$text',
    },
    '.Button__regular, .Button__hover, .Button__active': {
      opacity: 0,
      zIndex: 0,
    },
    '.Button__disabled': {
      opacity: 1,
      transform: 'scale(1)',
      zIndex: 1,
    },
  },
  variants: {
    size: {
      medium: {
        minWidth: 135,
        height: 36,
        p: 2,
        '@sm': {
          minWidth: 140,
          height: 36,
        },
        '@md': {
          minWidth: 176,
          height: 46,
          p: 4,
        },
      },
      small: {
        minWidth: 120,
        height: 36,
        p: 2,
        '@md': {
          minWidth: 150,
          height: 46,
          p: 4,
        },
      },
    },
  },
});

const ButtonInner = styled('div', {
  borderRadius: '$1',
  position: 'absolute',
  inset: 0,
  opacity: 0,
  transform: 'scale(0.8)',
  zIndex: 0,
  transition: 'all 0.2s ease',
  variants: {
    color: {
      gray: {
        background: '$light',
      },
      grayTransparent: {
        background: '$light',
      },
      grayActive: {
        background: '$appBackground',
        boxShadow: '$buttonInsetBig',
      },
      secondary: {
        background: '$secondary',
      },
      secondaryTransparent: {
        border: '1px solid $secondary',
      },
      dark: {
        buttonGradientDark: '',
      },
      darkTransparent: {
        border: '1px solid $main',
      },
      white: {
        background: '$textWhite',
      },
      whiteTransparent: {
        buttonGradientLight: '',
        boxShadow: '$buttonInset',
      },
      hover: {
        buttonGradientHoverDark: '',
        boxShadow: '$buttonInset',
      },
      whiteHover: {
        buttonGradientLight: '',
        boxShadow: '$buttonInset',
      },
      forVote: {
        forGradientFlat: '',
      },
      againstVote: {
        againstGradientFlat: '',
      },
      gradient: {
        mainGradient: '',
      },
      pending: {
        buttonGradientDisabled: '',
      },
      disabled: {
        background: '$light',
      },
    },
  },
});

const ButtonLeftInner = styled('div', {
  position: 'relative',
  zIndex: 5,
  lineHeight: 0,
  borderRadius: '$1',
  variants: {
    color: {
      pending: {
        buttonGradientDisabled: '',
      },
      disabled: {
        background: '$light',
      },
    },
  },
});

export function Button({
  type = 'button',
  size = 'medium',
  color = 'dark',
  activeColorType = 'gradient',
  loadingColorType = 'disabled',
  children,
  disabled,
  loading,
  gradientLoader,
  leftComponent,
  onClick,
  transparent,
  css,
}: ButtonProps) {
  const loaderSize = 16;
  const loaderLineSize = 3;

  return (
    <ButtonWrapper
      className={`Button__${color} ${transparent ? `Button__transparent` : ''}`}
      type={type}
      size={size}
      disabled={disabled || loading}
      css={{
        justifyContent: leftComponent ? 'space-between' : 'center',
        boxShadow: 'unset',
        ...css,
      }}
      onClick={onClick}>
      <ButtonInner
        className="Button__regular"
        color={transparent ? `${color}Transparent` : color}
      />
      <ButtonInner
        className="Button__hover"
        color={color === 'white' || transparent ? 'whiteHover' : 'hover'}
      />
      <ButtonInner
        className="Button__active"
        color={transparent ? 'grayActive' : activeColorType}
        css={{ transform: 'scale(0.1)', transition: 'all 0.4s ease' }}
      />
      {(disabled || loading) && (
        <ButtonInner className="Button__disabled" color={loadingColorType} />
      )}

      <Typography
        className="Button__title"
        variant="button"
        css={{
          position: 'relative',
          zIndex: 5,
          transition: 'all 0.2s ease',
          flex: loading ? 'unset' : 1,
          alignSelf: 'center',
          whiteSpace: 'nowrap',
        }}>
        {children}
      </Typography>

      {(loading || leftComponent) && (
        <ButtonLeftInner
          color={loadingColorType}
          css={{
            ml: leftComponent ? 4 : 5,
          }}>
          {loading && (
            <Spinner
              size={loaderSize}
              loaderLineColor="$paper"
              loaderCss={
                gradientLoader ? { mainGradient: '' } : { background: '$main' }
              }
              lineSize={loaderLineSize}
            />
          )}

          {leftComponent && leftComponent}
        </ButtonLeftInner>
      )}
    </ButtonWrapper>
  );
}
