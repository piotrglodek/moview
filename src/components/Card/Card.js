import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// card components
import { CardImage } from './CardImage';
import { CardFooter } from './CardFooter';
// api
import { useQuery } from 'react-query';
import { base_poster_url, fetchMediaGenres } from '../../api';

export const Card = ({ data, mediaType, ...rest }) => {
  const { id, poster_path, vote_average, genre_ids } = data;
  let poster_url = `${base_poster_url}w154${poster_path}`;
  let title = mediaType === 'movie' ? data.title : data.name;
  let year = parseInt(
    mediaType === 'movie' ? data.release_date : data.first_air_date
  );
  const genres = useQuery([mediaType, genre_ids], fetchMediaGenres);

  return (
    <StyledCard {...rest}>
      <StyledLink to={`/${mediaType}/${id}`}>
        <CardImage src={poster_url} alt={title} />
        <StyledOverlay>
          <StyledText>{vote_average}</StyledText>
          <StyledBadges>
            {genres.isLoading
              ? 'Loading categories...'
              : genres.isError
              ? "Oops, couldn't fetch categories"
              : genres.data.map(genre => (
                  <StyledBadge key={genre}>{genre}</StyledBadge>
                ))}
          </StyledBadges>
        </StyledOverlay>
      </StyledLink>
      <CardFooter title={title} year={year} />
    </StyledCard>
  );
};

const StyledCard = styled.div`
  text-decoration: none;
  display: block;
  margin: 1rem;
`;

const StyledLink = styled(Link)`
  position: relative;
  display: block;
`;

const StyledOverlay = styled.div`
  border-radius: 0.2rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 100%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  ${StyledLink}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

const StyledText = styled.span`
  color: ${({ theme: { color } }) => color.white};
  font-weight: ${({ theme: { weight } }) => weight.medium};
  font-size: 1.6rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const StyledBadges = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBadge = styled.span`
  margin-bottom: 0.5rem;
  padding: 0.4rem 1rem;
  background-color: ${({ theme: { color } }) => color.main};
  border-radius: 2rem;
  color: ${({ theme: { color } }) => color.white};
  font-size: 1rem;
  width: max-content;
`;

StyledLink.defaultProps = {
  to: '/',
};

StyledLink.propTypes = {
  to: PropTypes.string,
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
  mediaType: PropTypes.string.isRequired,
};
