import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

import Avatar from '../avatar';

export const Container = styled.div`
  position: fixed;
  margin-top: 0;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

export const Mask = styled.div`
  flex: 1;
  background: #1c243121;
  @media (max-width: 700px) {
  }
`;

export const Drawer = styled.div`
  font-size: 15px;
  padding: 30px 40px;
  width: 30%;
  background: ${({ theme }) => theme.backgroundColor2};
  box-shadow: -5px 0 10px -5px #1c2431;
  p {
    color: ${({ theme }) => theme.lightTextColor};
  }
  label {
    font-weight: 600;
    color: ${({ theme }) => theme.normalTextColor};
    text-transform: uppercase;
  }
  @media (max-width: 700px) {
    font-size: 12px;
    padding: 20px;
    width: 100%;
  }
`;

export const DetailAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
  img {
    width: 130px;
  }
`;

export const Close = styled(CloseOutlined)`
  outline: none;
  cursor: pointer;
  font-size: 20px;
  color: ${({ theme }) => theme.normalTextColor};
  float: right;
`;

export const Header = styled.div`
  display: flex;
  @media (max-width: 700px) {
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.div`
  margin-left: 20px;
  h1 {
    font-size: 22px;
    line-height: 50px;
  }
  @media (max-width: 700px) {
    margin-top: 20px;
    text-align: center;
  }
`;

const Card = styled.div`
  color: ${({ theme }) => theme.normalTextColor};
  background: ${({ theme }) => theme.backgroundColor3};
  border-radius: 5px;
  box-shadow: 0 0 10px -1px #1c2431;
  p {
    margin-top: 15px;
  }
`;

export const SmallCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const SmallCard = styled(Card)`
  width: 120px;
  margin: 30px 0;
  padding: 15px;
  text-align: center;
  @media (max-width: 700px) {
    width: 60px;
  }
`;
export const BigCard = styled(Card)`
  padding: 30px;
  ul {
    padding: 10px 15px 0;
    li {
      margin-top: 15px;
      color: ${({ theme }) => theme.lightTextColor};
    }
  }
`;

export const FriendsContainer = styled.div`
  margin: 50px 0 20px;
  ul {
    list-style: none;
    li {
      margin-top: 30px;
    }
  }
`;
