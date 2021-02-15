import styled, { css } from 'styled-components';

import Avatar from '../avatar';

export const CardAvatar = styled(Avatar)`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  img {
    width: 60px;
  }
  @media (max-width: 325px) {
    margin-right: 5px;
  }
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    img {
      width: 45px;
    }
  }
`;

const extraInfoStyle = css`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Row = styled.li`
  display: flex;
  align-items: center;
`;
export const List = styled.ul`
  list-style: none;
`;
export const Col = styled.div`
  flex: ${({ sz }) => sz || 1};
  ${({ extraInfo }) => extraInfo && extraInfoStyle}
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

export const ListHeader = styled(Row)`
  color: ${({ theme }) => theme.normalTextColor};
  font-size: 14px;
  text-transform: uppercase;
  margin: 35px 5px 15px 55px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ListCard = styled(Row)`
  font-size: 12px;
  color: ${({ theme }) => theme.normalTextColor};
  padding: 10px;
  margin-bottom: 10px;
  background: ${({ theme }) => theme.backgroundColor2};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow};
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`;

export const Section = styled.section`
  flex: 1;
  padding: 30px 10px;
  @media (min-width: 768px) {
    padding: 30px;
  }
`;
export const Title = styled.h2`
  font-weight: 200;
  span {
    color: ${({ theme }) => theme.primaryColor};
  }
  @media (max-width: 1020px) {
    margin-bottom: 20px;
  }
`;
export const TitleSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: unset;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1020px) {
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    margin: 10px 0 30px 0;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  color: ${({ theme }) => theme.lightTextColor};
  padding: 12px;
  border-radius: 3px;
  margin-right: 10px;
  @media (max-width: 600px) {
    flex: 1;
  }
  background: ${({ theme }) => theme.backgroundColor2};
`;

export const Flexbox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;