import { ReactNode } from 'react';

import { Flex } from '../primitives/Flex';

interface ContentWrapperProps {
  topBlock: ReactNode;
  children: ReactNode;
  bottomBlock?: ReactNode;
}

export function ContentWrapper({
  topBlock,
  children,
  bottomBlock,
}: ContentWrapperProps) {
  return (
    <Flex css={{ flexDirection: 'column', flex: 1, width: '100%' }}>
      <Flex
        css={{
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          mb: 20,
          '@lg': {
            mb: 28,
          },
        }}>
        {topBlock}
      </Flex>

      <Flex
        css={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          width: '100%',
        }}>
        {children}
      </Flex>

      <Flex
        css={{
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minHeight: 40,
          mt: 20,
          '@lg': {
            minHeight: 50,
            mt: 28,
          },
        }}>
        {bottomBlock}
      </Flex>
    </Flex>
  );
}
