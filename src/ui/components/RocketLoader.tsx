import RocketLoaderIcon from '/public/images/rocketLoader.svg';

import { Image } from '../primitives/Image';
import { keyframes } from '../utils/theme';

export function RocketLoader() {
  const smSize = 120;
  const mdSize = 140;
  const lgSize = 160;

  const rocketFire = keyframes({
    '0%': {
      opacity: 1,
    },
    '25%': {
      opacity: 0,
    },
    '50%': {
      opacity: 0,
    },
    '75%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  });

  const rocketFireM = keyframes({
    '0%': {
      opacity: 0,
    },
    '25%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0,
    },
    '75%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  });

  const rocketFireS = keyframes({
    '0%': {
      opacity: 0,
    },
    '25%': {
      opacity: 0,
    },
    '50%': {
      opacity: 1,
    },
    '75%': {
      opacity: 0,
    },
    '100%': {
      opacity: 0,
    },
  });

  return (
    <Image
      as={RocketLoaderIcon}
      css={{
        size: smSize,
        '@sm': {
          size: mdSize,
        },
        '@lg': {
          size: lgSize,
        },
        '#rocket_fire': {
          animation: `${rocketFire} 1.5s linear infinite`,
        },
        '#rocket_fire_m': {
          animation: `${rocketFireM} 1.5s linear infinite`,
        },
        '#rocket_fire_s': {
          animation: `${rocketFireS} 1.5s linear infinite`,
        },
      }}
    />
  );
}
