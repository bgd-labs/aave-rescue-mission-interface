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
        width: 'calc(100% + 60px)',
        pb: 8,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
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
            right: 18,
            lineHeight: 0,
            transition: 'all 0.2s ease',
            hover: {
              opacity: 0.7,
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
            left: 30,
          }}>
          {error}
        </Typography>
      )}
    </Flex>
  );
}
