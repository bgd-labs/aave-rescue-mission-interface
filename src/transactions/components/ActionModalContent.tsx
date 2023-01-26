import React, { ReactNode } from 'react';

import LinkIcon from '/public/images/icons/link.svg';

import { Box, Button, Flex, Image, Link, Typography } from '../../ui';
import { GradientLoader } from '../../ui/components/GradientLoader';
import { appConfig } from '../../utils/appConfig';
import { chainInfoHelper } from '../../utils/chains';

export interface ActionModalContentProps {
  topBlock?: ReactNode;
  setIsOpen: (value: boolean) => void;
  contentMinHeight?: number;
  children: ReactNode;
  txHash?: string;
  txPending?: boolean;
  txSuccess?: boolean;
  txChainId?: number;
  isTxStart: boolean;
  setIsTxStart: (value: boolean) => void;
  error: string;
  setError: (value: string) => void;
  successElement?: ReactNode;
  closeButtonText?: string;
}

export function ActionModalContent({
  topBlock,
  setIsOpen,
  contentMinHeight,
  children,
  txHash,
  txPending,
  txSuccess,
  txChainId,
  isTxStart,
  setIsTxStart,
  error,
  setError,
  successElement,
  closeButtonText,
}: ActionModalContentProps) {
  return (
    <>
      {topBlock}

      <Flex
        css={{
          minHeight: contentMinHeight,
          flexDirection: 'column',
          width: '100%',
        }}>
        {isTxStart ? (
          <>
            <Flex
              css={{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                flex: 1,
                flexDirection: 'column',
                mb: 60,
              }}>
              {txPending && (
                <Box css={{ lineHeight: 0, ml: -13 }}>
                  <GradientLoader />
                </Box>
              )}
              <Typography
                variant="h2"
                css={{
                  mb: 8,
                  color: !!error ? '$error' : '$text',
                }}>
                {txPending && 'Pending...'}
                {txSuccess && 'Success'}
                {!!error && 'Error'}
              </Typography>
              <Typography as="div" variant="h3">
                {txPending && 'Waiting while transaction executing'}
                {txSuccess && !!successElement
                  ? successElement
                  : txSuccess && 'Transaction executed'}
                {!!error && 'Transaction didn’t execute'}
              </Typography>
              {!!error && (
                <Typography css={{ mt: 8, color: '$textSecondary' }}>
                  {error}
                </Typography>
              )}
              {txHash && (
                <Flex
                  css={{
                    mt: 44,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
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
                        fill: '$secondary',
                      },
                      hover: { color: '$text', path: { fill: '$main' } },
                    }}
                    inNewWindow>
                    <Typography variant="descriptor">
                      View in Explorer
                    </Typography>
                    <Image
                      as={LinkIcon}
                      css={{
                        size: 11,
                        ml: 2,
                      }}
                    />
                  </Link>
                </Flex>
              )}
            </Flex>

            <Flex css={{ alignItems: 'center', justifyContent: 'center' }}>
              {txSuccess && (
                <Button size="large" onClick={() => setIsOpen(false)}>
                  {closeButtonText || 'Close'}
                </Button>
              )}
              {!!error && (
                <>
                  <Button
                    size="large"
                    css={{ mr: 20 }}
                    color="secondary"
                    transparent
                    onClick={() => setIsOpen(false)}>
                    {closeButtonText || 'Close'}
                  </Button>
                  <Button
                    size="large"
                    onClick={() => {
                      setIsTxStart(false);
                      setError('');
                    }}>
                    Try again
                  </Button>
                </>
              )}
            </Flex>
          </>
        ) : (
          <>{children}</>
        )}
      </Flex>
    </>
  );
}
