import { Dialog } from '@headlessui/react';
import { CSS } from '@stitches/react';
import { ReactNode, useEffect } from 'react';

import CloseIcon from '/public/images/icons/cross.svg';

import { useStore } from '../../store';
import { Box } from '../primitives/Box';
import { Flex } from '../primitives/Flex';
import { Image } from '../primitives/Image';
import { keyframes } from '../utils/theme';
import { BackButton } from './BackButton';

export interface BasicModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  children: ReactNode;
  maxWidth?: number | string;
  withCloseButton?: boolean;
  withoutOverlap?: boolean;
  withoutAnimationWhenOpen?: boolean;
  onBackButtonClick?: () => void;
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
  onBackButtonClick,
  contentCss,
}: BasicModalProps) {
  const setModalOpen = useStore((state) => state.setModalOpen);

  useEffect(() => {
    if (isOpen) {
      setModalOpen(true);
    }
  }, [isOpen]);

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
        setModalOpen(false);
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
          top: 76,
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
            background: '$paper',
            boxShadow: '$paper',
            position: 'relative',
            overflowX: 'hidden',
            overflowY: 'auto',
            width: '100%',
            height: '100%',
            display: 'flex',
            '@media (hover: hover) and (pointer: fine)': {
              animation: `${modalOpen} 0.3s`,
            },
            p: '32px 24px 24px',
            ...contentCss,
            '@sm': {
              display: 'block',
              m: 12,
              borderRadius: '$2',
              maxHeight: 'calc(100vh - 20px)',
              height: 'unset',
              maxWidth: maxWidth || 432,
              p: '44px 32px 32px',
            },
          }}>
          <Box
            css={{
              margin: 'auto',
              width: '100%',
              maxWidth: maxWidth || 432,
              '@sm': { margin: '0 auto', maxWidth: 'unset' },
            }}>
            {children}
          </Box>

          {!!onBackButtonClick && (
            <Box css={{ position: 'absolute', top: 10, left: 15 }}>
              <Box css={{ position: 'fixed' }}>
                <BackButton
                  onClick={onBackButtonClick}
                  variant="gray"
                  withFlatArrow
                />
              </Box>
            </Box>
          )}

          {withCloseButton && (
            <Box
              css={{
                position: 'absolute',
                size: 20,
                right: 24,
                top: 0,
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
                setModalOpen(false);
              }}>
              <Image
                as={CloseIcon}
                css={{
                  position: 'fixed',
                  size: 20,
                  path: { stroke: '$main', fill: '$main' },
                }}
              />
            </Box>
          )}
        </Dialog.Panel>
      </Flex>
    </Dialog>
  );
}
