import React, { useEffect, useState } from 'react';

import CoinbaseIcon from '/public/images/wallets/coinbase.svg';
import GnosisSafeIcon from '/public/images/wallets/gnosisSafe.svg';
import ImpersonatedIcon from '/public/images/wallets/impersonated.svg';
import WalletConnectIcon from '/public/images/wallets/walletConnect.svg';

import { getBrowserWalletLabelAndIcon } from '../../../../packages/src';
import { useStore } from '../../../store';
import { Button, Typography } from '../../../ui';
import { ContentWrapper } from '../../../ui/components/ContentWrapper';
import { GradientLoader } from '../../../ui/components/GradientLoader';
import { ImpersonatedForm } from './ImpersonatedForm';
import { Wallet, WalletItem } from './WalletItem';

export function ConnectWalletContent() {
  const { walletActivating, walletConnectionError, setAppView, prevAppView } =
    useStore();

  const [impersonatedFormOpen, setImpersonatedFormOpen] = useState(false);

  useEffect(() => {
    setImpersonatedFormOpen(false);
  }, []);

  const browserWalletInfo = getBrowserWalletLabelAndIcon();

  const wallets: Wallet[] = [
    {
      walletType: 'Coinbase',
      icon: CoinbaseIcon,
      title: 'Coinbase',
      isVisible: true,
    },
    {
      walletType: 'WalletConnect',
      icon: WalletConnectIcon,
      title: 'WalletConnect',
      isVisible: true,
    },
    {
      walletType: 'GnosisSafe',
      icon: GnosisSafeIcon,
      title: 'Gnosis safe',
      isVisible: typeof window !== 'undefined' && window !== window.parent,
    },
    {
      walletType: 'Impersonated',
      icon: ImpersonatedIcon,
      title: 'Impersonated',
      isVisible: true,
    },
  ];

  if (!!browserWalletInfo) {
    wallets.unshift({
      walletType: 'Metamask',
      icon: browserWalletInfo.icon,
      title: browserWalletInfo.label,
      isVisible: true,
    });
  }

  return (
    <ContentWrapper
      topBlock={
        <Typography variant="h1">
          {walletActivating ? 'Connecting' : 'Connect a wallet'}
        </Typography>
      }
      bottomBlock={
        !walletActivating && (
          <Button onClick={() => setAppView(prevAppView)} color="transparent">
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
