import { useStore } from '../../store';
import { Link } from '../components/Link';
import { Flex } from '../primitives/Flex';
import { Typography } from '../primitives/Typography';
import { ROUTES } from '../utils/routes';

export function AppFooter() {
  const { setModalOpen } = useStore();

  return (
    <Flex
      as="footer"
      css={{
        mt: 24,
        alignItems: 'center',
        justifyContent: 'center',
        '@lg': { mt: 37 },
      }}>
      <Link href={ROUTES.about} css={{ hover: { opacity: 0.7 } }} inNewWindow>
        <Typography
          variant="descriptorAccent"
          css={{ color: '$textSecondary' }}>
          About
        </Typography>
      </Link>
      <Link
        href={ROUTES.gitHub}
        css={{ ml: 15, hover: { opacity: 0.7 } }}
        inNewWindow>
        <Typography
          variant="descriptorAccent"
          css={{ color: '$textSecondary' }}>
          Github
        </Typography>
      </Link>
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
