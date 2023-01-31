import { styled } from '../utils/theme';

export const Input = styled('input', {
  width: 'calc(100% + 60px)',
  fontWeight: '500',
  fontSize: 15,
  lineHeight: '18px',
  p: '20px 30px',
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
});
