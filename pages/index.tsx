import React from 'react';

import { Container } from '../src/ui';
import { Meta } from '../src/ui/components/Meta';

export default function Home() {
  return <h1>Hello world</h1>;
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  // TODO: need fix meta description
  return (
    <>
      <Meta title="Rescue" description="Rescue" />

      <Container size="normal">{page}</Container>
    </>
  );
};
