import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectAuth } from '../store/slices/auth';

import Header from '../components/header';
import Aside from '../components/aside';
import Citizens from '../containers/citizens';
import Detail from '../containers/detail';

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
  const authUser = useSelector(selectAuth);
  const history = useHistory();

  useEffect(() => {
    if (!authUser.email) {
      history.push('/login');
    }
  }, [history, authUser]);

  return (
    <>
      <Page>
        <Header />
        <Container>
          <Aside />
          <Citizens />
        </Container>
        <Detail />
      </Page>
    </>
  );
};
