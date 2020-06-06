import styled, { css } from 'styled-components';

const hiddenStyle = css`
  display: block;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0 0 5px -1px #1c2431;
  transition: 0.3s;
  color: ${({ theme }) => theme.lightTextColor};
`;

export const SeeProfileBtn = styled(Button)`
  font-size: 12px;
  justify-self: end;
  &:hover {
    background: ${({ theme }) => theme.primaryColor};
  }
  background: ${({ theme }) => theme.backgroundColor3};
  ${({ hidden }) => hidden && hiddenStyle};
`;

export const SearchNameBtn = styled(Button)`
  font-size: 15px;
  background: ${({ theme }) => theme.primaryColor};
  &:hover {
    background: ${({ theme }) => theme.backgroundColor3};
  }
`;
