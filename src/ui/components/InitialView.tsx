import React from 'react';

import { useStore } from '../../store';
import { Flex } from '../primitives/Flex';
import { Typography } from '../primitives/Typography';
import { Button } from './Button';
import { ContentWrapper } from './ContentWrapper';

export function InitialView() {
  const { setAppView } = useStore();

  return (
    <ContentWrapper topBlock={<Typography variant="h1">Welcome</Typography>}>
      <Flex
        css={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button onClick={() => setAppView('connectWallet')}>
          Connect wallet
        </Button>
        <Typography variant="h1" css={{ my: 12 }}>
          or
        </Typography>
        <Button onClick={() => setAppView('checkAddress')}>
          Check address
        </Button>
      </Flex>
    </ContentWrapper>
  );
}
