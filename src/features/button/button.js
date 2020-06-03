import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 12px;
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textColor};
  justify-self: end;
`;

export default () => {
  return <Button>See Profile</Button>;
};
