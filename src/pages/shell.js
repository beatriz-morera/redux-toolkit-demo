import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';

import Loading from '../components/loading';
import Header from '../components/header';
import Aside from '../components/aside';

const Citizens = lazy(() => import('../containers/citizens'));
const Detail = lazy(() => import('../containers/detail'));

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
        <Detail />
      </Page>
    </Suspense>
  );
};
