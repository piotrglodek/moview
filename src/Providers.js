import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './theme';

export const Providers = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </Router>
  );
};
