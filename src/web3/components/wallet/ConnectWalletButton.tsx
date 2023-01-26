import makeBlockie from 'ethereum-blockies-base64';
import React, { useEffect, useState } from 'react';

import {
  LocalStorageKeys,
  selectAllTransactions,
  selectPendingTransactions,
  WalletType,
} from '../../../../packages/src';
import { useStore } from '../../../store';
import { Box, Button, Flex, Image, Spinner, Typography } from '../../../ui';
import { CustomSkeleton } from '../../../ui/components/CustomSkeleton';
import { textCenterEllipsis } from '../../../ui/utils/text-center-ellipsis';
import { media } from '../../../ui/utils/theme';
import { useMediaQuery } from '../../../ui/utils/useMediaQuery';
import { appConfig } from '../../../utils/appConfig';
import { chainInfoHelper } from '../../../utils/chains';
import { selectActiveWallet } from '../../store/web3Selectors';
import { useGetEns } from '../../utils/use-get-ens';

interface ConnectWalletButtonProps {
  onClick: () => void;
}

export function ConnectWalletButton({ onClick }: ConnectWalletButtonProps) {
  const lg = useMediaQuery(media.lg);
  const [loading, setLoading] = useState(true);

  const walletActivating = useStore((state) => state.walletActivating);
  const getActiveAddress = useStore((state) => state.getActiveAddress);
  const allTransactions = useStore((state) => selectAllTransactions(state));
  const allPendingTransactions = useStore((state) =>
    selectPendingTransactions(state),
  );
  const activeWallet = useStore(selectActiveWallet);

  const isActive = activeWallet?.isActive;
  const activeAddress = getActiveAddress() || '';
  const lastTransaction = allTransactions[allTransactions.length - 1];

  const { name: ensName, avatar: ensAvatar } = useGetEns(activeAddress);
  const ensNameAbbreviated = ensName
    ? ensName.length > 11
      ? textCenterEllipsis(ensName, 6, 2)
      : ensName
    : undefined;

  const [useBlockie, setUseBlockie] = useState(false);
  const [lastTransactionSuccess, setLastTransactionSuccess] = useState(false);
  const [lastTransactionError, setLastTransactionError] = useState(false);

  useEffect(() => {
    if (ensAvatar) {
      setUseBlockie(false);
    }
  }, [ensAvatar]);

  useEffect(() => {
    if (lastTransaction?.status && activeWallet) {
      if (lastTransaction.status === 1) {
        setLastTransactionSuccess(true);
        setTimeout(() => setLastTransactionSuccess(false), 1000);
      } else if (lastTransaction.status === 0) {
        setLastTransactionError(true);
        setTimeout(() => setLastTransactionError(false), 1000);
      }
    }
  }, [lastTransaction]);

  const lastConnectedWallet =
    typeof localStorage !== 'undefined' &&
    (localStorage.getItem(LocalStorageKeys.LastConnectedWallet) as
      | WalletType
      | undefined);

  useEffect(() => {
    if (!!lastConnectedWallet || !activeWallet) {
      setLoading(false);
    }
  }, [lastConnectedWallet]);

  return (
    <>
      {loading ? (
        <>
          <Box
            css={{
              '.react-loading-skeleton': { width: 110, height: 23 },
              '@lg': {
                '.react-loading-skeleton': { width: 140, height: 31 },
              },
            }}>
            <CustomSkeleton />
          </Box>
        </>
      ) : (
        <>
          {!isActive ? (
            <Button onClick={onClick} loading={walletActivating}>
              {walletActivating ? 'Connecting' : 'Connect wallet'}
            </Button>
          ) : (
            <Flex css={{ alignItems: 'center', justifyContent: 'center' }}>
              <Flex
                css={{
                  alignItems: 'center',
                  mr: 10,
                  display: 'none',
                  '@xs': { display: 'flex' },
                }}>
                <Box
                  css={{
                    size: 6,
                    borderRadius: '$4',
                    mr: 4,
                    background: '$main',
                    '@lg': {
                      size: 9,
                    },
                  }}
                />
                <Typography variant="buttonSmall">
                  {
                    chainInfoHelper.getChainParameters(
                      activeWallet?.chainId || appConfig.chainId,
                    ).chainName
                  }
                </Typography>
              </Flex>

              <Button
                onClick={onClick}
                error={lastTransactionError}
                success={lastTransactionSuccess}
                color={
                  lastTransactionSuccess || lastTransactionError
                    ? 'dark'
                    : 'gray'
                }
                leftComponent={
                  <Flex
                    css={{
                      position: 'relative',
                      alignItems: 'center',
                      justifyContent: 'center',
                      size: 22,
                      background: 'inherit',
                      backgroundImage: 'inherit',
                      borderRadius: '$4',
                      '@lg': {
                        size: 26,
                      },
                    }}>
                    {!!allPendingTransactions.length && (
                      <Spinner
                        size={lg ? 26 : 22}
                        loaderLineColor="$paper"
                        loaderCss={{ background: '$main' }}
                        css={{ position: 'absolute' }}
                      />
                    )}
                    <Image
                      src={
                        useBlockie
                          ? makeBlockie(
                              activeAddress !== '' ? activeAddress : 'default',
                            )
                          : ensAvatar
                      }
                      alt=""
                      onError={() => setUseBlockie(true)}
                      css={{
                        size: 16,
                        borderRadius: '$4',
                        '@lg': { size: 20 },
                      }}
                    />
                  </Flex>
                }>
                {lastTransactionError
                  ? 'Error'
                  : lastTransactionSuccess
                  ? 'Success'
                  : ensNameAbbreviated
                  ? ensNameAbbreviated
                  : textCenterEllipsis(activeAddress, 4, 4)}
              </Button>
            </Flex>
          )}
        </>
      )}
    </>
  );
}
