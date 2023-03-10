import { CSS } from '@stitches/react';
import { ReactNode } from 'react';

import { useStore } from '../../store';
import { Box } from '../primitives/Box';

interface BoxWith3DProps {
  children: ReactNode;
  borderSize?: number;
  contentColor?: string;
  activeContentColor?: string;
  borderLinesColor?: string;
  leftBorderColor?: string;
  bottomBorderColor?: string;
  disabled?: boolean;
  withActions?: boolean;
  wrapperCss?: CSS;
  disableActiveState?: boolean;
  alwaysWithBorders?: boolean;
  css?: CSS;
}

const isBellowFour = (value: number) => {
  if (value < 4) {
    return 4;
  } else {
    return value;
  }
};

const borderSizeVariants = (value: number, variant: 'default' | 'sm') => {
  switch (variant) {
    case 'default':
      return isBellowFour(value - 4);
    case 'sm':
      return isBellowFour(value - 2);
    default:
      return value;
  }
};

function InitialBox({
  borderSize = 5,
  activeContentColor,
  contentColor,
  withActions,
  disableActiveState,
  children,
}: BoxWith3DProps) {
  if (withActions) {
    return (
      <Box
        css={{
          position: 'relative',
          pt: borderSizeVariants(borderSize, 'default'),
          pl: borderSizeVariants(borderSize, 'default'),
          '@sm': {
            pt: borderSizeVariants(borderSize, 'sm'),
            pl: borderSizeVariants(borderSize, 'sm'),
          },
          '@lg': {
            pt: borderSize,
            pl: borderSize,
          },
          hover: {
            '.BoxWith3D__left-shadow': {
              width: borderSizeVariants(borderSize, 'default') / 2,
              top: borderSizeVariants(borderSize, 'default') / 1.33,
              '@sm': {
                width: borderSizeVariants(borderSize, 'sm') / 2,
                top: borderSizeVariants(borderSize, 'sm') / 1.33,
              },
              '@lg': {
                width: borderSize / 2,
                top: borderSize / 1.33,
              },
            },
            '.BoxWith3D__bottom-shadow': {
              height: borderSizeVariants(borderSize, 'default') / 2,
              left: borderSizeVariants(borderSize, 'default') / 4 - 0.5,
              width: `calc(100% - ${borderSizeVariants(
                borderSize,
                'default',
              )}px + 0.5px)`,
              '@sm': {
                height: borderSizeVariants(borderSize, 'sm') / 2,
                left: borderSizeVariants(borderSize, 'sm') / 4 - 0.5,
                width: `calc(100% - ${borderSizeVariants(
                  borderSize,
                  'sm',
                )}px + 0.5px)`,
              },
              '@lg': {
                height: borderSize / 2,
                left: borderSize / 4 - 0.5,
                width: `calc(100% - ${borderSize}px + 0.5px)`,
              },
            },
            '.BoxWith3D__content': {
              transform: `translate(-${
                borderSizeVariants(borderSize, 'default') / 2
              }px, ${borderSizeVariants(borderSize, 'default') / 2}px)`,
              '@sm': {
                transform: `translate(-${
                  borderSizeVariants(borderSize, 'sm') / 2
                }px, ${borderSizeVariants(borderSize, 'sm') / 2}px)`,
              },
              '@lg': {
                transform: `translate(-${borderSize / 2}px, ${
                  borderSize / 2
                }px)`,
              },
            },
          },
          '&:active': disableActiveState
            ? {}
            : {
                overflow: 'hidden',
                '.BoxWith3D__left-shadow': {
                  width: 0,
                  border: 'unset',
                  top: borderSizeVariants(borderSize, 'default') + 1,
                  '@sm': {
                    top: borderSizeVariants(borderSize, 'sm') + 1,
                  },
                  '@lg': {
                    top: borderSize + 1,
                  },
                },
                '.BoxWith3D__bottom-shadow': {
                  height: 0,
                  border: 'unset',
                  left: -0.5,
                },
                '.BoxWith3D__content': {
                  background: activeContentColor
                    ? activeContentColor
                    : contentColor,
                  transform: `translate(-${borderSizeVariants(
                    borderSize,
                    'default',
                  )}px, ${borderSizeVariants(borderSize, 'default')}px)`,
                  '@sm': {
                    transform: `translate(-${borderSizeVariants(
                      borderSize,
                      'default',
                    )}px, ${borderSizeVariants(borderSize, 'sm')}px)`,
                  },
                  '@lg': {
                    transform: `translate(-${borderSize}px, ${borderSize}px)`,
                  },
                },
              },
        }}>
        {children}
      </Box>
    );
  } else {
    return (
      <Box
        css={{
          position: 'relative',
          pt: borderSizeVariants(borderSize, 'default'),
          pl: borderSizeVariants(borderSize, 'default'),
          '@sm': {
            pt: borderSizeVariants(borderSize, 'sm'),
            pl: borderSizeVariants(borderSize, 'sm'),
          },
          '@lg': {
            pt: borderSize,
            pl: borderSize,
          },
        }}>
        {children}
      </Box>
    );
  }
}

