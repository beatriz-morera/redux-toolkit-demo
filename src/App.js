import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';

import Loading from './features/loading';
import Header from './features/header';
import Aside from './features/aside';

const Citizens = lazy(() => import('./features/citizens'));

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
`;

export default () => {
  return (
    <Suspense fallback={<Loading />}>
      <Page>
        <Header />
        <Container>
          <Aside />
          <Citizens />
        </Container>
      </Page>
    </Suspense>
  );
};
