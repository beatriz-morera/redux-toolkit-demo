import React from 'react';
import { useDispatch } from 'react-redux';

import { select } from '../../store/slices/citizens';

import Arrow from '../arrow';
import Content from './content';
import { SeeProfileBtn } from '../button';

import { CardAvatar, ListCard } from './styled';

const Picture = ({ image, name }) => (
  <CardAvatar>
    <img src={image} alt={name} />
  </CardAvatar>
);

export default ({ citizen }) => {
  const dispatch = useDispatch();
  return (
    <ListCard>
      <Picture image={citizen.thumbnail} name={citizen.name} />
      <Content {...citizen}>
        <SeeProfileBtn hidden onClick={() => dispatch(select(citizen))}>
          See Profile
        </SeeProfileBtn>
        <Arrow onClick={() => dispatch(select(citizen))} />
      </Content>
    </ListCard>
  );
};
