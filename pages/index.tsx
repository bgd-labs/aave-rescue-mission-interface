// TODO: UI in progress

import React from 'react';

import { selectLastTxByTypeAndPayload } from '../packages/src';
import { useStore } from '../src/store';
import { TransactionUnion } from '../src/transactions/store/transactionsSlice';
import { Box, Button, Typography } from '../src/ui';
import { GetUserDataForm } from '../src/ui/components/GetUserDataForm';
import { Meta } from '../src/ui/components/Meta';
import { ConnectWalletContent } from '../src/web3/components/wallet/ConnectWalletContent';

export default function Home() {
  const store = useStore();

  const { userData, activeWallet, appView } = useStore();

  const getTxStatus = ({
    type,
    payload,
  }: Pick<TransactionUnion, 'type' | 'payload'>) => {
    const tx = selectLastTxByTypeAndPayload(
      store,
      activeWallet?.accounts[0] || '',
      type,
      payload,
    );

    const isPending =
      tx && tx.type === type && tx.payload === payload && tx.pending;

    const isSuccess =
      tx && tx.type === type && tx.payload === payload && tx.status === 1;

    return { isPending, isSuccess };
  };

  return (
    <>
      {appView === '' && <GetUserDataForm />}
      {appView === 'connectWallet' && <ConnectWalletContent />}

      {appView === 'info' && (
        <Box css={{ mt: 100 }}>
          {!!userData.length ? (
            <>
              {userData
                .filter((data) => !data.isClaimed)
                .map((data) => (
                  <Box
                    css={{ mb: 30 }}
                    key={`${data.index}-${data.distributionId}`}>
                    <Typography css={{ mb: 10 }}>{data.tokenAmount}</Typography>
                  </Box>
                ))}

              <Button
                disabled={
                  userData.every((data) => data.isClaimed) ||
                  getTxStatus({
                    type: 'claim',
                    payload: {
                      tokensToClaim: userData.map((data) => {
                        return {
                          index: data.index,
                          account: '', // TODO: need address
                          amount: data.tokenAmountInWei,
                          formattedAmount: data.tokenAmount,
                          merkleProof: data.proof,
                          distributionId: data.distributionId,
                        };
                      }),
                    },
                  }).isSuccess
                }
                loading={
                  getTxStatus({
                    type: 'claim',
                    payload: {
                      tokensToClaim: userData.map((data) => {
                        return {
                          index: data.index,
                          account: '', // TODO: need address
                          amount: data.tokenAmountInWei,
                          formattedAmount: data.tokenAmount,
                          merkleProof: data.proof,
                          distributionId: data.distributionId,
                        };
                      }),
                    },
                  }).isPending
                }>
                Claim
              </Button>
            </>
          ) : (
            <Box>No assets to claim</Box>
          )}
        </Box>
      )}
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  // TODO: need fix meta description
  return (
    <>
      <Meta title="Rescue" description="Rescue" />

      <>{page}</>
    </>
  );
};
