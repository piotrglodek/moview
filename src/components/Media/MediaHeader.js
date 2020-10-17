import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const MediaHeader = ({
  title,
  tagline,
  subtitle,
  text,
  genre_ids,
  year,
}) => {
  return (
    <>
      <StyledTopTagline>{year}</StyledTopTagline>
      <StyledTitle>{title}</StyledTitle>
      {tagline && <StyledTagline>{tagline}</StyledTagline>}
      <StyledGenres>
        {genre_ids.map(genre => (
          <StyledGenre key={genre.id}>{genre.name}</StyledGenre>
        ))}
      </StyledGenres>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledText>{text}</StyledText>
    </>
  );
};

const shared = css`
  margin: 0;
`;

const StyledTopTagline = styled.p`
  ${shared}
  font-size: 1.2rem;
  color: ${({ theme: { color } }) => color.gray};
  margin-bottom: 0.5rem;
`;
const StyledTitle = styled.h2`
  ${shared}
  font-size: 3rem;
  color: ${({ theme: { color } }) => color.white};
  @media screen and (max-width: 800px) {
    font-size: 2.5rem;
  }
`;
const StyledTagline = styled.p`
  ${shared}
  font-size: 1.4rem;
  color: ${({ theme: { color } }) => color.gray};
  margin-bottom: 2rem;
`;

const StyledGenres = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 1rem 0;
`;

const StyledGenre = styled.span`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.4rem 1rem;
  background-color: ${({ theme: { color } }) => color.primary};
  border-radius: 2rem;
  color: ${({ theme: { color } }) => color.white};
  font-size: 1rem;
  width: max-content;
`;

const StyledSubtitle = styled.p`
  ${shared}
  font-size: 2rem;
  color: ${({ theme: { color } }) => color.primary};
  font-weight: ${({ theme: { weight } }) => weight.medium};
  margin-bottom: 2rem;
`;
const StyledText = styled.p`
  ${shared}
  color: ${({ theme: { color } }) => color.white};
  font-size: 1.6rem;
`;

MediaHeader.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  subtitle: PropTypes.number,
  text: PropTypes.string,
  genre_ids: PropTypes.array,
  year: PropTypes.number,
};
