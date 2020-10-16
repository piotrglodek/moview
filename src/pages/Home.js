import React from 'react';
import styled from 'styled-components';
// components
import { Container, Section, withScroll, CardList } from '../components';
// api
import { apiSections } from '../api';

const CardScrollList = withScroll(CardList);

export const Home = () => {
  return (
    <StyledMain>
      <Container>
        {apiSections.map(section => (
          <Section key={section.title} title={section.title}>
            <CardScrollList
              title={section.title}
              url={section.url}
              mediaType={section.mediaType}
            />
          </Section>
        ))}
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  background-color: ${({ theme: { color } }) => color.main};
`;
