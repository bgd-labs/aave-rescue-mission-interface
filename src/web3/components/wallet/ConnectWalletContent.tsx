import { useEffect, useState } from 'react';

import { useStore } from '../../../store';
import { Button, Flex, Typography } from '../../../ui';
import { GradientLoader } from '../../../ui/components/GradientLoader';
import { ImpersonatedForm } from './ImpersonatedForm';
import { Wallet, WalletItem } from './WalletItem';

export const wallets: Wallet[] = [
  {
    walletType: 'Metamask',
    icon: '/images/wallets/browserWallet.svg',
    title: 'Browser wallet',
  },
  {
    walletType: 'Coinbase',
    icon: '/images/wallets/coinbase.svg',
    title: 'Coinbase',
  },
  {
    walletType: 'WalletConnect',
    icon: '/images/wallets/walletConnect.svg',
    title: 'WalletConnect',
  },
  {
    walletType: 'Impersonated',
    icon: '/images/wallets/impersonated.svg',
    title: 'Impersonated',
  },
];

export function ConnectWalletContent() {
  const { walletActivating, walletConnectionError, setAppView, prevAppView } =
    useStore();

  const [impersonatedFormOpen, setImpersonatedFormOpen] = useState(false);

  useEffect(() => {
    setImpersonatedFormOpen(false);
  }, []);

  return (
    <Flex
      css={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
      }}>
      <Flex
        css={{ flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <Typography
          css={{
            mb: 44,
            textAlign: 'center',
            fontWeight: 500,
            fontSize: 20,
            lineHeight: '24px',
          }}>
          {walletActivating ? 'Connecting' : 'Connect a wallet'}
        </Typography>

        <Flex
          css={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            minHeight: 150,
            mb: 40,
          }}>
          {walletActivating ? (
            <Flex
              css={{
                background: '$paper',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
              <GradientLoader size={160} />
            </Flex>
          ) : (
            <>
              {impersonatedFormOpen && !!setImpersonatedFormOpen ? (
                <ImpersonatedForm closeClick={setImpersonatedFormOpen} />
              ) : (
                <>
                  {wallets.map((wallet) => (
                    <WalletItem
                      walletType={wallet.walletType}
                      icon={wallet.icon}
                      title={wallet.title}
                      key={wallet.walletType}
                      setOpenImpersonatedForm={setImpersonatedFormOpen}
                    />
                  ))}
                </>
              )}
            </>
          )}

          {walletConnectionError && (
            <Typography
              variant="descriptor"
              css={{ color: '$error', textAlign: 'center', mb: 12 }}>
              {walletConnectionError}
            </Typography>
          )}
        </Flex>

        {walletActivating ? (
          <Typography
            css={{
              color: '$text',
              fontSize: 15,
              lineHeight: '18px',
              letterSpacing: '0.03em',
            }}>
            Waiting confirmation from your wallet
          </Typography>
        ) : (
          <Button onClick={() => setAppView(prevAppView)} transparent>
            Cancel
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
