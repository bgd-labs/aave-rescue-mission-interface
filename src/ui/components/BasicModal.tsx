import { Dialog } from '@headlessui/react';
import { CSS } from '@stitches/react';
import { ReactNode } from 'react';

import CloseIcon from '/public/images/icons/cross.svg';

import { Box } from '../primitives/Box';
import { Flex } from '../primitives/Flex';
import { Image } from '../primitives/Image';
import { keyframes } from '../utils/theme';
import { BoxWith3D } from './BoxWith3D';

export interface BasicModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: ReactNode;
  maxWidth?: number | string;
  withCloseButton?: boolean;
  withoutOverlap?: boolean;
  withoutAnimationWhenOpen?: boolean;
  contentCss?: CSS;
}

export function BasicModal({
  isOpen,
  setIsOpen,
  children,
  maxWidth,
  withCloseButton,
  withoutOverlap,
  withoutAnimationWhenOpen,
  contentCss,
}: BasicModalProps) {
  const modalOpen = keyframes({
    '0%': {
      opacity: withoutAnimationWhenOpen ? 1 : 0.5,
    },
    '100%': {
      opacity: 1,
    },
  });

  return (
    <Dialog
      as={Box}
      css={{
        position: 'relative',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}>
      {!withoutOverlap && (
        <Box
          css={{
            position: 'fixed',
            background: '$backgroundOverlap',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          aria-hidden="true"
        />
      )}

      <Flex
        css={{
          position: 'fixed',
          top: 12,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          '@sm': {
            top: 0,
          },
        }}>
        <Dialog.Panel
          as={Box}
          css={{
            width: '100%',
            height: '100%',
            m: 8,
            '@media (hover: hover) and (pointer: fine)': {
              animation: `${modalOpen} 0.3s`,
            },
            '@sm': { maxWidth: maxWidth || 900, height: 'unset' },
          }}>
          <BoxWith3D
            borderSize={20}
            alwaysWithBorders
            wrapperCss={{
              display: 'flex',
              width: '100%',
              height: 'calc(100% - 8px)',
              '@sm': {
                height: '100%',
              },
              '> div': { width: '100%', height: '100%', display: 'flex' },
            }}
            css={{
              position: 'relative',
              overflowX: 'hidden',
              overflowY: 'auto',
              width: '100%',
              height: '100%',
              display: 'flex',
              p: '30px 15px 15px',
              ...contentCss,
              '@sm': {
                display: 'block',
                maxHeight: 'calc(100vh - 20px)',
                height: 'unset',
                maxWidth: maxWidth || 900,
                p: '50px 30px 30px',
              },
            }}>
            <Box
              css={{
                margin: 'auto',
                width: '100%',
                maxWidth: maxWidth || 900,
                '@sm': { margin: '0 auto', maxWidth: 'unset' },
              }}>
              {children}
            </Box>

            {withCloseButton && (
              <Box
                css={{
                  position: 'absolute',
                  size: 16,
                  right: 24,
                  top: 2,
                  border: 'none',
                  background: 'none',
                  hover: {
                    opacity: '0.7',
                  },
                  '@sm': {
                    right: 20,
                  },
                }}
                as="button"
                type="button"
                onClick={() => {
                  setIsOpen(false);
                }}>
                <Image
                  as={CloseIcon}
                  css={{
                    position: 'fixed',
                    size: 16,
                    path: { stroke: '$main', fill: '$main' },
                  }}
                />
              </Box>
            )}
          </BoxWith3D>
        </Dialog.Panel>
      </Flex>
    </Dialog>
  );
}
