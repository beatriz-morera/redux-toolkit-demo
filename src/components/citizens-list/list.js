import React, {useCallback, useState, useMemo } from 'react';
import { SearchOutlined } from '@ant-design/icons';

import Content from './content';
import Card from './card';
import { SearchNameBtn } from '../button';

import { List, ListHeader, Section, Title, TitleSearchContainer, Input, Search, Flexbox } from './styled';

function usePaged(list, itemsPage = 10) {
  const [page, setPage] = useState(0)

  const items = useMemo(() => {
    const startIndex = page* itemsPage;
    const endIndex = Math.min(list.length, startIndex + itemsPage);
    return list.slice(startIndex, endIndex)
  }, [page, list, itemsPage])

  const hasNext = useMemo(() => list.length >= itemsPage*(page+1), [list, itemsPage, page]);
  const hasPrev = useMemo(() => page > 0, [page]);

  const nextPage = useCallback(() => setPage(x => x + 1), [])
  const prevPage = useCallback(() => setPage(x => x - 1), [])

  return {
    page,
    items,
    hasNext,
    hasPrev,
    nextPage,
    prevPage
  }
}

export default ({ citizens, value, filterHandler, searchTermHandler }) => {
  const { items, hasNext, hasPrev, nextPage, prevPage } = usePaged(citizens)
  // const [page, setPage] = useState(1)
  // const [showNext, setShowNext] = useState(true)
  // const [list, setList] = useState(citizens.slice(0, 10))

  // const previousHandler = useCallback(
  //   () => {
  //     const newPage = page-1
  //     page !== 1 && setPage(newPage)
  //     setList(citizens.slice(list.length*newPage, list.length*newPage + list.length))
  //     console.log(page + " " + list.length*newPage + " " + " " + list.length*newPage + list.length)
  //   },
  //   [page, citizens, list],
  // )

  

  // const nextHandler = useCallback(
  //   () => {
     
  //     const newPage = page+1
  //    setPage(newPage)
  //     if(citizens.length >= list.length*newPage){
  //     setList(citizens.slice(list.length*newPage, list.length*newPage + list.length))
  //   }else{
  //     setShowNext(false)
  //   }
  //   console.log(page + " " + list.length*newPage + " " + " " + list.length*newPage + list.length)
  //   },
  //   [page, citizens, list],
  // )

  const enterKeyHandler = useCallback(
    (ev) => {
     if(ev.keyCode === 13){
       filterHandler && filterHandler()
     }
    },
    [filterHandler],
  )
  
  return (
    <Section>
      <TitleSearchContainer>
        <Title>
          Citizens <span>({citizens.length})</span>
        </Title>
        <Search>
          <Input placeholder="Search by name" defaultValue={value} onChange={searchTermHandler} onKeyDown={(ev) => enterKeyHandler(ev)}/>
          <SearchNameBtn onClick={filterHandler}>
            <SearchOutlined />
          </SearchNameBtn>
        </Search>
      </TitleSearchContainer>
      <List>
        <ListHeader>
          <Content age="Age" height="Height" weight="Weight" />
        </ListHeader>
        {items.map((citizen) => (
          <Card key={citizen.id} citizen={citizen} />
        ))}
      </List>
      <Flexbox>
      <SearchNameBtn disabled={!hasPrev} onClick={prevPage}>{`<`}</SearchNameBtn>
      <SearchNameBtn disabled={!hasNext} onClick={nextPage}>{`>`}</SearchNameBtn>
      </Flexbox>
    </Section>
  );
};
