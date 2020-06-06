import React from 'react';

import Arrow from '../arrow';
import Content from './content';
import { SeeProfileBtn } from '../button';

import { Avatar, ListCard } from './styled';

const Picture = ({ image, name }) => (
  <Avatar>
    <img src={image} alt={name} />
  </Avatar>
);

export default ({ citizen }) => (
  <ListCard>
    <Picture image={citizen.thumbnail} name={citizen.name} />
    <Content {...citizen}>
      <SeeProfileBtn hidden>See Profile</SeeProfileBtn>
      <Arrow />
    </Content>
  </ListCard>
);
