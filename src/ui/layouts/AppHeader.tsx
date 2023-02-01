import { useRouter } from 'next/router';

import Logo from '/public/images/logo.svg';

import { useStore } from '../../store';
import { ConnectWalletButton } from '../../web3/components/wallet/ConnectWalletButton';
import { Box, Flex, Image, Typography } from '..';

export function AppHeader() {
  const router = useRouter();
  const { setAppView } = useStore();

  return (
    <Flex
      as="header"
      css={{
        background: '$main',
        alignItems: 'center',
        justifyContent: 'space-between',
        pr: 8,
        pl: 20,
        pt: 18,
        pb: 14,
        mb: 20,
        '@sm': {
          px: 25,
          pt: 22,
          pb: 17,
          mb: 25,
        },
        '@md': {
          px: 32,
          pt: 30,
          pb: 25,
          mb: 35,
        },
      }}>
      <Box>
        <Image
          as={Logo}
          css={{
            width: 89,
            height: 24,
            mb: 8,
            '@sm': { width: 110, height: 29, mb: 10 },
            '@md': { width: 140, height: 37, mb: 12 },
          }}
        />
        <Typography variant="descriptor" css={{ color: '$textWhite' }}>
          Rescue Mission
        </Typography>
      </Box>

      {router.pathname === '/' && (
        <ConnectWalletButton onClick={() => setAppView('connectWallet')} />
      )}
    </Flex>
  );
}