export function BoxWith3D({
  borderSize = 5,
  children,
  wrapperCss,
  contentColor = '$whiteBackground',
  activeContentColor,
  borderLinesColor = '$main',
  leftBorderColor = '$main',
  bottomBorderColor = '#5C6279',
  disabled,
  withActions,
  disableActiveState,
  alwaysWithBorders,
  css,
}: BoxWith3DProps) {
  const { isModalOpen } = useStore();

  const isDisabled = disabled || (isModalOpen && !alwaysWithBorders);

  return (
    <Box css={wrapperCss}>
      <InitialBox
        borderSize={borderSize}
        activeContentColor={activeContentColor}
        contentColor={contentColor}
        withActions={withActions && !isDisabled}
        disableActiveState={disableActiveState}>
        <Box
          className="BoxWith3D__left-shadow"
          css={{
            position: 'absolute',
            background: leftBorderColor,
            transform: 'skewY(45deg)',
            left: 0,
            border: `1px solid ${borderLinesColor}`,
            borderRight: 'unset',
            transition: 'all 0.1s ease',

            top: isDisabled
              ? borderSizeVariants(borderSize, 'default') + 0.2
              : borderSizeVariants(borderSize, 'default') / 2,
            height: `calc(100% - ${borderSizeVariants(
              borderSize,
              'default',
            )}px)`,
            width: isDisabled ? 0 : borderSizeVariants(borderSize, 'default'),
            '@sm': {
              top: isDisabled
                ? borderSizeVariants(borderSize, 'sm') + 0.2
                : borderSizeVariants(borderSize, 'sm') / 2,
              height: `calc(100% - ${borderSizeVariants(borderSize, 'sm')}px)`,
              width: isDisabled ? 0 : borderSizeVariants(borderSize, 'sm'),
            },
            '@lg': {
              top: isDisabled ? borderSize + 0.2 : borderSize / 2,
              height: `calc(100% - ${borderSize}px)`,
              width: isDisabled ? 0 : borderSize,
            },
          }}
        />
        <Box
          className="BoxWith3D__bottom-shadow"
          css={{
            position: 'absolute',
            background: bottomBorderColor,
            transform: 'skewX(45deg)',
            top: 0,
            border: `1px solid ${borderLinesColor}`,
            borderBottom: 'none',
            borderLeft: 'none',
            transition: 'all 0.1s ease',

            width: `calc(100% - ${borderSizeVariants(
              borderSize,
              'default',
            )}px)`,
            height: isDisabled ? 0 : borderSizeVariants(borderSize, 'default'),
            left: isDisabled
              ? 0
              : borderSizeVariants(borderSize, 'default') / 2,
            '@sm': {
              width: `calc(100% - ${borderSizeVariants(borderSize, 'sm')}px)`,
              height: isDisabled ? 0 : borderSizeVariants(borderSize, 'sm'),
              left: isDisabled ? 0 : borderSizeVariants(borderSize, 'sm') / 2,
            },
            '@lg': {
              width: `calc(100% - ${borderSize}px)`,
              height: isDisabled ? 0 : borderSize,
              left: isDisabled ? 0 : borderSize / 2,
            },
          }}
        />

        <Box
          className="BoxWith3D__content"
          css={{
            position: 'relative',
            zIndex: 3,
            background: contentColor,
            transitionProperty: 'transform, width, height, background',
            transitionDuration: '0.1s',
            transitionTimingFunction: 'ease',
            width: '100%',

            transform: isDisabled
              ? `translate(-${borderSizeVariants(
                  borderSize,
                  'default',
                )}px, ${borderSizeVariants(borderSize, 'default')}px)`
              : 'unset',
            '@sm': {
              transform: isDisabled
                ? `translate(-${borderSizeVariants(
                    borderSize,
                    'sm',
                  )}px, ${borderSizeVariants(borderSize, 'sm')}px)`
                : 'unset',
            },
            '@lg': {
              transform: isDisabled
                ? `translate(-${borderSize}px, ${borderSize}px)`
                : 'unset',
            },
          }}>
          <Box
            css={{
              width: '100%',
              height: '100%',
              border: `1px solid ${borderLinesColor}`,
              ...css,
            }}>
            {children}
          </Box>
        </Box>
      </InitialBox>
    </Box>
  );
}
