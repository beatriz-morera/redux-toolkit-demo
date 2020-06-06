import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import Content from './content';
import Card from './card';
import { SearchNameBtn } from '../button';

import { List, ListHeader, Section, Title, TitleSearchContainer, Input, Search } from './styled';

export default ({ citizens, value, filterHandler, searchTermHandler }) => {
  return (
    <Section>
      <TitleSearchContainer>
        <Title>
          Citizens <span>({citizens.length})</span>
        </Title>
        <Search>
          <Input placeholder="Search by name" defaultValue={value} onChange={searchTermHandler} />
          <SearchNameBtn onClick={filterHandler}>
            <SearchOutlined />
          </SearchNameBtn>
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
