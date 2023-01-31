import React, { ReactNode } from 'react';

import { Flex } from '../primitives/Flex';
import { Typography } from '../primitives/Typography';

interface InputWrapperProps {
  children: ReactNode;
  isError?: boolean;
  error?: string;
}

export function InputWrapper({ isError, error, children }: InputWrapperProps) {
  return (
    <Flex
      css={{
        flexDirection: 'column',
        width: '100%',
        pb: 8,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {children}
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
          }}>
          {error}
        </Typography>
      )}
    </Flex>
  );
}
