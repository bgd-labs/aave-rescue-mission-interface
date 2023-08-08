import React, { useEffect, useState } from 'react';

import LinkIcon from '/public/images/icons/link.svg';
import NoAssetsImage from '/public/images/noAssets.svg';
import TxErrorImage from '/public/images/txError.svg';
import TxSuccessImage from '/public/images/txSuccess.svg';

import { selectTxExplorerLink } from '../../../packages/src';
import { useStore } from '../../store';
import { useLastTxLocalStatus } from '../../transactions/hooks/useLastTxLocalStatus';
import { mainnetChainId } from '../../utils/appConfig';
import { chainInfoHelper } from '../../utils/chains';
import { Box } from '../primitives/Box';
import { Flex } from '../primitives/Flex';
import { Image } from '../primitives/Image';
import { Typography } from '../primitives/Typography';
import { textCenterEllipsis } from '../utils/text-center-ellipsis';
import { Button } from './Button';
import { ContentWrapper } from './ContentWrapper';
import { FormattedNumber } from './FormattedNumber';
import { Link } from './Link';
import { RocketLoader } from './RocketLoader';
import { symbols, TokenIcon } from './TokenIcon';

export function InfoView() {
  const state = useStore();
  const {
    checkedAddress,
    userData,
    activeWallet,
    resetUserData,
    setAppView,
    setCheckedAddress,
    userDataLoading,
    claim,
    prevAppView,
  } = useStore();

  const [wrongAddressError, setWrongAddressError] = useState('');
  const [txChainId, setTxChainId] = useState(mainnetChainId);

  useEffect(() => {
    if (!activeWallet?.isActive) {
      setWrongAddressError('');
    }
  }, [activeWallet]);

  const handleCheckAnotherClick = () => {
    setTxChainId(mainnetChainId);
    setWrongAddressError('');
    resetUserData();
    setAppView('checkAddress');
    setCheckedAddress('');
  };

  const tokensToClaim = userData.map((data) => {
    return {
      index: data.index,
      amount: data.tokenAmountInWei,
      merkleProof: data.proof,
      distributionId: data.distributionId,
    };
  });

  const {
    txChainId: txChain,
    error,
    setError,
    loading,
    isTxStart,
    txHash,
    txPending,
    txSuccess,
    setIsTxStart,
    txWalletType,
    isError,
    executeTxWithLocalStatuses,
  } = useLastTxLocalStatus({
    type: 'claim',
    payload: {
      chainId: txChainId,
      address: checkedAddress,
      tokensToClaim,
    },
  });

  const handleClaimClick = async (chainId: number) => {
    setTxChainId(chainId);
    if (activeWallet) {
      if (
        activeWallet.accounts[0].toLowerCase() === checkedAddress.toLowerCase()
      ) {
        setWrongAddressError('');
        await executeTxWithLocalStatuses({
          errorMessage:
            'Error during the claim assets, check console for more details',
          callbackFunction: async () =>
            await claim(chainId, checkedAddress, tokensToClaim),
        });
      } else {
        setWrongAddressError(
          'The connected wallet address does not match the checked address. Please connect a wallet that will match the checked wallet.',
        );
      }
    } else {
      setWrongAddressError('');
      setAppView('connectWallet');
    }
  };

  const filteredUserData = userData.filter((data) => !data.isClaimed);
  const isCheckAnotherButtonAvailable =
    prevAppView === 'checkAddress' || !filteredUserData.length;
  const isMultipleChains =
    filteredUserData.length &&
    filteredUserData
      .map((data) => data.chainId)
      .filter((value, index, self) => self.indexOf(value) === index).length > 1;

  return (
    <>
      {isTxStart ? (
        <ContentWrapper
          topBlock={
            <Typography variant="h1">
              {txPending && 'Pending'}
              {txSuccess && 'Success'}
              {isError && 'Error'}
            </Typography>
          }
          bottomBlock={
            <>
              {txSuccess && (
                <Button
                  onClick={() => {
                    setIsTxStart(false);
                    setTxChainId(mainnetChainId);
                    handleCheckAnotherClick();
                  }}>
                  Close
                </Button>
              )}
              {isError && (
                <Flex>
                  <Button
                    css={{ mr: 14, '@lg': { mr: 24 } }}
                    color="transparent"
                    onClick={() => {
                      setIsTxStart(false);
                      setError('');
                      handleCheckAnotherClick();
                      setTxChainId(mainnetChainId);
                    }}>
                    Close
                  </Button>
                  <Button
                    onClick={() => {
                      setIsTxStart(false);
                      setError('');
                      setTxChainId(mainnetChainId);
                    }}>
                    Try again
                  </Button>
                </Flex>
              )}
            </>
          }>
          <Flex
            css={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              minHeight: 160,
              '@lg': {
                minHeight: 180,
              },
            }}>
            {txPending && <RocketLoader />}
            {txSuccess && (
              <Flex
                css={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                <Box css={{ mb: -30, '@lg': { mb: -40 } }}>
                  {userData.map((data, index) => {
                    const assetSymbol = data.tokenAmount.split(' ')[1];
                    return (
                      <TokenIcon
                        symbol={assetSymbol}
                        css={{
                          position: 'relative',
                          zIndex: 2,
                          size: userData.length > 1 ? 50 : 70,
                          ml: index > 0 ? -20 : 0,
                          '@lg': {
                            size: userData.length > 1 ? 70 : 100,
                            ml: index > 0 ? -30 : 0,
                          },
                        }}
                        key={`${data.chainId}-${data.index}-${data.distributionId}`}
                      />
                    );
                  })}
                </Box>
                <Image
                  as={TxSuccessImage}
                  css={{
                    width: 100,
                    height: 60,
                    '@lg': { width: 121, height: 81 },
                  }}
                />
              </Flex>
            )}
            {isError && (
              <Image
                as={TxErrorImage}
                css={{ size: 120, '@lg': { size: 148 } }}
              />
            )}
          </Flex>

          <Typography
            css={{
              mb: 12,
              textAlign: 'center',
              fontSize: 12,
              lineHeight: '15px',
              '@lg': { mb: 20, fontSize: 15, lineHeight: '18px' },
            }}>
            {txPending && 'Waiting while transaction executing'}
            {txSuccess && 'Transaction executed'}
            {isError && error}
          </Typography>

          {txHash && txWalletType && (
            <Link
              href={selectTxExplorerLink(
                state,
                chainInfoHelper.getChainParameters,
                txHash,
              )}
              css={{
                display: 'inline-flex',
                alignItems: 'center',
                color: '$textSecondary',
                path: {
                  transition: 'all 0.2s ease',
                  fill: '$textSecondary',
                },
                hover: { color: '$text', path: { fill: '$text' } },
              }}
              inNewWindow>
              <Typography
                css={{
                  fontSize: 12,
                  lineHeight: '15px',
                  '@lg': {
                    fontSize: 13,
                    lineHeight: '16px',
                  },
                }}>
                View in Explorer
              </Typography>
              <Image
                as={LinkIcon}
                css={{
                  size: 10,
                  ml: 2,
                }}
              />
            </Link>
          )}
        </ContentWrapper>
      ) : (
        <ContentWrapper
          topBlock={
            <>
              <Link
                href={`${
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  chainInfoHelper.getChainParameters(mainnetChainId)
                    .blockExplorerUrls[0]
                }/address/${checkedAddress}`}
                inNewWindow>
                <Typography
                  css={{
                    mb: 12,
                    transition: 'all 0.2s ease',
                    hover: { opacity: '0.7' },
                  }}>
                  <b>{textCenterEllipsis(checkedAddress, 4, 5)}</b> Checked
                </Typography>
              </Link>
              {userDataLoading && <Typography variant="h1">Loading</Typography>}
              {!!filteredUserData.length && !userDataLoading && (
                <Typography variant="h1">Assets available to claim</Typography>
              )}
            </>
          }
          bottomBlock={
            !userDataLoading && (
              <Flex css={{ alignItems: 'center' }}>
                {isCheckAnotherButtonAvailable && (
                  <Button onClick={handleCheckAnotherClick}>
                    Check another
                  </Button>
                )}
                {!!filteredUserData.length && !isMultipleChains && (
                  <Button
                    onClick={() =>
                      handleClaimClick(filteredUserData[0].chainId)
                    }
                    css={{
                      ml: isCheckAnotherButtonAvailable ? 14 : 0,
                      '@lg': { ml: isCheckAnotherButtonAvailable ? 24 : 0 },
                    }}
                    loading={loading}>
                    Claim
                  </Button>
                )}
              </Flex>
            )
          }>
          {userDataLoading ? (
            <RocketLoader />
          ) : (
            <>
              {!!filteredUserData.length ? (
                <Box css={{ width: '100%' }}>
                  <Flex
                    css={{
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      width: '100%',
                      px: 12,
                      mb: 12,
                      '@lg': {
                        px: 18,
                        mb: 16,
                      },
                    }}>
                    <Typography>Asset</Typography>
                    <Typography css={{ position: 'relative' }}>
                      Amount to claim
                    </Typography>
                  </Flex>
                  <Box
                    css={{
                      minHeight: 120,
                      '@sm': { minHeight: 140 },
                      '@lg': { minHeight: 160 },
                    }}>
                    {filteredUserData.map((data) => {
                      const assetSymbolInitial = data.tokenAmount.split(' ')[1];
                      const assetAmount = data.tokenAmount.split(' ')[0];
                      const splitSymbolByDash = assetSymbolInitial.split('_');
                      const assetSymbol =
                        splitSymbolByDash[splitSymbolByDash.length - 1];
                      const splitSymbolByDot = assetSymbol.split('.');
                      const finalAssetSymbol = splitSymbolByDot[0];

                      const isAToken = !symbols.find(
                        (sym) =>
                          sym.toLowerCase() === finalAssetSymbol.toLowerCase(),
                      );

                      return (
                        <Flex
                          key={`${data.chainId}-${data.index}-${data.distributionId}`}
                          css={{
                            alignItems: 'stretch',
                            justifyContent: 'space-between',
                            mb: 12,
                            '@sm': {
                              mb: 16,
                            },
                            '@lg': {
                              mb: 20,
                            },
                          }}>
                          <Flex
                            css={{
                              width: '100%',
                              position: 'relative',
                              background: '$paper',
                              borderRadius: '$1',
                              border: '1px solid $main',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              px: 12,
                              py: 6,
                              '@sm': {
                                py: 7,
                              },
                              '@lg': {
                                px: 18,
                                py: 8,
                              },
                            }}>
                            <Flex
                              css={{
                                px: 5,
                                py: 2,
                                background: '$main',
                                position: 'absolute',
                                right: -1,
                                bottom: 'calc(100% - 7px)',
                                zIndex: 2,
                                borderTopRightRadius: '$1',
                                color: '$textWhite',
                              }}>
                              <Typography variant="descriptor">
                                {
                                  chainInfoHelper.getChainParameters(
                                    data.chainId,
                                  ).chainName
                                }
                              </Typography>
                            </Flex>

                            <Flex css={{ alignItems: 'center' }}>
                              <TokenIcon
                                symbol={finalAssetSymbol}
                                css={{
                                  mr: 8,
                                  size: 24,
                                  '@sm': { mr: 12 },
                                  '@lg': { size: 30 },
                                }}
                              />
                              <Typography>
                                {isAToken
                                  ? 'a' +
                                    finalAssetSymbol.substring(1).toUpperCase()
                                  : finalAssetSymbol.toUpperCase()}
                              </Typography>
                            </Flex>
                            <FormattedNumber
                              value={assetAmount}
                              variant="h1"
                              visibleDecimals={4}
                            />
                          </Flex>

                          {isMultipleChains && (
                            <Button
                              onClick={() => handleClaimClick(data.chainId)}
                              css={{
                                minWidth: 70,
                                height: 'auto',
                                ml: 5,
                                '.Button__title': {
                                  fontWeight: '500',
                                  fontSize: 12,
                                  lineHeight: '15px',
                                },
                              }}
                              loading={
                                (data.chainId === (txChain || txChainId) &&
                                  loading) ||
                                false
                              }>
                              Claim
                            </Button>
                          )}
                        </Flex>
                      );
                    })}
                  </Box>

                  <Typography
                    variant="descriptor"
                    css={{
                      color: '$error',
                      mt: 12,
                      minHeight: 45,
                      textAlign: 'center',
                    }}>
                    {wrongAddressError}
                  </Typography>
                </Box>
              ) : (
                <Flex
                  css={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    as={NoAssetsImage}
                    css={{
                      mb: 20,
                      width: 120,
                      height: 140,
                      '@sm': {
                        mb: 25,
                        width: 140,
                        height: 160,
                      },
                      '@lg': { mb: 30, width: 160, height: 180 },
                    }}
                  />
                  <Typography variant="h1" css={{ textAlign: 'center' }}>
                    Oh no! Nothing available to claim!
                  </Typography>
                </Flex>
              )}
            </>
          )}
        </ContentWrapper>
      )}
    </>
  );
}
