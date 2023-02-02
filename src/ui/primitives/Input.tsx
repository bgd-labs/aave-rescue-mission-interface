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
  fontSize: 10,
  lineHeight: '12px',
  p: '12px 35px 12px 20px',
  '@sm': {
    fontSize: 12,
    lineHeight: '15px',
    p: '15px 35px 15px 20px',
  },
  '@lg': {
    fontSize: 15,
    lineHeight: '18px',
    p: '20px 45px 20px 25px',
  },
});
