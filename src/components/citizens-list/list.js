import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import Button from '../button';
import Arrow from '../arrow';
import {
  Avatar,
  List,
  ListCard,
  ListHeader,
  Col,
  Section,
  Title,
  TitleSearchContainer,
  Input,
  Search,
} from './styled';

const roundNumber = (num) => (typeof num === 'number' ? Math.round(num) : num);

const Content = ({ name, age, height, weight, children }) => (
  <>
    <Col sz={2}>{name}</Col>
    <Col sz={1} extraInfo>
      {age}
    </Col>
    <Col sz={1} extraInfo>
      {roundNumber(height)}
    </Col>
    <Col sz={1} extraInfo>
      {roundNumber(weight)}
    </Col>
    <Col sz={1} reverse>
      {children}
    </Col>
  </>
);

const Picture = ({ image, name }) => (
  <Avatar>
    <img src={image} alt={name} />
  </Avatar>
);

const Card = ({ citizen }) => (
  <ListCard>
    <Picture image={citizen.thumbnail} name={citizen.name} />
    <Content {...citizen}>
      <Button hidden>See Profile</Button>
      <Arrow />
    </Content>
  </ListCard>
);

export default ({ citizens, value, filterHandler, searchTermHandler }) => {
  return (
    <Section>
      <TitleSearchContainer>
        <Title>
          Citizens <span>({citizens.length})</span>
        </Title>
        <Search>
          <Input placeholder="Search by name" defaultValue={value} onChange={searchTermHandler} />
          <Button searchBtn onClick={filterHandler}>
            <SearchOutlined />
          </Button>
        </Search>
      </TitleSearchContainer>
      <List>
        <ListHeader>
          <Content age="Age" height="Height" weight="Weight" />
        </ListHeader>
        {citizens.slice(0, 100).map((citizen) => (
          <Card key={citizen.id} citizen={citizen} />
        ))}
      </List>
    </Section>
  );
};
