import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import { select } from '../../store/slices/citizens';

import {
  Container,
  Mask,
  Drawer,
  DetailAvatar,
  Close,
  Header,
  Title,
  SmallCardsContainer,
  SmallCard,
  BigCard,
  FriendsContainer,
} from './styled';

export default ({ name, thumbnail, age, weight, height, hair_color, professions, friends }) => {
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    dispatch(select(null));
  }, [dispatch]);
  return (
    <Container>
      <Mask onClick={handleClose} />
      <Drawer>
        <Close onClick={handleClose} />
        <Header>
          <DetailAvatar>
            <img src={thumbnail} alt={name} />
          </DetailAvatar>
          <Title>
            <h1>{name}</h1>
            <p>
              <label>Hair color:</label> {hair_color}
            </p>
          </Title>
        </Header>

        <SmallCardsContainer>
          <SmallCard>
            <label>Age</label>
            <p>{age}</p>
          </SmallCard>
          <SmallCard>
            <label>Height</label>
            <p>{height}</p>
          </SmallCard>
          <SmallCard>
            <label>Weight</label>
            <p>{weight}</p>
          </SmallCard>
        </SmallCardsContainer>
        {professions.length > 0 && (
          <BigCard>
            <label>Professions</label>
            <ul>
              {professions.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </BigCard>
        )}
        {friends.length > 0 && (
          <FriendsContainer>
            <label>Friends</label>
            <ul>
              {friends.map((f, i) => (
                <li key={i}>
                  <p>{f}</p>
                </li>
              ))}
            </ul>
          </FriendsContainer>
        )}
      </Drawer>
    </Container>
  );
};
