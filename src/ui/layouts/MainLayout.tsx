import { ReactNode } from 'react';

import { Box, Flex } from '..';
import { keyframes } from '../utils/theme';
import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const floating = keyframes({
    from: {
      backgroundPosition: '0 0',
    },
    to: {
      backgroundPosition: '1920px -1346px',
    },
  });

  return (
    <Flex
      css={{
        position: 'relative',
        p: '40px 10px 10px 40px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$appBackground',
        minHeight: '100vh',
        overflow: 'hidden',
      }}>
      <Box
        css={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/background.svg)',
          backgroundRepeat: 'repeat',
          animation: `${floating} 40s linear infinite`,
        }}
      />

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
          },
          '&:before': {
            width: 30,
            height: '100%',
            left: -60,
            top: -15,
            transform: 'translateX(100%) skewY(45deg)',
          },
          '&:after': {
            width: '100%',
            height: 30,
            left: -15,
            top: -60,
            transform: 'translateY(100%) skewX(45deg)',
          },
        }}>
        <Box
          css={{
            background: '$main',
            width: 35,
            height: 35,
            position: 'absolute',
            top: -30,
            left: -30,
          }}
        />

        <Box
          css={{
            position: 'relative',
            zIndex: 2,
            border: '3px solid $main',
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
              flexDirection: 'column',
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
