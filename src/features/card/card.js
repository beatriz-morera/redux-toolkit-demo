import React from 'react';
import styled from 'styled-components';

import Button from '../button';

const Card = styled.li`
  font-size: 14px;
  color: #687485;
  padding: 10px 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.backgroundColor2};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow};
  @media (max-width: 1020px) {
    p {
      display: none;
    }
  }
`;
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 55px;
  }
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    img {
      width: 45px;
    }
  }
`;

const Citizen = styled.ul`
  list-style: none;
  text-align: center;
  width: 35%;
  display: flex;
  align-items: center;
  h3 {
    font-weight: 300;
  }

  @media (max-width: 1020px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 85%;
    h3 {
      font-size: 13px;
    }
  }
`;

export default ({ thumbnail, name, age, height, weight }) => {
  return (
    <Card>
      <Citizen>
        <Avatar>
          <img src={thumbnail} alt={name} />
        </Avatar>
        <li>
          <h3>{name}</h3>
        </li>
      </Citizen>
      <p>{age}</p>
      <p>{Math.round(height)}</p>
      <p>{Math.round(weight)}</p>
      <Button />
    </Card>
  );
};
