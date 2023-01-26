import { CSS } from '@stitches/react';
import { BigNumber } from 'bignumber.js';
import React from 'react';

import { normalizeBN, valueToBigNumber } from '../../utils/bignumber';
import { Typography } from '../primitives/Typography';

interface CompactNumberProps {
  value: string | number;
  visibleDecimals?: number;
}

const POSTFIXES = ['', 'K', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'];

function getCompactValueEndPostfix(bnValue: BigNumber) {
  const integerPlaces = bnValue.toFixed(0).length;
  const significantDigitsGroup = Math.min(
    Math.floor(integerPlaces ? (integerPlaces - 1) / 3 : 0),
    POSTFIXES.length - 1,
  );
  const postfix = POSTFIXES[significantDigitsGroup];
  const formattedValue = normalizeBN(
    bnValue,
    3 * significantDigitsGroup,
  ).toNumber();

  return { postfix, formattedValue };
}

function CompactNumber({ value, visibleDecimals = 2 }: CompactNumberProps) {
  const bnValue = valueToBigNumber(value);

  const { postfix, formattedValue } = getCompactValueEndPostfix(bnValue);

  return (
    <>
      {new Intl.NumberFormat('en-US', {
        maximumFractionDigits: visibleDecimals,
        minimumFractionDigits: visibleDecimals,
      }).format(formattedValue)}
      {postfix}
    </>
  );
}

export interface FormattedNumberProps {
  value: string | number;
  visibleDecimals?: number;
  compact?: boolean;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'headline'
    | 'body'
    | 'descriptor'
    | 'descriptorAccent'
    | 'buttonLarge'
    | 'buttonMedium'
    | 'buttonSmall';
  css?: CSS;
  startValueForCountUp?: string | number;
}

export function FormattedNumber({
  value,
  visibleDecimals = 0,
  compact,
  variant,
  css,
}: FormattedNumberProps) {
  const number = Number(value);

  const minValue = 10 ** -(visibleDecimals as number);
  const isSmallerThanMin =
    number !== 0 && Math.abs(number) < Math.abs(minValue);
  const formattedNumber = isSmallerThanMin ? minValue : number;

  const forceCompact = compact !== false && (compact || number > 99_999);

  const decimals = formattedNumber > 0 ? visibleDecimals : 0;

  return (
    <Typography
      variant={variant}
      css={{
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        whiteSpace: 'nowrap',
        ...css,
      }}>
      <>
        {!forceCompact ? (
          new Intl.NumberFormat('en-US', {
            maximumFractionDigits: decimals,
            minimumFractionDigits: decimals,
          }).format(formattedNumber)
        ) : (
          <CompactNumber value={formattedNumber} visibleDecimals={decimals} />
        )}
      </>
    </Typography>
  );
}
