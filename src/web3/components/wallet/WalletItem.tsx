import { WalletType } from '../../../../packages/src';
import { useStore } from '../../../store';
import { Flex, Image, Typography } from '../../../ui';

export type Wallet = {
  walletType: WalletType;
  icon: string;
  title: string;
  setOpenImpersonatedForm?: (value: boolean) => void;
  isVisible?: boolean;
};

export function WalletItem({
  walletType,
  title,
  icon,
  setOpenImpersonatedForm,
}: Wallet) {
  const connectWallet = useStore((state) => state.connectWallet);

  const handleWalletClick = async () => {
    if (walletType === 'Impersonated' && setOpenImpersonatedForm) {
      setOpenImpersonatedForm(true);
    } else {
      await connectWallet(walletType);
    }
  };

  return (
    <Flex
      onClick={handleWalletClick}
      css={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        borderRadius: '$1',
        background: '$textWhite',
        border: '1px solid $main',
        hover: {
          boxShadow: '$buttonInset',
          buttonGradientDisabled: '',
        },
        '&:active': {
          boxShadow: 'none',
          background: '$appBackground',
        },
        mb: 5,
        p: '7px 10px',
        '@sm': {
          mb: 6,
          p: '8px 12px',
        },
        '@lg': {
          mb: 7,
          p: '9px 15px',
        },
      }}>
      <Typography
        css={{
          fontWeight: 500,
          fontSize: 12,
          lineHeight: '15px',
          '@sm': { fontSize: 15, lineHeight: '18px' },
        }}>
        {title}
      </Typography>
      <Image src={icon} css={{ size: 22, '@lg': { size: 28 } }} />
    </Flex>
  );
}
