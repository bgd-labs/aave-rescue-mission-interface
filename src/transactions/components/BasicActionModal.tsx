import React, { useEffect } from 'react';

import { BasicModal } from '../../ui';
import {
  ActionModalContent,
  ActionModalContentProps,
} from './ActionModalContent';

interface BasicActionModalProps extends ActionModalContentProps {
  isOpen: boolean;
}

export function BasicActionModal({
  isOpen,
  setIsOpen,
  topBlock,
  contentMinHeight,
  children,
  txHash,
  txPending,
  txSuccess,
  txChainId,
  isTxStart,
  setIsTxStart,
  error,
  setError,
  successElement,
}: BasicActionModalProps) {
  useEffect(() => {
    setIsTxStart(false);
    setError('');
  }, [isOpen]);

  return (
    <BasicModal isOpen={isOpen} setIsOpen={setIsOpen} withCloseButton>
      <ActionModalContent
        topBlock={topBlock}
        setIsOpen={setIsOpen}
        isTxStart={isTxStart}
        setIsTxStart={setIsTxStart}
        error={error}
        setError={setError}
        contentMinHeight={contentMinHeight}
        successElement={successElement}
        txSuccess={txSuccess}
        txHash={txHash}
        txPending={txPending}
        txChainId={txChainId}>
        {children}
      </ActionModalContent>
    </BasicModal>
  );
}
