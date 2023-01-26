import { useEffect, useState } from 'react';

import { selectLastTxByTypeAndPayload } from '../../../packages/src';
import { useStore } from '../../store';
import { TransactionUnion } from '../store/transactionsSlice';

export function useTxStatuses({
  type,
  payload,
}: Pick<TransactionUnion, 'type' | 'payload'>) {
  const getActiveAddress = useStore((state) => state.getActiveAddress);
  const activeAddress = getActiveAddress();

  const tx = useStore((state) =>
    selectLastTxByTypeAndPayload(state, activeAddress || '', type, payload),
  );

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTxStart, setIsTxStart] = useState(false);

  const txHash = tx && tx.hash;
  const txPending = tx && tx.pending;
  const txSuccess = tx && tx.status === 1;
  const txChainId = tx && tx.chainId;

  useEffect(() => {
    if (txPending || !!error) {
      setIsTxStart(true);
    }
  }, [txPending, error]);

  return {
    error,
    setError,
    loading,
    setLoading,
    isTxStart,
    setIsTxStart,
    txHash,
    txPending,
    txSuccess,
    txChainId,
  };
}
