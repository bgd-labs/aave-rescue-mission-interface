import { styled } from '../utils/theme';

export const Input = styled('input', {
  width: '100%',
  fontWeight: '500',
  border: '1px solid $main',
  color: '$text',
  borderRadius: '$1',
  transition: 'all 0.2s ease',
  '&:active, &:focus': {
    border: '1px solid $textSecondary',
  },
  hover: {
    border: '1px solid $textSecondary',
  },
  fontSize: 11,
  lineHeight: '13px',
  p: '12px 25px 12px 10px',
  '@sm': {
    p: '15px 25px 15px 10px',
  },
  '@lg': {
    fontSize: 14,
    lineHeight: '16px',
    p: '20px 45px 20px 25px',
  },
});
