import { ReactNode } from 'react';

import { Box } from '../primitives/Box';
import { Flex } from '../primitives/Flex';
import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Flex
      css={{
        position: 'relative',
        p: '30px 10px 10px 30px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$appBackground',
        backgroundImage: 'url(/images/background.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}>
      <Flex
        as="main"
        css={{
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          '@sm': {
            maxWidth: 540,
          },
          '&:after, &:before': {
            content: '',
            position: 'absolute',
            background: '$main',
            borderRadius: '$1',
          },
          '&:before': {
            width: 25,
            height: '100%',
            left: -42,
            top: -10,
            transform: 'translateX(100%) skewY(45deg)',
          },
          '&:after': {
            width: '100%',
            height: 25,
            left: -10,
            top: -42,
            transform: 'translateY(100%) skewX(45deg)',
          },
        }}>
        <Box
          css={{
            position: 'relative',
            zIndex: 2,
            border: '3px solid $main',
            borderRadius: '$1',
            p: '8px 8px 22px 8px',
            backgroundColor: '$whiteBackground',
            width: '100%',
          }}>
          <AppHeader />

          <Flex
            css={{
              height: 414,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              px: 60,
            }}>
            {children}
          </Flex>

          <AppFooter />
        </Box>
      </Flex>
    </Flex>
  );
}
