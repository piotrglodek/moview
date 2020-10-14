import React from 'react';
import styled from 'styled-components';
// components
import { CardList, Container, Section, SectionTitle } from '../components/';
// api
import { fetchTypes } from '../api';
// scroll bar
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export const Home = () => {
  return (
    <StyledMain>
      <Container>
        {fetchTypes.map((type, i) => {
          const { title } = type;
          return (
            <Section key={i}>
              <SectionTitle>{title}</SectionTitle>
              <SimpleBar>
                <CardList type={type} />
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
