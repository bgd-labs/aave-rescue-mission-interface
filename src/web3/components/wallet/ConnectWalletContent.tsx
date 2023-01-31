import { useEffect, useState } from 'react';

import { useStore } from '../../../store';
import { Button, Flex, Typography } from '../../../ui';
import { ContentWrapper } from '../../../ui/components/ContentWrapper';
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
    <ContentWrapper
      topBlock={
        <Typography variant="h1">
          {walletActivating ? 'Connecting' : 'Connect a wallet'}
        </Typography>
      }
      bottomBlock={
        !walletActivating && (
          <Button onClick={() => setAppView(prevAppView)} transparent>
            Cancel
          </Button>
        )
      }>
      {walletActivating ? (
        <Flex
          css={{
            background: '$whiteBackground',
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

      {walletActivating && (
        <Typography css={{ letterSpacing: '0.03em' }}>
          Waiting confirmation from your wallet
        </Typography>
      )}
    </ContentWrapper>
  );
}
