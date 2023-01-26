import dayjs from 'dayjs';
import React from 'react';

import CheckIcon from '/public/images/icons/check.svg';
import CopyIcon from '/public/images/icons/copy.svg';
import CrossIcon from '/public/images/icons/cross.svg';

import {
  Box,
  CopyToClipboard,
  Flex,
  Image,
  Link,
  Spinner,
  Typography,
} from '../../ui';
import { textCenterEllipsis } from '../../ui/utils/text-center-ellipsis';
import { chainInfoHelper } from '../../utils/chains';
import { TransactionUnion } from '../store/transactionsSlice';

interface TransactionInfoItemProps {
  tx: TransactionUnion;
}

export function TransactionInfoItem({ tx }: TransactionInfoItemProps) {
  return (
    <Box css={{ mb: 15, width: '100%', '&:last-of-type': { mb: 0 } }}>
      <Flex css={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="descriptor">
          {tx.timestamp && (
            <Typography as="span" variant="descriptorAccent">
              {dayjs.unix(tx.timestamp).format('MMM D, h:mm A')}
            </Typography>
          )}{' '}
          {tx.type === 'test' && (
            <>
              You made test transaction <b>#{tx.nonce}</b>
            </>
          )}
        </Typography>

        <Box css={{ ml: 10, lineHeight: 0, background: '$paper' }}>
          {tx.pending && (
            <Spinner
              size={20}
              loaderLineColor="$paper"
              loaderCss={{ background: '$main' }}
            />
          )}
          {tx.status && (
            <Image
              as={tx.status === 1 ? CheckIcon : CrossIcon}
              css={{
                size: 20,
                path: {
                  fill: tx.status === 1 ? '$mainFor' : '$mainAgainst',
                  stroke: tx.status === 1 ? '$mainFor' : '$mainAgainst',
                },
              }}
            />
          )}
        </Box>
      </Flex>

      <Flex css={{ display: 'inline-flex', alignItems: 'center' }}>
        <Link
          href={`${
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            chainInfoHelper.getChainParameters(tx.chainId).blockExplorerUrls[0]
          }/tx/${tx.hash}`}
          css={{ color: '$textSecondary', hover: { color: '$text' } }}
          inNewWindow>
          <Typography variant="descriptor">
            {textCenterEllipsis(tx.hash, 5, 5)}
          </Typography>
        </Link>

        <CopyToClipboard copyText={tx.hash}>
          <Image
            as={CopyIcon}
            css={{
              cursor: 'pointer',
              size: 14,
              ml: 2,
              path: {
                transition: 'all 0.2s ease',
                stroke: '$secondary',
              },
              hover: { path: { stroke: '$main' } },
            }}
          />
        </CopyToClipboard>
      </Flex>
    </Box>
  );
}
