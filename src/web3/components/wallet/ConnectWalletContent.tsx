import React, { useEffect, useState } from 'react';

import { useStore } from '../../../store';
import { Button, Typography } from '../../../ui';
import { ContentWrapper } from '../../../ui/components/ContentWrapper';
import { GradientLoader } from '../../../ui/components/GradientLoader';
import { ImpersonatedForm } from './ImpersonatedForm';
import { Wallet, WalletItem } from './WalletItem';

export const wallets: Wallet[] = [
  {
    walletType: 'Metamask',
    icon: '/images/wallets/browserWallet.svg',
    title: 'Browser wallet',
    isVisible: true,
  },
  {
    walletType: 'Coinbase',
    icon: '/images/wallets/coinbase.svg',
    title: 'Coinbase',
    isVisible: true,
  },
  {
    walletType: 'WalletConnect',
    icon: '/images/wallets/walletConnect.svg',
    title: 'WalletConnect',
    isVisible: true,
  },
  {
    walletType: 'GnosisSafe',
    icon: '/images/wallets/gnosisSafe.svg',
    title: 'Gnosis safe',
    isVisible: typeof window !== 'undefined' && window !== window.parent,
  },
  {
    walletType: 'Impersonated',
    icon: '/images/wallets/impersonated.svg',
    title: 'Impersonated',
    isVisible: false,
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
        <GradientLoader />
      ) : (
        <>
          {impersonatedFormOpen && !!setImpersonatedFormOpen ? (
            <ImpersonatedForm closeClick={setImpersonatedFormOpen} />
          ) : (
            <>
              {wallets.map((wallet) => (
                <React.Fragment key={wallet.walletType}>
                  {wallet.isVisible && (
                    <WalletItem
                      walletType={wallet.walletType}
                      icon={wallet.icon}
                      title={wallet.title}
                      setOpenImpersonatedForm={setImpersonatedFormOpen}
                    />
                  )}
                </React.Fragment>
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
