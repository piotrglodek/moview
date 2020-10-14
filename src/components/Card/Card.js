import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
// api
import { useQuery } from 'react-query';
import { base_poster_url, fetchGenres } from '../../api';

export const Card = ({ data, to, title, year }) => {
  const { id, poster_path, vote_average, genre_ids } = data;
  let poster_url = `${base_poster_url}${poster_path}`;
  let releaseYear = parseInt(year);
  const genres = useQuery([to, genre_ids], fetchGenres);

  return (
    <StyledCard to={`/${to}/${id}`}>
      <StyledImage src={poster_url} alt={`${title} image`} />
      <StyledOverlay>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{releaseYear}</StyledSubtitle>
        <StyledWrapper>
          {genres.isLoading
            ? 'loading...'
            : genres.isError
            ? 'error'
            : genres.data.map(genre => (
                <StyledBadge key={genre}>{genre}</StyledBadge>
              ))}
        </StyledWrapper>
        <StyledText>{vote_average}</StyledText>
      </StyledOverlay>
    </StyledCard>
  );
};

const StyledCard = styled(Link)`
  position: relative;
  text-decoration: none;
  display: block;
  border: 2px solid transparent;
  border-radius: 0.2rem;
  transition: border 0.3s ease;
  &:hover {
    border-color: ${({ theme: { color } }) => color.primary};
  }
`;

const StyledImage = styled.img`
  display: block;
  border-radius: 0.5rem;
  width: 15.4rem;
  height: 23.1rem;
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 100%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0;
  visibility: hidden;
  padding: 1rem 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  ${StyledCard}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const shared = css`
  color: ${({ theme: { color } }) => color.white};
  font-weight: ${({ theme: { weight } }) => weight.medium};
  margin: 0;
  font-size: 1.2rem;
`;

const StyledTitle = styled.h2`
  ${shared};
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  font-weight: ${({ theme: { weight } }) => weight.bold};
`;
const StyledSubtitle = styled.p`
  ${shared}
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const StyledBadge = styled.p`
  ${shared}
  margin-right:.2rem;
`;

const StyledText = styled.p`
  ${shared}
  color:${({ theme: { color } }) => color.primary};
  font-weight: ${({ theme: { weight } }) => weight.bold};
`;

Card.propTypes = {
  data: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
