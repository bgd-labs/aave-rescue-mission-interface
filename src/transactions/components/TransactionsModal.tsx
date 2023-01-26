import React from 'react';

import { selectAllTransactionsByWallet } from '../../../packages/src';
import { useStore } from '../../store';
import { BasicModal } from '../../ui';
import { TransactionsModalContent } from './TransactionsModalContent';

interface TransactionsModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function TransactionsModal({
  isOpen,
  setIsOpen,
}: TransactionsModalProps) {
  const getActiveAddress = useStore((state) => state.getActiveAddress);
  const activeAddress = getActiveAddress() || '';

  const allTransactions = useStore((state) =>
    selectAllTransactionsByWallet(state, activeAddress),
  );

  return (
    <BasicModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      withCloseButton
      withoutAnimationWhenOpen>
      <TransactionsModalContent
        allTransactions={allTransactions}
        onBackButtonClick={() => setIsOpen(false)}
      />
    </BasicModal>
  );
}
