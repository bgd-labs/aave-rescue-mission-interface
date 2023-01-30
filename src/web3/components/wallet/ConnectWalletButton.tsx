import makeBlockie from 'ethereum-blockies-base64';
import React, { useEffect, useState } from 'react';

import { LocalStorageKeys, WalletType } from '../../../../packages/src';
import { useStore } from '../../../store';
import { Box, Button, Flex, Image, Link, Typography } from '../../../ui';
import { CustomSkeleton } from '../../../ui/components/CustomSkeleton';
import { textCenterEllipsis } from '../../../ui/utils/text-center-ellipsis';
import { appConfig } from '../../../utils/appConfig';
import { chainInfoHelper } from '../../../utils/chains';
import { selectActiveWallet } from '../../store/web3Selectors';
import { useGetEns } from '../../utils/use-get-ens';

interface ConnectWalletButtonProps {
  onClick: () => void;
}

export function ConnectWalletButton({ onClick }: ConnectWalletButtonProps) {
  const {
    walletActivating,
    getActiveAddress,
    disconnectActiveWallet,
    setAppView,
    prevAppView,
  } = useStore();

  const [loading, setLoading] = useState(true);

  const activeWallet = useStore(selectActiveWallet);

  const isActive = activeWallet?.isActive;
  const activeAddress = getActiveAddress() || '';

  const { name: ensName, avatar: ensAvatar } = useGetEns(activeAddress);
  const ensNameAbbreviated = ensName
    ? ensName.length > 11
      ? textCenterEllipsis(ensName, 6, 2)
      : ensName
    : undefined;

  const [useBlockie, setUseBlockie] = useState(false);

  useEffect(() => {
    if (ensAvatar) {
      setUseBlockie(false);
    }
  }, [ensAvatar]);

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

  useEffect(() => {
    if (prevAppView !== 'connectWallet') {
      setAppView(prevAppView);
    }
  }, [isActive]);

  return (
    <>
      {loading ? (
        <>
          <Box
            css={{
              '.react-loading-skeleton': { width: 150, height: 46 },
            }}>
            <CustomSkeleton />
          </Box>
        </>
      ) : (
        <>
          {!isActive ? (
            <>
              {!walletActivating ? (
                <Button
                  color="white"
                  onClick={onClick}
                  loading={walletActivating}
                  size="small">
                  Connect wallet
                </Button>
              ) : (
                <Typography
                  css={{
                    color: '$textWhite',
                    whiteSpace: 'nowrap',
                    fontSize: '15px',
                    lineHeight: '18px',
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                  }}>
                  Connecting
                </Typography>
              )}
            </>
          ) : (
            <Flex css={{ alignItems: 'center', justifyContent: 'center' }}>
              <Box css={{ mr: 12, textAlign: 'right' }}>
                <Link
                  href={`${
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    chainInfoHelper.getChainParameters(appConfig.chainId)
                      .blockExplorerUrls[0]
                  }/address/${activeAddress}`}
                  inNewWindow>
                  <Typography
                    css={{
                      mb: 4,
                      fontSize: 15,
                      lineHeight: '18px',
                      fontWeight: 600,
                      color: '$textWhite',
                    }}>
                    {ensNameAbbreviated
                      ? ensNameAbbreviated
                      : textCenterEllipsis(activeAddress, 4, 5)}
                  </Typography>
                </Link>

                <Typography
                  css={{
                    fontSize: 12,
                    lineHeight: '15px',
                    color: '$textWhite',
                    fontWeight: 300,
                  }}
                  as="button"
                  onClick={async () => await disconnectActiveWallet()}>
                  Disconnect
                </Typography>
              </Box>

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
                  size: 46,
                  borderRadius: '$4',
                }}
              />
            </Flex>
          )}
        </>
      )}
    </>
  );
}
