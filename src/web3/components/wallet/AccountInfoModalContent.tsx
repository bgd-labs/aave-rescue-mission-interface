import makeBlockie from 'ethereum-blockies-base64';
import React, { useEffect, useState } from 'react';

import CopyIcon from '/public/images/icons/copy.svg';

import { TransactionInfoItem } from '../../../transactions/components/TransactionInfoItem';
import { TransactionUnion } from '../../../transactions/store/transactionsSlice';
import {
  Box,
  CopyToClipboard,
  Divider,
  Flex,
  Image,
  Link,
  Typography,
} from '../../../ui';
import { textCenterEllipsis } from '../../../ui/utils/text-center-ellipsis';
import { media } from '../../../ui/utils/theme';
import { useMediaQuery } from '../../../ui/utils/useMediaQuery';
import { chainInfoHelper } from '../../../utils/chains';
import { useGetEns } from '../../utils/use-get-ens';

interface AccountInfoModalContentProps {
  activeAddress: string;
  chainId: number;
  isActive: boolean;
  allTransactions: (TransactionUnion & {
    status?: number | undefined;
    pending: boolean;
  })[];
  onAllTransactionButtonClick: () => void;
  onDisconnectButtonClick: () => void;
}

export function AccountInfoModalContent({
  activeAddress,
  chainId,
  isActive,
  allTransactions,
  onAllTransactionButtonClick,
  onDisconnectButtonClick,
}: AccountInfoModalContentProps) {
  const sm = useMediaQuery(media.sm);

  const { name: ensName, avatar: ensAvatar } = useGetEns(activeAddress);
  const ensNameAbbreviated = ensName
    ? ensName.length > 30
      ? textCenterEllipsis(ensName, 28, 2)
      : ensName
    : undefined;

  const [useBlockie, setUseBlockie] = useState(false);

  useEffect(() => {
    if (ensAvatar) {
      setUseBlockie(false);
    }
  }, [ensAvatar]);

  return (
    <>
      <Box>
        <Flex css={{ alignItems: 'center' }}>
          <Image
            src={
              useBlockie
                ? makeBlockie(activeAddress !== '' ? activeAddress : 'default')
                : ensAvatar
            }
            alt=""
            onError={() => setUseBlockie(true)}
            css={{ size: 34, borderRadius: '$4' }}
          />
          <Flex css={{ ml: 6, alignItems: 'center' }}>
            <Typography variant="h2">
              {ensNameAbbreviated
                ? ensNameAbbreviated
                : textCenterEllipsis(activeAddress, sm ? 13 : 10, sm ? 13 : 10)}
            </Typography>
            <CopyToClipboard copyText={activeAddress}>
              <Image
                as={CopyIcon}
                css={{
                  cursor: 'pointer',
                  size: 20,
                  ml: 4,
                  path: {
                    transition: 'all 0.2s ease',
                  },
                  hover: { path: { stroke: '$secondary' } },
                }}
              />
            </CopyToClipboard>
          </Flex>
        </Flex>

        <Divider css={{ mt: 12, mb: 16 }} />

        <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            href={`${
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              chainInfoHelper.getChainParameters(chainId).blockExplorerUrls[0]
            }/address/${activeAddress}`}
            css={{
              color: '$textSecondary',
              lineHeight: 1,
              hover: { color: '$text' },
            }}
            inNewWindow>
            <Typography>View on explorer</Typography>
          </Link>

          <Box
            onClick={onDisconnectButtonClick}
            css={{
              color: '$textSecondary',
              cursor: 'pointer',
              lineHeight: 1,
              transition: 'all 0.2s ease',
              hover: { color: '$text' },
            }}>
            <Typography>Disconnect</Typography>
          </Box>
        </Flex>
      </Box>

      {isActive ? (
        <>
          <Flex css={{ mt: 50, alignItems: 'center', flexDirection: 'column' }}>
            <Typography variant="h2" css={{ textAlign: 'center' }}>
              {allTransactions.length >= 2
                ? 'Last transactions'
                : allTransactions.length === 0
                ? 'Transactions'
                : 'Last transaction'}
            </Typography>
            <Divider css={{ mt: 14, mb: 24, width: '100%' }} />

            {!!allTransactions.length ? (
              <>
                {allTransactions
                  .slice(-4)
                  .sort(
                    (a, b) =>
                      (b.timestamp ? b.timestamp : b.nonce) -
                      (a.timestamp ? a.timestamp : a.nonce),
                  )
                  .map((tx, index) => (
                    <TransactionInfoItem key={index} tx={tx} />
                  ))}

                {allTransactions.length > 4 && (
                  <Typography
                    as="button"
                    variant="body"
                    css={{
                      transition: 'all 0.2s ease',
                      display: 'inline-block',
                      mt: 30,
                      color: '$textSecondary',
                      lineHeight: 1,
                      hover: { color: '$text' },
                    }}
                    onClick={onAllTransactionButtonClick}>
                    All transactions
                  </Typography>
                )}
              </>
            ) : (
              <Typography
                variant="body"
                css={{
                  color: '$textSecondary',
                  textAlign: 'center',
                }}>
                The list of your transactions is currently empty
              </Typography>
            )}
          </Flex>
        </>
      ) : (
        <Typography
          variant="body"
          css={{
            mt: 30,
            color: '$textSecondary',
            textAlign: 'center',
          }}>
          Connect your wallet to see the list of transactions
        </Typography>
      )}
    </>
  );
}
