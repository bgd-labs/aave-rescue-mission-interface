// TODO: need restyle

import { styled } from '../utils/theme';

export const Input = styled('input', {
  width: '100%',
  fontWeight: '400',
  fontSize: 13,
  lineHeight: '16px',
  p: 5,
  border: '1px solid $disabled',
  color: '$text',
  borderRadius: '$1',
  transition: 'all 0.2s ease',
  '&:active, &:focus': {
    border: '1px solid $main',
  },
  hover: {
    border: '1px solid $main',
  },
});
