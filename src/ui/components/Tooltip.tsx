import { ReactNode } from 'react';

import { Box } from '../primitives/Box';
import { styled } from '../utils/theme';

interface TooltipProps {
  children: ReactNode;
  tooltipContent: ReactNode;
  color?: 'light' | 'dark';
  position?: 'top';
}

const TooltipWrapper = styled('div', {
  opacity: 0,
  zIndex: -1,
  transition: 'all 0.2s ease',
  position: 'absolute',
  top: 'calc(100% + 3px)',
  padding: '2px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 45,
  variants: {
    color: {
      light: {
        background: '$light',
        color: '$text',
      },
      dark: {
        background: '$secondary',
        color: '$textWhite',
      },
    },
    position: {
      top: {
        top: 'auto',
        bottom: 'calc(100% + 3px)',
      },
    },
  },
});

export function Tooltip({
  children,
  tooltipContent,
  color = 'light',
  position,
}: TooltipProps) {
  return (
    <Box
      css={{
        lineHeight: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        '&:hover': { '.Tooltip__wrapper': { opacity: 1, zIndex: 1 } },
      }}>
      <Box css={{ lineHeight: 0 }}>{children}</Box>

      <TooltipWrapper
        className="Tooltip__wrapper"
        color={color}
        position={position}>
        {tooltipContent}
      </TooltipWrapper>
    </Box>
  );
}
