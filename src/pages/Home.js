import React from 'react';
import styled from 'styled-components';
// components
import { Container, Section, SectionTitle } from '../components/';

export const Home = () => {
  return (
    <StyledMain>
      <Container>
        <Section>
          <SectionTitle>Most popular movies</SectionTitle>
        </Section>
        <Section>
          <SectionTitle>Top rated movies</SectionTitle>
        </Section>
        <Section>
          <SectionTitle>Most popular series</SectionTitle>
        </Section>
        <Section>
          <SectionTitle>Top rated series</SectionTitle>
        </Section>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  background-color: ${({ theme: { color } }) => color.main};
`;
