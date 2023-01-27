import React, { useEffect } from 'react';

import { selectLastTxByTypeAndPayload } from '../packages/src';
import { useStore } from '../src/store';
import { FormattedUserData } from '../src/store/appSlice';
import { ClaimTxModal } from '../src/transactions/components/ClaimTxModal';
import { TransactionUnion } from '../src/transactions/store/transactionsSlice';
import { Box, Button, Container, Typography } from '../src/ui';
import { Meta } from '../src/ui/components/Meta';

export default function Home() {
  const store = useStore();

  const {
    userData,
    getUserData,
    activeWallet,
    isTxModalOpen,
    setIsTxModalOpen,
    selectedUserData,
    setSelectedUserData,
  } = useStore();

  useEffect(() => {
    setSelectedUserData(undefined);
    getUserData();
  }, [activeWallet?.accounts[0]]);

  const handleClaimButtonClick = (data: FormattedUserData) => {
    setSelectedUserData(data);
    setIsTxModalOpen(true);
  };

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
      <Box css={{ mt: 100 }}>
        {!!userData.length ? (
          <>
            {userData.map((data) => (
              <Box
                css={{ mb: 30 }}
                key={`${data.index}-${data.distributionId}`}>
                <Typography css={{ mb: 10 }}>{data.tokenAmount}</Typography>

                <Button
                  onClick={() => handleClaimButtonClick(data)}
                  disabled={
                    data.isClaimed ||
                    getTxStatus({
                      type: 'claim',
                      payload: {
                        index: data.index,
                        address: activeWallet?.accounts[0] || '',
                        distributionId: data.distributionId,
                        formattedAmount: data.tokenAmount,
                      },
                    }).isSuccess
                  }
                  loading={
                    getTxStatus({
                      type: 'claim',
                      payload: {
                        index: data.index,
                        address: activeWallet?.accounts[0] || '',
                        distributionId: data.distributionId,
                        formattedAmount: data.tokenAmount,
                      },
                    }).isPending
                  }>
                  Claim
                </Button>
              </Box>
            ))}
          </>
        ) : (
          <Box>No assets to claim</Box>
        )}
      </Box>

      {selectedUserData && activeWallet && (
        <ClaimTxModal
          isOpen={isTxModalOpen}
          setIsOpen={setIsTxModalOpen}
          index={selectedUserData.index}
          address={activeWallet.accounts[0]}
          amount={selectedUserData.tokenAmountInWei}
          formattedAmount={selectedUserData.tokenAmount}
          proofs={selectedUserData.proof}
          distributionId={selectedUserData.distributionId}
        />
      )}
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  // TODO: need fix meta description
  return (
    <>
      <Meta title="Rescue" description="Rescue" />

      <Container size="normal">{page}</Container>
    </>
  );
};
