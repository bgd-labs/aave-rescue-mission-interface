import { ReactNode } from 'react';

import { useStore } from '../../store';
import { Box, Flex } from '..';
import { AboutModal } from '../components/AboutModal';
import { TermsAndConditionsModal } from '../components/TermsAndConditionsModal';
import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { isModalOpen, setModalOpen } = useStore();

  return (
    <>
      <Flex
        css={{
          position: 'relative',
          p: '25px 10px 10px 25px',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '$appBackground',
          minHeight: '100dvh',
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
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: 'url(/images/backgroundSM.svg)',
            '@sm': {
              backgroundSize: 'auto',
              backgroundImage: 'url(/images/backgroundMD.svg)',
            },
            '@lg': {
              backgroundImage: 'url(/images/backgroundLG.svg)',
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
              maxWidth: 420,
            },
            '@lg': {
              maxWidth: 520,
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
              backgroundColor: '#5C6279',
              width: '100%',
              transform: 'translateY(100%) skewX(45deg)',
              height: 20,
              left: -10,
              top: -40,
              border: '2px solid $main',
              borderRight: '3px solid $main',
              borderBottom: 'unset',
              '@sm': {
                height: 30,
                left: -15,
                top: -60,
              },
              '@lg': {
                border: '3px solid $main',
                borderRight: '4px solid $main',
                borderBottom: 'unset',
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
              p: '5px 5px 18px 5px',
              backgroundColor: '$whiteBackground',
              width: '100%',
              '@lg': {
                border: '3px solid $main',
                p: '8px 8px 22px 8px',
              },
            }}>
            <AppHeader />

            <Flex
              css={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                height: 330,
                px: 25,
                '@sm': {
                  height: 350,
                  px: 50,
                },
                '@lg': {
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

      <TermsAndConditionsModal isOpen={isModalOpen} setIsOpen={setModalOpen} />
      <AboutModal />
    </>
  );
}
