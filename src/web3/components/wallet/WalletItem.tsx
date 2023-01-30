import { WalletType } from '../../../../packages/src';
import { useStore } from '../../../store';
import { Flex, Image, Typography } from '../../../ui';

export type Wallet = {
  walletType: WalletType;
  icon: string;
  title: string;
  setOpenImpersonatedForm?: (value: boolean) => void;
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
        mb: 7,
        p: '9px 15px',
        borderRadius: '10px',
        background: '$textWhite',
        border: '1px solid $main',
        hover: {
          boxShadow: '$buttonInset',
          buttonGradientDisabled: '',
        },
        '&:active': {
          boxShadow: 'none',
          background: '$background',
        },
      }}>
      <Typography
        css={{
          color: '$main',
          fontWeight: 500,
          fontSize: 15,
          lineHeight: '18px',
        }}>
        {title}
      </Typography>
      <Image src={icon} css={{ size: 28 }} />
    </Flex>
  );
}
