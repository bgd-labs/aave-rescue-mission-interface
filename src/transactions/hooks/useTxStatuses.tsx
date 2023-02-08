import { useTxStatuses as baseUseTxStatuses } from '../../../packages/src';
import { useStore } from '../../store';
import { TransactionUnion } from '../store/transactionsSlice';

export function useTxStatuses({
  type,
  payload,
}: Pick<TransactionUnion, 'type' | 'payload'>) {
  const state = useStore();

  return baseUseTxStatuses<TransactionUnion>({
    state,
    activeAddress: state.activeWallet?.accounts[0] || '',
    type,
    payload,
  });
}
