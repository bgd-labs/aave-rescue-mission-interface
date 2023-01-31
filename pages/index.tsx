import React from 'react';

import { useStore } from '../src/store';
import { GetUserDataForm } from '../src/ui/components/GetUserDataForm';
import { InfoView } from '../src/ui/components/InfoView';
import { Meta } from '../src/ui/components/Meta';
import { ConnectWalletContent } from '../src/web3/components/wallet/ConnectWalletContent';

export default function Home() {
  const { appView } = useStore();

  return (
    <>
      {appView === '' && <GetUserDataForm />}
      {appView === 'connectWallet' && <ConnectWalletContent />}
      {appView === 'info' && <InfoView />}
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  // TODO: need fix meta description
  return (
    <>
      <Meta title="Rescue" description="Rescue" />

      <>{page}</>
    </>
  );
};
