import { useRouter } from 'next/router';

import {
  BackButton,
  Box,
  Button,
  Container,
  Flex,
  Link,
  Typography,
} from '../src/ui';
import { Meta } from '../src/ui/components/Meta';
import { ROUTES } from '../src/ui/utils/routes';

export default function Governance404Page() {
  const router = useRouter();

  return (
    <>
      <Flex css={{ justifyContent: 'flex-end', mb: 12 }}>
        <BackButton onClick={router.back} variant="normal" />
      </Flex>

      <Flex
        css={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          p: 16,
          background: '$paper',
          boxShadow: '$paper',
          borderRadius: '$2',
          minHeight: '60vh',
        }}>
        <Box css={{ maxWidth: 444, m: '0 auto' }}>
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
        <Link href={ROUTES.main}>
          <Button>Back to home screen</Button>
        </Link>
      </Flex>
    </>
  );
}

Governance404Page.getLayout = function getLayout(page: React.ReactElement) {
  // TODO: need fix meta description
  return (
    <>
      <Meta title="Page not found" description="Rescue" />

      <Container size="normal">{page}</Container>
    </>
  );
};
