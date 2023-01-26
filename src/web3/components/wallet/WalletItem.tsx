import { WalletType } from '../../../../packages/src';
import { useStore } from '../../../store';
import { Flex, Image, Typography } from '../../../ui';

export type Wallet = {
  walletType: WalletType;
  icon: string;
  title: string;
  setOpenImpersonatedForm?: (value: boolean) => void;
  onClick?: () => void;
};

export function WalletItem({
  walletType,
  title,
  icon,
  setOpenImpersonatedForm,
  onClick,
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
      onClick={!!onClick ? onClick : handleWalletClick}
      css={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        mb: 10,
        p: '10px 15px',
        borderRadius: '$1',
        background: '$light',
        hover: {
          boxShadow: '$buttonInset',
          buttonGradientDisabled: '',
        },
        '&:active': {
          boxShadow: 'none',
          background: '$disabled',
        },
      }}>
      <Typography variant="h3">{title}</Typography>
      <Image src={icon} css={{ size: 28 }} />
    </Flex>
  );
}
