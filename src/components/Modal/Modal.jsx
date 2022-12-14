import React from 'react';
import { ImgModal, Overlay, LargeImg } from './Modal.styled';

export const Modal = ({ src, alt, onClick }) => (
  <Overlay onClick={onClick}>
    <ImgModal>
      <LargeImg src={src} alt={alt} />
    </ImgModal>
  </Overlay>
);
