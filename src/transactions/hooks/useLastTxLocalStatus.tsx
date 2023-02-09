import { useLastTxLocalStatus as baseUseLastTxLocalStatus } from '../../../packages/src';
import { useStore } from '../../store';
import { TransactionUnion } from '../store/transactionsSlice';

export function useLastTxLocalStatus({
  type,
  payload,
}: Pick<TransactionUnion, 'type' | 'payload'>) {
  const state = useStore();

  return baseUseLastTxLocalStatus<TransactionUnion>({
    state,
    activeAddress: state.activeWallet?.accounts[0] || '',
    type,
    payload,
  });
}
