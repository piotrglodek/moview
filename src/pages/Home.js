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
// scroll bar
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export const Home = () => {
  return (
    <StyledMain>
      <Container>
        {fetchTypes.movies.map((movie, i) => {
          const { title } = movie;
          return (
            <Section key={i}>
              <SectionTitle>{title}</SectionTitle>
              <SimpleBar>
                <MovieCardList fetch={movie} />
              </SimpleBar>
            </Section>
          );
        })}
        {fetchTypes.tv.map((serie, i) => {
          const { title } = serie;
          return (
            <Section key={i}>
              <SectionTitle>{title}</SectionTitle>
              <SimpleBar>
                <SerieCardList fetch={serie} />
              </SimpleBar>
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
