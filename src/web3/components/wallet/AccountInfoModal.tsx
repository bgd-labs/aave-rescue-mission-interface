import React from 'react';

import { selectAllTransactionsByWallet } from '../../../../packages/src';
import { useStore } from '../../../store';
import { BasicModal } from '../../../ui';
import { appConfig } from '../../../utils/appConfig';
import { AccountInfoModalContent } from './AccountInfoModalContent';

interface AccountInfoModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  allTransactionModalOpen: boolean;
  setAllTransactionModalOpen: (value: boolean) => void;
}

export function AccountInfoModal({
  isOpen,
  setIsOpen,
  allTransactionModalOpen,
  setAllTransactionModalOpen,
}: AccountInfoModalProps) {
  const {
    activeWallet,
    getActiveAddress,
    disconnectActiveWallet,
    setModalOpen,
  } = useStore();

  const activeAddress = getActiveAddress() || '';
  const allTransactions = useStore((state) =>
    selectAllTransactionsByWallet(state, activeAddress),
  );

  const handleDisconnectClick = async () => {
    await disconnectActiveWallet();
    setIsOpen(false);
    setModalOpen(false);
  };

  return (
    <BasicModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      withCloseButton
      withoutOverlap={allTransactionModalOpen}>
      <AccountInfoModalContent
        activeAddress={activeAddress}
        chainId={activeWallet?.chainId || appConfig.chainId}
        isActive={activeWallet?.isActive || false}
        allTransactions={allTransactions}
        onDisconnectButtonClick={handleDisconnectClick}
        onAllTransactionButtonClick={() => setAllTransactionModalOpen(true)}
      />
    </BasicModal>
  );
}
