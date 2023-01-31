import 'react-loading-skeleton/dist/skeleton.css';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { AppGlobalStyles, MainLayout } from '../src/ui';
import Web3Provider from '../src/web3/components/Web3Provider';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const router = useRouter();

  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);

  useEffect(() => {
    if (router.pathname !== '/') {
      router.replace('/');
    }
  }, [router.pathname]);

  return (
    <AppGlobalStyles>
      <Web3Provider />
      <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
    </AppGlobalStyles>
  );
}

export default MyApp;
