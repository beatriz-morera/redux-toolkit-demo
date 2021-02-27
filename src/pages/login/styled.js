import styled from 'styled-components';

import { SearchNameBtn } from '../../components/button';

export const Section = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  text-align: center;
  @media (min-width: 600px) {
    padding: 3rem;
    border-radius: 3px;
    box-shadow: ${({ theme }) => theme.shadow};
    background: ${({ theme }) => theme.backgroundColor2};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Alert = styled.div`
  padding: 10px;
  width: 280px;
  color: red;
  text-align: left;
  font-size: 0.7rem;
  border-radius: 3px;
  margin-bottom: 15px;
  border: 1px solid red;
`;

export const Icon = styled.img`
  width: 1rem;
  top: 10px;
  left: 10px;
  position: absolute;
`;

export const Input = styled.input`
  width: 255px;
  font-size: 1rem;
  border-radius: 3px;
  background: ${({ theme }) => theme.backgroundColor3};
  border: none;
  outline: none;
  height: 40px;
  margin-bottom: 15px;
  padding: 0 10px 0 35px;
  color: ${({ theme }) => theme.lightTextColor};
`;

export const Error = styled.p`
  text-align: left;
  font-size: 0.7rem;
  color: red;
  margin: -5px 0 15px;
  width: 300px;
  white-space: pre-wrap;
`;

export const Button = styled(SearchNameBtn)`
  height: 40px;
  width: 300px;
  font-size: 1rem;
`;
