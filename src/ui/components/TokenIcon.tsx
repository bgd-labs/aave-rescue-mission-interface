import { CSS } from '@stitches/react';

import { Image } from '../primitives/Image';

interface TokenIconProps {
  symbol: string;
  css?: CSS;
}

export function TokenIcon({ symbol, css }: TokenIconProps) {
  return (
    <Image
      css={{ borderRadius: '$4', size: 12, ...css }}
      src={`/images/tokens/${symbol.toLowerCase()}.svg`}
      alt={`${symbol} icon`}
    />
  );
}
