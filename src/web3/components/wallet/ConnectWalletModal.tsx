import { useEffect, useState } from 'react';

import { useStore } from '../../../store';
import { BasicModal } from '../../../ui';
import { ConnectWalletModalContent } from './ConnectWalletModalContent';
import { Wallet } from './WalletItem';

interface ConnectWalletModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

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

export function ConnectWalletModal({
  isOpen,
  setIsOpen,
}: ConnectWalletModalProps) {
  const walletActivating = useStore((state) => state.walletActivating);
  const walletConnectionError = useStore(
    (state) => state.walletConnectionError,
  );
  const setModalOpen = useStore((state) => state.setModalOpen);

  const [impersonatedFormOpen, setImpersonatedFormOpen] = useState(false);

  useEffect(() => {
    setImpersonatedFormOpen(false);
  }, [isOpen]);

  useEffect(() => {
    if (!walletActivating && !walletConnectionError) {
      setIsOpen(false);
      setModalOpen(false);
    }
  }, [walletActivating, walletConnectionError]);

  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen} withCloseButton>
      <ConnectWalletModalContent
        walletActivating={walletActivating}
        wallets={wallets}
        impersonatedFormOpen={impersonatedFormOpen}
        setImpersonatedFormOpen={setImpersonatedFormOpen}
        walletConnectionError={walletConnectionError}
      />
    </BasicModal>
  );
}
