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
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        mb: 20,
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
            color: '$textWhite',
            position: 'absolute',
            top: '100%',
            alignSelf: 'flex-start',
            textAlign: 'left',
            width: '100%',
            p: '5px 10px',
            background: '$error',
            borderBottomLeftRadius: '$1',
            borderBottomRightRadius: '$1',
            '@lg': {
              p: '5px 25px',
            },
          }}>
          {error}
        </Typography>
      )}
    </Flex>
  );
}
