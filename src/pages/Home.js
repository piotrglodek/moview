import React from 'react';
import styled from 'styled-components';
// components
import {
  MovieCardList,
  SerieCardList,
  Container,
  Section,
  SectionTitle,
} from '../components/';
// api
import { fetchTypes } from '../api';

export const Home = () => {
  return (
    <StyledMain>
      <Container>
        {fetchTypes.movies.map((movie, i) => {
          const { title } = movie;
          return (
            <Section key={i}>
              <SectionTitle>{title}</SectionTitle>
              <MovieCardList fetch={movie} />
            </Section>
          );
        })}
        {fetchTypes.tv.map((serie, i) => {
          const { title } = serie;
          return (
            <Section key={i}>
              <SectionTitle>{title}</SectionTitle>
              <SerieCardList fetch={serie} />
            </Section>
          );
        })}
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  background-color: ${({ theme: { color } }) => color.main};
`;
