import React from 'react';
import styled from 'styled-components';

const Aside = styled.aside`
  display: none;
  @media (min-width: 1024px) {
    display: unset;
    width: 15%;
    background: ${({ theme }) => theme.backgroundColor2};
  }
`;

export default () => {
  return <Aside></Aside>;
};
