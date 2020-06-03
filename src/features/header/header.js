import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background: ${({ theme }) => theme.primaryColor};
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 1;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
`;
export default () => {
  return (
    <Header>
      <Title>Brastlewark</Title>
    </Header>
  );
};
