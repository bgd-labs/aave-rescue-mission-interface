import React from 'react';

import LinkIcon from '/public/images/icons/link.svg';
import NoAssetsImage from '/public/images/noAssets.svg';
import TxErrorImage from '/public/images/txError.svg';
import TxSuccessImage from '/public/images/txSuccess.svg';

import { useStore } from '../../store';
import { useTxStatuses } from '../../transactions/hooks/useTxStatuses';
import { generateTxFunction } from '../../transactions/utils/generateTxFunction';
import { appConfig } from '../../utils/appConfig';
import { chainInfoHelper } from '../../utils/chains';
import { Box } from '../primitives/Box';
import { Flex } from '../primitives/Flex';
import { Image } from '../primitives/Image';
import { Typography } from '../primitives/Typography';
import { textCenterEllipsis } from '../utils/text-center-ellipsis';
import { Button } from './Button';
import { FormattedNumber } from './FormattedNumber';
import { GradientLoader } from './GradientLoader';
import { Link } from './Link';
import { TokenIcon } from './TokenIcon';

export function InfoView() {
  const {
    checkedAddress,
    userData,
    activeWallet,
    resetUserData,
    setAppView,
    setCheckedAddress,
    userDataLoading,
    claim,
  } = useStore();

  const handleCheckAnotherClick = () => {
    resetUserData();
    setAppView('');
    setCheckedAddress('');
  };

  const tokensToClaim = userData.map((data) => {
    return {
      index: data.index,
      account: checkedAddress,
      amount: data.tokenAmountInWei,
      formattedAmount: data.tokenAmount,
      merkleProof: data.proof,
      distributionId: data.distributionId,
    };
  });

  const {
    error,
    setError,
    loading,
    setLoading,
    isTxStart,
    txHash,
    txPending,
    txSuccess,
    setIsTxStart,
    txChainId,
  } = useTxStatuses({
    type: 'claim',
    payload: {
      tokensToClaim,
    },
  });

  const handleClaimClick = async () =>
    await generateTxFunction({
      setError,
      setLoading,
      errorMessage:
        'Error during the claim assets, check console for more details',
      callbackFunction: async () => await claim(tokensToClaim),
    });

  const filteredUserData = userData.filter((data) => !data.isClaimed);

  return (
    <Flex
      css={{ width: '100%', flexDirection: 'column', alignItems: 'center' }}>
      {isTxStart ? (
        <Flex
          css={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Typography variant="h1">
            {txPending && 'Pending'}
            {txSuccess && 'Success'}
            {!!error && 'Error'}
          </Typography>

          <Flex
            css={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              minHeight: 240,
            }}>
            {txPending && (
              <Flex
                css={{
                  background: '$whiteBackground',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                <GradientLoader size={160} />
              </Flex>
            )}
            {txSuccess && (
              <Flex
                css={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}>
                <Box css={{ mb: -40 }}>
                  {userData.map((data, index) => {
                    const assetSymbol = data.tokenAmount.split(' ')[1];
                    return (
                      <TokenIcon
                        symbol={assetSymbol}
                        css={{
                          position: 'relative',
                          zIndex: 2,
                          size: userData.length > 1 ? 70 : 100,
                          ml: index > 0 ? -30 : 0,
                        }}
                        key={`${data.index}-${data.distributionId}`}
                      />
                    );
                  })}
                </Box>
                <Image as={TxSuccessImage} css={{ width: 121, height: 81 }} />
              </Flex>
            )}
            {!!error && (
              <Image as={TxErrorImage} css={{ width: 148, height: 146 }} />
            )}
          </Flex>

          <Typography css={{ mb: 20, textAlign: 'center' }}>
            {txPending && 'Waiting while transaction executing'}
            {txSuccess && 'Transaction executed'}
            {!!error && error}
          </Typography>

          {txHash && (
            <Link
              href={`${
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                chainInfoHelper.getChainParameters(
                  txChainId || appConfig.chainId,
                ).blockExplorerUrls[0]
              }/tx/${txHash}`}
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
                  fontSize: 13,
                  lineHeight: '16px',
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

          <Flex
            css={{
              alignItems: 'center',
              justifyContent: 'center',
              mt: 30,
              minHeight: 50,
            }}>
            {txSuccess && (
              <Button
                onClick={() => {
                  setIsTxStart(false);
                  handleCheckAnotherClick();
                }}>
                Close
              </Button>
            )}
            {!!error && (
              <>
                <Button
                  css={{ mr: 24 }}
                  transparent
                  onClick={() => {
                    setIsTxStart(false);
                    setError('');
                    handleCheckAnotherClick();
                  }}>
                  Close
                </Button>
                <Button
                  onClick={() => {
                    setIsTxStart(false);
                    setError('');
                  }}>
                  Try again
                </Button>
              </>
            )}
          </Flex>
        </Flex>
      ) : (
        <>
          <Typography css={{ mb: 12 }}>
            <b>{textCenterEllipsis(checkedAddress, 4, 5)}</b> Checked
          </Typography>
          {userDataLoading ? (
            <Flex
              css={{
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Typography variant="h1" css={{ mb: 28 }}>
                Loading
              </Typography>
              <Flex
                css={{
                  background: '$whiteBackground',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  mb: 60,
                }}>
                <GradientLoader size={160} />
              </Flex>
            </Flex>
          ) : (
            <>
              {!!filteredUserData.length ? (
                <Flex
                  css={{
                    width: '100%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Typography variant="h1" css={{ mb: 28 }}>
                    Assets available to claim
                  </Typography>
                  <Box css={{ width: '100%' }}>
                    <Flex
                      css={{
                        mb: 12,
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        px: 18,
                        width: '100%',
                      }}>
                      <Typography>Asset</Typography>
                      <Typography>Amount to claim</Typography>
                    </Flex>
                    <Box css={{ minHeight: 200, mb: 24 }}>
                      {filteredUserData.map((data) => {
                        const assetSymbol = data.tokenAmount.split(' ')[1];
                        const assetAmount = data.tokenAmount.split(' ')[0];

                        return (
                          <Flex
                            css={{
                              mb: 7,
                              px: 18,
                              py: 8,
                              background: '$paper',
                              borderRadius: '$1',
                              border: '1px solid $main',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                            key={`${data.index}-${data.distributionId}`}>
                            <Flex css={{ alignItems: 'center' }}>
                              <TokenIcon
                                symbol={assetSymbol}
                                css={{ mr: 12, size: 30 }}
                              />
                              <Typography>{assetSymbol}</Typography>
                            </Flex>
                            <FormattedNumber
                              value={assetAmount}
                              variant="h1"
                              visibleDecimals={4}
                            />
                          </Flex>
                        );
                      })}
                    </Box>
                  </Box>
                </Flex>
              ) : (
                <Flex
                  css={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 48,
                  }}>
                  <Image
                    as={NoAssetsImage}
                    css={{ my: 30, width: 160, height: 180 }}
                  />
                  <Typography variant="h1" css={{ mb: 28 }}>
                    Oh no! Nothing available to claim!
                  </Typography>
                </Flex>
              )}
            </>
          )}

          <Flex css={{ alignItems: 'center' }}>
            <Button onClick={handleCheckAnotherClick}>Check another</Button>
            {activeWallet?.isActive && !!filteredUserData.length && (
              <Button
                onClick={handleClaimClick}
                css={{ ml: 24 }}
                loading={loading}>
                Claim
              </Button>
            )}
          </Flex>
        </>
      )}
    </Flex>
  );
}
