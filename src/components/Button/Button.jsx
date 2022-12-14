import { Wrapper } from 'components/Loader/Loader.styled';
import React from 'react';
import { LoadMoreButton } from './Button.styled';

export const Button = ({ images, onClick }) => {
  const emptyImages = images.length === 0;
  if (!emptyImages) {
    return (
      <Wrapper>
        <LoadMoreButton onClick={onClick} type="button">
          Load more
        </LoadMoreButton>
      </Wrapper>
    );
  }
};
