import React from 'react';
import styled, { keyframes, css } from 'styled-components';

export const MediaSkeleton = () => {
  return (
    <StyledSkeleton>
      <StyledSkeletonImgWrapper>
        <StyledSkeletonImage />
      </StyledSkeletonImgWrapper>
      <StyledSkeletonWrapper>
        <StyledSkeletonText h={18} w={50} />
        <StyledSkeletonText h={38} w={320} />
        <StyledSkeletonText h={20} w={75} />
        <StyledSkeletonText h={24} w={200} />
        <StyledSkeletonText h={120} />
      </StyledSkeletonWrapper>
    </StyledSkeleton>
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

const shared = css`
  animation: ${animation} 1.5s ease-in-out infinite;
  background-color: ${({ theme: { color } }) => color.gray};
  border-radius: 0.2rem;
`;

const StyledSkeleton = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;
`;

const StyledSkeletonImgWrapper = styled.div`
  width: 30%;
  padding-bottom: 2rem;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const StyledSkeletonWrapper = styled.div`
  width: 70%;
  padding-bottom: 2rem;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const StyledSkeletonImage = styled.div`
  display: block;
  width: 18.5rem;
  height: 27.8rem;
  ${shared};
`;

const StyledSkeletonText = styled.div`
  ${shared}
  width: ${({ w }) => (w ? `${w}px` : '100%')};
  height: ${({ h }) => `${h}px`};
  margin-bottom: 1.5rem;
`;
