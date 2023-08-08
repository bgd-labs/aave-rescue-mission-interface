import { CSS } from '@stitches/react';

import { Box } from '../primitives/Box';
import { Image } from '../primitives/Image';

export const symbols = [
  'aave',
  'lend',
  'stkaave',
  'uni',
  'usdt',
  'usdc',
  'dai',
  'wbtc',
  'link',
  'gusd',
  'rai',
];

interface TokenIconProps {
  symbol: string;
  css?: CSS;
}

function ATokenIcon({ symbol }: { symbol: string }) {
  return (
    <svg viewBox="0 0 256 256">
      <defs id="defs10">
        <linearGradient
          id="linear-gradient"
          x1=".843"
          x2=".206"
          y1=".135"
          y2=".886"
          gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#b6509e" id="stop2" />
          <stop offset="1" stopColor="#2ebac6" id="stop4" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1=".907"
          x2=".163"
          y1=".227"
          y2=".853"
        />
      </defs>
      <g id="Group_29109">
        <path
          id="Subtraction_108"
          fill="url(#linear-gradient)"
          d="M128 256a128.976 128.976 0 0 1-25.8-2.6 127.309 127.309 0 0 1-45.77-19.261 128.366 128.366 0 0 1-46.375-56.315A127.357 127.357 0 0 1 2.6 153.8a129.251 129.251 0 0 1 0-51.593 127.31 127.31 0 0 1 19.26-45.77 128.372 128.372 0 0 1 56.317-46.378A127.33 127.33 0 0 1 102.2 2.6a129.244 129.244 0 0 1 51.593 0 127.308 127.308 0 0 1 45.77 19.26 128.367 128.367 0 0 1 46.375 56.316A127.343 127.343 0 0 1 253.4 102.2a129.248 129.248 0 0 1 0 51.593 127.3 127.3 0 0 1-19.26 45.77 128.382 128.382 0 0 1-56.316 46.375A127.4 127.4 0 0 1 153.8 253.4 128.977 128.977 0 0 1 128 256zm0-242.287a115.145 115.145 0 0 0-23.033 2.322A113.657 113.657 0 0 0 64.1 33.232a114.622 114.622 0 0 0-41.4 50.283 113.7 113.7 0 0 0-6.659 21.452 115.4 115.4 0 0 0 0 46.065 113.66 113.66 0 0 0 17.2 40.866 114.627 114.627 0 0 0 50.282 41.407 113.75 113.75 0 0 0 21.453 6.658 115.381 115.381 0 0 0 46.065 0 113.609 113.609 0 0 0 40.866-17.2 114.622 114.622 0 0 0 41.393-50.278 113.741 113.741 0 0 0 6.659-21.453 115.4 115.4 0 0 0 0-46.065 113.662 113.662 0 0 0-17.2-40.865A114.619 114.619 0 0 0 172.485 22.7a113.74 113.74 0 0 0-21.453-6.659A115.145 115.145 0 0 0 128 13.714z"
        />
        {symbol && (
          <image
            x="25"
            y="25"
            href={`/images/tokens/${symbol.toLowerCase()}.svg`}
            width="206"
            height="206"
          />
        )}
      </g>
    </svg>
  );
}

export function TokenIcon({ symbol, css }: TokenIconProps) {
  const isAToken = !symbols.find(
    (sym) => sym.toLowerCase() === symbol.toLowerCase(),
  );

  if (isAToken) {
    return (
      <Box
        css={{ lineHeight: 0, svg: { borderRadius: '$2', size: 12, ...css } }}>
        <ATokenIcon symbol={symbol.substring(1).toLowerCase()} />
      </Box>
    );
  }
  return (
    <Image
      css={{ borderRadius: '$2', size: 12, ...css }}
      src={`/images/tokens/${symbol.toLowerCase()}.svg`}
      alt={`${symbol} icon`}
    />
  );
}
