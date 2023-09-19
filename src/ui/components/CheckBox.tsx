import { Box } from '../primitives/Box';

interface CheckBoxProps {
  value: boolean;
}

export function CheckBox({ value }: CheckBoxProps) {
  return (
    <Box
      css={{
        size: 15,
        border: '1px solid $main',
        background: '$paper',
        borderTop: '3px solid $main',
        borderRight: '3px solid $main',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s easy',
        cursor: 'pointer',
        mr: 6,
        hover: {
          background: '$disabled',
        },
      }}>
      <Box
        css={{ size: value ? 7 : 0, background: '$main', position: 'absolute' }}
      />
    </Box>
  );
}
