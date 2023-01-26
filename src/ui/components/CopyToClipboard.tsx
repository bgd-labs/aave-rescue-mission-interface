import React, { ReactNode, useState } from 'react';
import { CopyToClipboard as CTC } from 'react-copy-to-clipboard';

import { Box } from '../primitives/Box';
import { Typography } from '../primitives/Typography';
import { Tooltip } from './Tooltip';

interface CopyToClipboardProps {
  copyText: string;
  children: ReactNode;
}

export function CopyToClipboard({ copyText, children }: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  return (
    <CTC
      text={copyText}
      onCopy={() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      }}>
      <Box css={{ lineHeight: 0 }}>
        <Tooltip
          color={copied ? 'dark' : 'light'}
          tooltipContent={
            <Typography variant="descriptor">
              {copied ? 'Сopied' : 'Copy'}
            </Typography>
          }>
          {children}
        </Tooltip>
      </Box>
    </CTC>
  );
}
