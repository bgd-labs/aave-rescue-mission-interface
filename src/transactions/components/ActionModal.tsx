import React, { ReactNode } from 'react';

import { Button, Flex } from '../../ui';
import { ButtonProps } from '../../ui/components/Button';
import { useTxStatuses } from '../hooks/useTxStatuses';
import { TransactionUnion } from '../store/transactionsSlice';
import { generateTxFunction } from '../utils/generateTxFunction';
import { BasicActionModal } from './BasicActionModal';

interface ActionModalProps
  extends Pick<ButtonProps, 'activeColorType'>,
    Pick<TransactionUnion, 'type' | 'payload'> {
  errorMessage: string;
  callbackFunction: () => Promise<void>;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  topBlock?: ReactNode;
  contentMinHeight?: number;
  children: ReactNode;
  actionButtonTitle: string;
  withCancelButton?: boolean;
}

export function ActionModal({
  errorMessage,
  callbackFunction,
  isOpen,
  setIsOpen,
  topBlock,
  contentMinHeight,
  activeColorType,
  children,
  actionButtonTitle,
  withCancelButton,
  type,
  payload,
}: ActionModalProps) {
  const {
    error,
    setError,
    loading,
    setLoading,
    isTxStart,
    txHash,
    txPending,
    txSuccess,
    setIsTxStart,
    txChainId,
  } = useTxStatuses({ type, payload });

  const handleClick = async () =>
    await generateTxFunction({
      setError,
      setLoading,
      errorMessage,
      callbackFunction,
    });

  return (
    <BasicActionModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      txHash={txHash}
      txSuccess={txSuccess}
      txPending={txPending}
      txChainId={txChainId}
      isTxStart={isTxStart}
      setIsTxStart={setIsTxStart}
      error={error}
      setError={setError}
      topBlock={topBlock}
      contentMinHeight={contentMinHeight || 150}>
      {children}

      <Flex css={{ alignItems: 'center', justifyContent: 'center' }}>
        {withCancelButton && (
          <Button
            color="secondary"
            transparent
            onClick={() => setIsOpen(false)}
            css={{
              mr: withCancelButton ? 24 : 0,
              '@lg': { mr: withCancelButton ? 20 : 0 },
            }}>
            Cancel
          </Button>
        )}
        <Button
          gradientLoader
          loadingColorType="pending"
          loading={loading}
          activeColorType={activeColorType}
          onClick={() => handleClick()}>
          {actionButtonTitle}
        </Button>
      </Flex>
    </BasicActionModal>
  );
}
