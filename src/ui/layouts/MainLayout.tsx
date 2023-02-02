import { ReactNode } from 'react';

import { Box, Flex } from '..';
import { keyframes } from '../utils/theme';
import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const floatingSM = keyframes({
    to: {
      backgroundPosition: '1257px -1009px',
    },
  });

  const floatingMD = keyframes({
    to: {
      backgroundPosition: '1504px -1009px',
    },
  });

  const floatingLG = keyframes({
    to: {
      backgroundPosition: '2304px -1541px',
    },
  });

  return (
    <Flex
      css={{
        position: 'relative',
        p: '25px 10px 10px 25px',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$appBackground',
        minHeight: '100vh',
        overflow: 'hidden',
        '@sm': {
          p: '40px 10px 10px 40px',
        },
      }}>
      <Box
        css={{
          position: 'absolute',
          inset: 0,
          backgroundRepeat: 'repeat',
          backgroundImage: 'url(/images/backgroundSM.svg)',
          animation: `${floatingSM} 40s linear infinite`,
          '@sm': {
            backgroundImage: 'url(/images/backgroundMD.svg)',
            animation: `${floatingMD} 40s linear infinite`,
          },
          '@md': {
            backgroundImage: 'url(/images/backgroundLG.svg)',
            animation: `${floatingLG} 40s linear infinite`,
          },
        }}
      />

      <Flex
        as="main"
        css={{
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 400,
          '@sm': {
            maxWidth: 540,
          },
          '&:after, &:before': {
            content: '',
            position: 'absolute',
            background: '$main',
          },
          '&:before': {
            transform: 'translateX(100%) skewY(45deg)',
            height: '100%',
            width: 20,
            left: -40,
            top: -10,
            '@sm': {
              width: 30,
              left: -60,
              top: -15,
            },
          },
          '&:after': {
            width: '100%',
            transform: 'translateY(100%) skewX(45deg)',
            height: 20,
            left: -10,
            top: -40,
            '@sm': {
              height: 30,
              left: -15,
              top: -60,
            },
          },
        }}>
        <Box
          css={{
            background: '$main',
            position: 'absolute',
            width: 25,
            height: 25,
            top: -20,
            left: -20,
            '@sm': {
              width: 35,
              height: 35,
              top: -30,
              left: -30,
            },
          }}
        />

        <Box
          css={{
            position: 'relative',
            zIndex: 2,
            border: '2px solid $main',
            p: '8px 8px 22px 8px',
            backgroundColor: '$whiteBackground',
            width: '100%',
            '@md': {
              border: '3px solid $main',
            },
          }}>
          <AppHeader />

          <Flex
            css={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              height: 414,
              px: 25,
              '@sm': {
                height: 414,
                px: 50,
              },
              '@md': {
                px: 60,
                height: 414,
              },
            }}>
            {children}
          </Flex>

          <AppFooter />
        </Box>
      </Flex>
    </Flex>
  );
}
