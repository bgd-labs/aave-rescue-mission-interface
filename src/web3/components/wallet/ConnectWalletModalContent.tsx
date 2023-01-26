import { Flex, Link, Typography } from '../../../ui';
import { GradientLoader } from '../../../ui/components/GradientLoader';
import { ImpersonatedForm } from './ImpersonatedForm';
import { Wallet, WalletItem } from './WalletItem';

interface ConnectWalletModalContentProps {
  walletActivating: boolean;
  wallets: Wallet[];
  impersonatedFormOpen?: boolean;
  setImpersonatedFormOpen?: (value: boolean) => void;
  onWalletButtonClick?: () => void;
  walletConnectionError?: string;
  withoutHelpText?: boolean;
}

export function ConnectWalletModalContent({
  walletActivating,
  wallets,
  impersonatedFormOpen,
  setImpersonatedFormOpen,
  onWalletButtonClick,
  walletConnectionError,
  withoutHelpText,
}: ConnectWalletModalContentProps) {
  return (
    <Flex
      css={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <Flex css={{ flexDirection: 'column', mb: 18, width: '100%' }}>
        <Typography variant="h1" css={{ mb: 24, textAlign: 'center' }}>
          Connect a wallet
        </Typography>

        <Flex
          css={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            minHeight: 245,
          }}>
          {walletActivating ? (
            <Flex
              css={{
                background: '$paper',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}>
              <GradientLoader />

              <Typography variant="h2" css={{ mb: 7 }}>
                Connecting...
              </Typography>
              <Typography variant="h3">
                Waiting confirmation from your wallet
              </Typography>
            </Flex>
          ) : (
            <>
              {impersonatedFormOpen && !!setImpersonatedFormOpen ? (
                <ImpersonatedForm closeClick={setImpersonatedFormOpen} />
              ) : (
                <>
                  {wallets.map((wallet) => (
                    <WalletItem
                      walletType={wallet.walletType}
                      icon={wallet.icon}
                      title={wallet.title}
                      key={wallet.walletType}
                      setOpenImpersonatedForm={setImpersonatedFormOpen}
                      onClick={onWalletButtonClick}
                    />
                  ))}
                </>
              )}
            </>
          )}

          {walletConnectionError && (
            <Typography
              variant="descriptor"
              css={{ color: '$error', textAlign: 'center' }}>
              {walletConnectionError}
            </Typography>
          )}
        </Flex>
      </Flex>

      {!withoutHelpText && (
        <Flex
          css={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          <Typography variant="body" css={{ mb: 28 }}>
            Need help connecting a wallet?{' '}
            <Link
              href="https://docs.aave.com/faq/troubleshooting"
              css={{
                color: '$main',
                textDecoration: 'underline',
                hover: { color: '$textSecondary' },
              }}
              inNewWindow>
              Read FAQ
            </Link>
          </Typography>
          <Typography variant="descriptor" css={{ color: '$textSecondary' }}>
            Wallets are provided by External Providers and by selecting you
            agree to Terms of those Providers. Your access to the wallet might
            be reliant on the External Provider being operational.
          </Typography>
        </Flex>
      )}
    </Flex>
  );
}
