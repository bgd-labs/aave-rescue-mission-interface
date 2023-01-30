import { useStore } from '../src/store';
import { Box, Button, Flex, Link, Typography } from '../src/ui';
import { Meta } from '../src/ui/components/Meta';
import { ROUTES } from '../src/ui/utils/routes';

export default function App404Page() {
  const { setAppView } = useStore();

  return (
    <Flex
      css={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
      <Box css={{ maxWidth: 444 }}>
        <img
          width="100%"
          height="auto"
          src="/404/404.svg"
          alt="404 - Page not found"
        />
      </Box>
      <Typography variant="h1" css={{ mt: 8 }}>
        Page not found
      </Typography>
      <Typography css={{ mt: 12, mb: 20, maxWidth: 480 }}>
        Sorry, we couldn&apos;t find the page you were looking for.
        <br />
        We suggest you go back to the home screen.
      </Typography>

      <Link href={ROUTES.main} onClick={() => setAppView('')}>
        <Button>Back to home</Button>
      </Link>
    </Flex>
  );
}

App404Page.getLayout = function getLayout(page: React.ReactElement) {
  // TODO: need fix meta description
  return (
    <>
      <Meta title="Page not found" description="Rescue" />

      <>{page}</>
    </>
  );
};
