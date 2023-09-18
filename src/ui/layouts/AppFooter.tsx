import { useStore } from '../../store';
import { Link } from '../components/Link';
import { Box } from '../primitives/Box';
import { Flex } from '../primitives/Flex';
import { Typography } from '../primitives/Typography';
import { ROUTES } from '../utils/routes';

export function AppFooter() {
  const { setModalOpen, setIsAboutModalOpen } = useStore();

  return (
    <Flex
      as="footer"
      css={{
        mt: 24,
        alignItems: 'center',
        justifyContent: 'center',
        '@lg': { mt: 37 },
      }}>
      <Box
        as="button"
        type="button"
        onClick={() => setIsAboutModalOpen(true)}
        css={{ hover: { opacity: 0.7 } }}>
        <Typography
          variant="descriptorAccent"
          css={{ color: '$textSecondary' }}>
          About
        </Typography>
      </Box>
      <Typography
        as="button"
        type="button"
        variant="descriptorAccent"
        onClick={() => setModalOpen(true)}
        css={{
          color: '$textSecondary',
          ml: 15,
          cursor: 'pointer',
          hover: { opacity: 0.7 },
        }}>
        Terms and Conditions
      </Typography>
    </Flex>
  );
}
