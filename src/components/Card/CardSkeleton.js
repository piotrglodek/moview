import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

export const CardSkeleton = ({ n }) => {
  return (
    <>
      {new Array(n).fill().map((el, i) => (
        <StyledSkeleton key={i}>
          <StyledSkeletonImage />
          <StyledSkeletonDetails>
            <StyledSkeletonText />
            <StyledSkeletonText />
          </StyledSkeletonDetails>
        </StyledSkeleton>
      ))}
    </>
  );
};

const animation = keyframes`
    from {
        opacity:1;
    }
    50%{
        opacity:0.4;
    }
    to{
        opacity:1;
    }
`;

const StyledSkeleton = styled.div`
  margin: 1rem;
`;

const shared = css`
  animation: ${animation} 1.5s ease-in-out infinite;
  background-color: ${({ theme: { color } }) => color.gray};
  border-radius: 0.2rem;
`;

const StyledSkeletonImage = styled.div`
  ${shared}
  width: 15.4rem;
  height: 23.1rem;
`;

const StyledSkeletonDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 5.8rem;
`;

const StyledSkeletonText = styled.div`
  ${shared}
  height:2rem;
`;

CardSkeleton.propTypes = {
  n: PropTypes.number.isRequired,
};
