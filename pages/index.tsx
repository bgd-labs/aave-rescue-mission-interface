import React, { useEffect } from 'react';

import { useStore } from '../src/store';
import { GetUserDataForm } from '../src/ui/components/GetUserDataForm';
import { InfoView } from '../src/ui/components/InfoView';
import { InitialView } from '../src/ui/components/InitialView';
import { ConnectWalletContent } from '../src/web3/components/wallet/ConnectWalletContent';

export default function Home() {
  const {
    appView,
    activeWallet,
    setAppView,
    setCheckedAddress,
    getUserData,
    checkedAddress,
    prevAppView,
  } = useStore();

  useEffect(() => {
    if (activeWallet) {
      if (activeWallet.isActive) {
        if (checkedAddress === '') {
          getUserData(activeWallet.accounts[0]);
          setAppView('info');
          setCheckedAddress(activeWallet.accounts[0]);
        } else if (typeof window !== 'undefined' && window !== window.parent) {
          getUserData(activeWallet.accounts[0]);
          setAppView('info');
          setCheckedAddress(activeWallet.accounts[0]);
        } else {
          setAppView(prevAppView);
        }
      }
    }
  }, [activeWallet?.isActive]);

  return (
    <>
      {appView === '' && <InitialView />}
      {appView === 'checkAddress' && <GetUserDataForm />}
      {appView === 'connectWallet' && <ConnectWalletContent />}
      {appView === 'info' && <InfoView />}
    </>
  );
}
