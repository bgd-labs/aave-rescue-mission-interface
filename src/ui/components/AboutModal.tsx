import React, { useRef } from 'react';

import { useStore } from '../../store';
import { Box } from '../primitives/Box';
import { Typography } from '../primitives/Typography';
import { BasicModal } from './BasicModal';
import { Link } from './Link';

export function AboutModal() {
  const { isAboutModalOpen, setIsAboutModalOpen } = useStore();
  const initialFocusRef = useRef(null);

  return (
    <BasicModal
      initialFocus={initialFocusRef}
      isOpen={isAboutModalOpen}
      setIsOpen={setIsAboutModalOpen}
      maxWidth={600}
      withCloseButton>
      <Typography variant="h1" css={{ mb: 28, textAlign: 'center' }}>
        About
      </Typography>
      <Typography
        variant="headline"
        css={{ mb: 12, lineHeight: '1.8', fontWeight: 400 }}>
        User interface connecting to the{' '}
        <Link
          css={{ textDecoration: 'underline', hover: { color: '$secondary' } }}
          href="https://github.com/bgd-labs/rescue-mission-phase-1"
          inNewWindow>
          Aave Rescue Mission Phase I smart contracts
        </Link>{' '}
        and{' '}
        <Link
          css={{ textDecoration: 'underline', hover: { color: '$secondary' } }}
          href="https://github.com/bgd-labs/rescue-mission-phase-2-3"
          inNewWindow>
          Aave Rescue Mission Phase II and III smart contracts
        </Link>
        , allowing addresses who sent by mistake tokens to certain contracts of
        the Aave ecosystem to recover them.
      </Typography>
      <Typography variant="h2" css={{ mb: 16 }}>
        Forum posts:
      </Typography>
      <Box as="ul" css={{ pl: 20, li: { mb: 10 }, mb: 28 }}>
        <li>
          <Link
            css={{
              textDecoration: 'underline',
              hover: { color: '$secondary' },
            }}
            href="https://governance.aave.com/t/bgd-rescue-of-tokens-locked-on-aave-overview-and-phase-1/8150"
            inNewWindow>
            Aave Rescue Mission Phase I
          </Link>
        </li>
        <li>
          <Link
            css={{
              textDecoration: 'underline',
              hover: { color: '$secondary' },
            }}
            href="https://governance.aave.com/t/bgd-rescue-mission-phase-2-3/14309"
            inNewWindow>
            Aave Rescue Mission Phase II and III
          </Link>
        </li>
      </Box>
      <Typography variant="h2" css={{ mb: 22 }}>
        Contracts:
      </Typography>
      <Box
        as="ul"
        css={{ pl: 20, li: { mb: 12 }, mb: 28, a: { wordBreak: 'break-all' } }}>
        <li>
          Ethereum -{' '}
          <Link
            css={{
              textDecoration: 'underline',
              hover: { color: '$secondary' },
            }}
            href="https://etherscan.io/address/0xa88c6D90eAe942291325f9ae3c66f3563B93FE10"
            inNewWindow>
            https://etherscan.io/address/0xa88c6D90eAe942291325f9ae3c66f3563B93FE10
          </Link>
        </li>
        <li>
          Polygon -{' '}
          <Link
            css={{
              textDecoration: 'underline',
              hover: { color: '$secondary' },
            }}
            href="https://polygonscan.com/address/0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b"
            inNewWindow>
            https://polygonscan.com/address/0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b
          </Link>
        </li>
        {/* TODO: need Avalanche contract */}
        <li>
          Avalanche -{' '}
          <Link
            css={{
              textDecoration: 'underline',
              hover: { color: '$secondary' },
            }}
            href="https://polygonscan.com/address/0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b"
            inNewWindow>
            https://polygonscan.com/address/0x7a9ff54a6ee4a21223036890bb8c4ea2d62c686b
            TODO: need address
          </Link>
        </li>
        <li>
          Optimism -{' '}
          <Link
            css={{
              textDecoration: 'underline',
              hover: { color: '$secondary' },
            }}
            href="https://optimistic.etherscan.io/address/0x1685d81212580dd4cda287616c2f6f4794927e18"
            inNewWindow>
            https://optimistic.etherscan.io/address/0x1685d81212580dd4cda287616c2f6f4794927e18
          </Link>
        </li>
      </Box>
    </BasicModal>
  );
}
