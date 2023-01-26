import { BackButton, Box, Divider, Typography } from '../../ui';
import { TransactionUnion } from '../store/transactionsSlice';
import { TransactionInfoItem } from './TransactionInfoItem';

interface TransactionsModalContentProps {
  allTransactions: (TransactionUnion & {
    status?: number | undefined;
    pending: boolean;
  })[];
  onBackButtonClick: () => void;
}

export function TransactionsModalContent({
  allTransactions,
  onBackButtonClick,
}: TransactionsModalContentProps) {
  return (
    <Box>
      <Typography variant="h2" css={{ textAlign: 'center' }}>
        All Transactions
      </Typography>

      <Divider css={{ mt: 13, mb: 26 }} />

      <Box css={{ overflowY: 'scroll', height: 310, pr: 20 }}>
        {allTransactions
          .sort(
            (a, b) =>
              (b.timestamp ? b.timestamp : b.nonce) -
              (a.timestamp ? a.timestamp : a.nonce),
          )
          .map((tx, index) => (
            <TransactionInfoItem key={index} tx={tx} />
          ))}
      </Box>

      <BackButton onClick={onBackButtonClick} css={{ mt: 40 }} />
    </Box>
  );
}
