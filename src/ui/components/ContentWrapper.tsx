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
          mb: 28,
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
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
          mt: 28,
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minHeight: 50,
        }}>
        {bottomBlock}
      </Flex>
    </Flex>
  );
}
