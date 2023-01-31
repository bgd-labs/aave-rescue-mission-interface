import { Link } from '../components/Link';
import { Flex } from '../primitives/Flex';
import { Typography } from '../primitives/Typography';
import { ROUTES } from '../utils/routes';

export function AppFooter() {
  return (
    <Flex
      as="footer"
      css={{ mt: 37, alignItems: 'center', justifyContent: 'center' }}>
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
    </Flex>
  );
}
