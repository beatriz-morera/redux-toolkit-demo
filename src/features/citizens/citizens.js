import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';

import { loadCitizensList } from './citizensSlice';
import { selectCitizens } from '../../app/selectors';

import CitizensList from '../citizensList';

const Section = styled.section`
  flex: 1;
  padding: 30px 10px;
  @media (min-width: 768px) {
    padding: 30px;
  }
`;
const Title = styled.h2`
  font-weight: 200;
  span {
    color: ${({ theme }) => theme.primaryColor};
  }
  @media (max-width: 1020px) {
    margin-bottom: 20px;
  }
`;

const Labels = styled.ul`
  padding: 35px 0 15px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    font-size: 14px;
    color: #687485;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    width: 15%;
  }

  div {
    width: 43%;
    li {
      text-align: left;
    }
  }
  @media (max-width: 1020px) {
    display: none;
  }
`;

export default () => {
  const citizens = useSelector(selectCitizens);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCitizensList());
  }, [dispatch]);

  return (
    <Section>
      <Title>
        Citizens <span>({citizens.length})</span>
      </Title>
      <Labels>
        <div>
          <li>Name</li>
        </div>
        <li>Age</li>
        <li>Height</li>
        <li>Weight</li>
        <li>Profile</li>
      </Labels>
      <CitizensList citizens={citizens} />
    </Section>
  );
};
