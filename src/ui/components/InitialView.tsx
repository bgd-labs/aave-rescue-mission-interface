import React from 'react';

import ImageSvg from '/public/images/welcomeImage.svg';

import { useStore } from '../../store';
import { Flex } from '../primitives/Flex';
import { Image } from '../primitives/Image';
import { Typography } from '../primitives/Typography';
import { Button } from './Button';
import { ContentWrapper } from './ContentWrapper';

export function InitialView() {
  const { setAppView, connectWallet, activeWallet } = useStore();

  return (
    <ContentWrapper
      topBlock={
        <Typography
          variant="h1"
          css={{
            fontSize: 24,
            lineHeight: '32px',
            '@lg': { fontSize: 32, lineHeight: '40px' },
          }}>
          Welcome
        </Typography>
      }
      bottomBlock={
        <Image
          as={ImageSvg}
          css={{ width: 120, height: 100, '@sm': { width: 158, height: 128 } }}
        />
      }>
      <Flex
        css={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Flex
          css={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {!activeWallet?.isActive && (
            <>
              <Button
                onClick={() =>
                  typeof window !== 'undefined' && window !== window.parent
                    ? connectWallet('GnosisSafe')
                    : setAppView('connectWallet')
                }>
                Connect wallet
              </Button>
              <Typography variant="h1" css={{ my: 12 }}>
                or
              </Typography>
            </>
          )}
          <Button onClick={() => setAppView('checkAddress')}>
            Check address
          </Button>
        </Flex>
      </Flex>
    </ContentWrapper>
  );
}
