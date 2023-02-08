import React, { ReactNode } from 'react';

import CrossIcon from '/public/images/icons/cross.svg';

import { Flex } from '../primitives/Flex';
import { Image } from '../primitives/Image';
import { Typography } from '../primitives/Typography';

interface InputWrapperProps {
  children: ReactNode;
  isError?: boolean;
  error?: string;
  onCrossClick?: () => void;
}

export function InputWrapper({
  isError,
  error,
  children,
  onCrossClick,
}: InputWrapperProps) {
  return (
    <Flex
      css={{
        flexDirection: 'column',
        pb: 8,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        '@sm': {
          width: 'calc(100% + 40px)',
        },
        '@lg': {
          width: 'calc(100% + 60px)',
        },
      }}>
      {children}

      {!!onCrossClick && (
        <Flex
          as="button"
          type="button"
          onClick={onCrossClick}
          css={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            lineHeight: 0,
            transition: 'all 0.2s ease',
            hover: {
              opacity: 0.7,
            },
            right: 5,
            '@lg': {
              right: 18,
            },
          }}>
          <Image as={CrossIcon} css={{ size: 18, path: { stroke: '$main' } }} />
        </Flex>
      )}

      {isError && (
        <Typography
          variant="descriptor"
          css={{
            color: '$error',
            position: 'absolute',
            top: '100%',
            alignSelf: 'flex-start',
            textAlign: 'left',
            width: '100%',
            left: 10,
            '@lg': {
              left: 25,
            },
          }}>
          {error}
        </Typography>
      )}
    </Flex>
  );
}
