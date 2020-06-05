import styled, { css } from 'styled-components';

const hiddenStyle = css`
  display: block;
  @media (max-width: 700px) {
    display: none;
  }
`;

const searchBtnStyle = css`
  font-size: 15px;
  background: ${({ theme }) => theme.primaryColor};
  &:hover {
    background: ${({ theme }) => theme.backgroundColor3};
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;
  box-shadow: 0 0 5px -1px #1c2431;
  justify-self: end;
  transition: 0.3s;
  &:hover {
    background: ${({ theme }) => theme.primaryColor};
  }
  color: ${({ theme }) => theme.lightTextColor};
  background: ${({ theme }) => theme.backgroundColor3};
  ${({ hidden }) => hidden && hiddenStyle};
  ${({ searchBtn }) => searchBtn && searchBtnStyle};
`;

export default Button;
