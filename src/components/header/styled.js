import styled from 'styled-components';
import { MenuOutlined } from '@ant-design/icons';

export const Header = styled.header`
  background: ${({ theme }) => theme.primaryColor};
  padding: 20px 30px;
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 1;
  @media (max-width: 1023px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 767px) {
    padding: 15px 10px;
  }
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;

  @media (max-width: 1023px) {
    text-align: right;
  }
`;

export const BurgerMenu = styled(MenuOutlined)`
  font-size: 20px;
  @media (min-width: 1024px) {
    display: none;
  }
`;
