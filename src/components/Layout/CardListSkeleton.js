import React from 'react';
import styled, { keyframes } from 'styled-components';

export const CardListSkeleton = () => {
  return (
    <Skeleton>
      {new Array(20).fill().map((el, i) => (
        <SkeletonItem key={i}>
          <SkeletonCard />
        </SkeletonItem>
      ))}
    </Skeleton>
  );
};

const Skeleton = styled.div`
  display: flex;
`;

const SkeletonItem = styled.div`
  margin-right: 2rem;
`;

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

const SkeletonCard = styled.div`
  background-color: ${({ theme: { color } }) => color.gray};
  animation: ${animation} 1.5s ease-in-out 0.5s infinite;
  width: 14.8rem;
  border: 2px solid transparent;
  border-radius: 0.5rem;
  height: 17.5rem;
`;
