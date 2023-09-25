import makeBlockie from 'ethereum-blockies-base64';
import React, { useEffect, useState } from 'react';

import { LocalStorageKeys, WalletType } from '../../../../packages/src';
import { useStore } from '../../../store';
import { Box, Button, Flex, Image, Link, Typography } from '../../../ui';
import { CustomSkeleton } from '../../../ui/components/CustomSkeleton';
import { textCenterEllipsis } from '../../../ui/utils/text-center-ellipsis';
import { mainnetChainId } from '../../../utils/appConfig';
import { chainInfoHelper } from '../../../utils/chains';
import { useGetEns } from '../../utils/use-get-ens';

interface ConnectWalletButtonProps {
  onClick: () => void;
}

export function ConnectWalletButton({ onClick }: ConnectWalletButtonProps) {
  const {
    activeWallet,
    walletActivating,
    getActiveAddress,
    disconnectActiveWallet,
  } = useStore();

  const [loading, setLoading] = useState(true);

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

  return (
    <>
      {loading ? (
        <>
          <Box
            css={{
              '.react-loading-skeleton': {
                minWidth: 120,
                height: 36,
                '@sm': { minWidth: 150, height: 46 },
              },
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
                  variant="headline"
                  css={{
                    color: '$textWhite',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.03em',
                  }}>
                  Connecting
                </Typography>
              )}
            </>
          ) : (
            <Flex css={{ alignItems: 'center', justifyContent: 'center' }}>
              <Box css={{ mr: 9, textAlign: 'right', '@sm': { mr: 12 } }}>
                <Link
                  href={`${
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    chainInfoHelper.getChainParameters(
                      activeWallet?.chainId || mainnetChainId,
                    ).blockExplorerUrls[0]
                  }/address/${activeAddress}`}
                  inNewWindow>
                  <Typography
                    variant="headline"
                    css={{
                      mb: 3,
                      color: '$textWhite',
                      transition: 'all 0.2s ease',
                      hover: { opacity: '0.7' },
                      '@lg': {
                        mb: 4,
                      },
                    }}>
                    {ensNameAbbreviated
                      ? ensNameAbbreviated
                      : textCenterEllipsis(activeAddress, 4, 5)}
                  </Typography>
                </Link>

                <Typography
                  variant="descriptor"
                  css={{
                    color: '$textWhite',
                    fontWeight: 300,
                    transition: 'all 0.2s ease',
                    hover: { opacity: '0.7' },
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
                  size: 38,
                  borderRadius: '$2',
                  '@sm': {
                    size: 46,
                  },
                }}
              />
            </Flex>
          )}
        </>
      )}
    </>
  );
}
