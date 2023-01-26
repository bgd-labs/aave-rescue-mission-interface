import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react';

import { darkTheme, globalStyles } from '../utils/theme';

/**
 * Main Layout component which wrapps around the whole app
 * @param param0
 * @returns
 */
export function AppGlobalStyles({ children }: { children: ReactNode }) {
  globalStyles();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}>
      {children}
    </ThemeProvider>
  );
}
