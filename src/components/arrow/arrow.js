import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Arrow = styled(RightOutlined)`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 15px;
  @media (min-width: 701px) {
    display: none;
  }
`;

export default () => {
  return <Arrow />;
};
