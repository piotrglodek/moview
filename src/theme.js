import { createGlobalStyle } from 'styled-components';

export const theme = {
  color: {
    white: '#ffffff',
    primary: '#3e51fb',
    gray: 'rgba(255, 255, 255, 0.05)',
    nav: '#23242b',
    main: '#1b1c22',
    filter: '#08090b',
  },
  weight: {
    regular: '400',
    medium: '500',
    bold: '700',
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
        margin:0;
        font-family: 'Poppins', sans-serif;
    }
`;
