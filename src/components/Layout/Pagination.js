import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export const Pagination = ({ maxPage, page, path }) => {
  let history = useHistory();
  const nextPage = () => {
    history.push(`/${path}/page/${page + 1}`);
    window.scrollTo(0, 0);
  };
  const prevPage = () => {
    history.push(`/${path}/page/${page - 1}`);
    window.scrollTo(0, 0);
  };

  return (
    <StyledContainer>
      <StyledButton
        disabled={page === 1 && true}
        onClick={prevPage}
        aria-label='go to previous page'
      >
        Previous
      </StyledButton>
      <StyledButton
        disabled={page === maxPage && true}
        onClick={nextPage}
        aria-label='go to next page'
      >
        Next
      </StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.6rem 0;
`;
const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 0;
  cursor: pointer;
  border-radius: 0.2rem;
  padding: 0.5rem 2rem;
  transition: background 0.3s ease;
  color: ${({ theme: { color } }) => color.white};
  font-weight: ${({ theme: { weight } }) => weight.medium};
  font-size: 1.8rem;

  &:hover {
    background-color: ${({ theme: { color } }) => color.gray};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
};
