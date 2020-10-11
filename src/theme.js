import { createGlobalStyle } from 'styled-components';

export const theme = {
  color: {
    primary: '#3e51fb',
    white: '#ffffff',
    gray: '#23242b',
    darkGray: '#1b1c22',
    black: '#08090b',
  },
};

export const GlobalStyles = createGlobalStyle`
    *,*::after,*::before{
        box-sizing:border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
    }
`;
