import { createGlobalStyle } from 'styled-components';

const theme = {
  primaryColor: '#6760fa',
  textColor: '#fefefe',
  backgroundColor1: '#1c2431',
  backgroundColor2: '#283142',
  shadow: '0 0 30px -3px #161d27',
};

export const GlobalStyle = createGlobalStyle`
  body {
    *{
      margin: 0;
      padding: 0;
    }
    margin:0;
    padding:0;
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.backgroundColor1};
    letter-spacing: 1px;
    color: ${({ theme }) => theme.textColor};
  }
`;

export default theme;
