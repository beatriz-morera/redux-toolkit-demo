import styled from 'styled-components';
import {Input} from "../citizens-list/styled"

export const Aside = styled.aside`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    width: 20%;
    background: ${({ theme }) => theme.backgroundColor2};
  }
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
  
`;

export const FilterInput = styled(Input)`
  width: 80px;
  background: ${({ theme }) => theme.backgroundColor3};
`;

export const Span = styled.span`
  margin: 0.5rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

`;