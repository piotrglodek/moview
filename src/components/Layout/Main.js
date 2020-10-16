import React from 'react';
import styled from 'styled-components';

export const Main = ({ children }) => <StyledMain>{children}</StyledMain>;

const StyledMain = styled.main`
  background-color: ${({ theme: { color } }) => color.main};
`;
