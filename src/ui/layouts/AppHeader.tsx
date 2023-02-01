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
        px: 32,
        pt: 30,
        pb: 25,
        background: '$main',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 35,
      }}>
      <Box>
        <Image as={Logo} css={{ width: 140, height: 37, mb: 12 }} />
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
