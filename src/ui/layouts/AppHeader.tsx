import { useRouter } from 'next/router';

import Logo from '/public/images/logo.svg';

import { useStore } from '../../store';
import { ConnectWalletButton } from '../../web3/components/wallet/ConnectWalletButton';
import { Link } from '../components/Link';
import { Flex } from '../primitives/Flex';
import { Image } from '../primitives/Image';
import { Typography } from '../primitives/Typography';
import { ROUTES } from '../utils/routes';

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
        borderTopLeftRadius: '$1',
        borderTopRightRadius: '$1',
        background: '$main',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 20,
      }}>
      <Link
        href={ROUTES.logo}
        css={{
          lineHeight: 0,
          transform: 'translate(0)',
          hover: { opacity: 0.7 },
        }}>
        <Image as={Logo} css={{ width: 140, height: 37, mb: 12 }} />
        <Typography variant="descriptor" css={{ color: '$textWhite' }}>
          Rescue Mission
        </Typography>
      </Link>

      {router.pathname === '/' && (
        <ConnectWalletButton onClick={() => setAppView('connectWallet')} />
      )}
    </Flex>
  );
}
