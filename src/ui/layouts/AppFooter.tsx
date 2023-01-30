import { Link } from '../components/Link';
import { Flex } from '../primitives/Flex';
import { ROUTES } from '../utils/routes';

export function AppFooter() {
  return (
    <Flex
      as="footer"
      css={{ mt: 37, alignItems: 'center', justifyContent: 'center' }}>
      <Link
        href={ROUTES.about}
        css={{
          transform: 'translate(0)',
          color: '$textGray',
          fontWeight: 500,
          fontSize: 12,
          lineHeight: '15px',
          hover: { opacity: 0.7 },
        }}
        inNewWindow>
        About
      </Link>
      <Link
        href={ROUTES.gitHub}
        css={{
          transform: 'translate(0)',
          color: '$textGray',
          fontWeight: 500,
          fontSize: 12,
          lineHeight: '15px',
          ml: 15,
          hover: { opacity: 0.7 },
        }}
        inNewWindow>
        Github
      </Link>
    </Flex>
  );
}
