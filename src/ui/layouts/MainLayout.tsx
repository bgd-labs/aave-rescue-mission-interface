import { ReactNode } from 'react';

import { Box } from '../primitives/Box';
import { AppHeader } from './AppHeader';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box
      css={{
        position: 'relative',
        pb: 40,
        '@lg': { pb: 60 },
      }}>
      <AppHeader />

      <Box as="main" css={{ position: 'relative', zIndex: 2 }}>
        {children}
      </Box>

      <Box
        css={{
          background: '$main',
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          height: 148,
          '@md': {
            height: 162,
          },
        }}
      />
    </Box>
  );
}
