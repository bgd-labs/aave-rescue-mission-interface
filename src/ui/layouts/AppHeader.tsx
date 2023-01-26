import Logo from '/public/images/logo.svg';

import { WalletWidget } from '../../web3/components/wallet/WalletWidget';
import { Link } from '../components/Link';
import { Box } from '../primitives/Box';
import { Container } from '../primitives/Container';
import { Flex } from '../primitives/Flex';
import { Image } from '../primitives/Image';
import { ROUTES } from '../utils/routes';
import { useScrollDirection } from '../utils/useScrollDirection';

export function AppHeader() {
  const { scrollDirection } = useScrollDirection();

  return (
    <Box
      as="header"
      css={{
        py: 18,
        zIndex: 101,
        background: '$main',
        position: 'sticky',
        top: scrollDirection === 'down' ? -76 : 0,
        transition: 'all 0.5s ease',
        '@sm': {
          py: 22,
          zIndex: 90,
          top: scrollDirection === 'down' ? -84 : 0,
        },
        '@lg': {
          py: 12,
          top: scrollDirection === 'down' ? -73 : 0,
        },
      }}>
      <Container size="normal">
        <Flex
          css={{
            background: '$paper',
            transition: 'all 0.4s ease',
            p: '8px 12px 8px 22px',
            borderRadius: '$2',
            borderTopRightRadius: '$2',
            borderTopLeftRadius: '$2',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '$paper',
          }}>
          <Flex css={{ alignItems: 'center' }}>
            <Link
              href={ROUTES.main}
              css={{
                lineHeight: 0,
                transform: 'translate(0)',
                hover: { opacity: 0.7 },
                '@sm': {
                  mr: 40,
                },
                '@lg': {
                  mr: 65,
                },
              }}>
              <Image as={Logo} css={{ width: 75, height: 20 }} />
            </Link>
          </Flex>

          <Flex css={{ alignItems: 'center' }}>
            <WalletWidget />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
