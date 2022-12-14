import React, { Component } from 'react';
import { Image } from './ImageGallery.styled';
import { Modal } from 'components/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidUpdate() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.setState({ isModalOpen: false });
      document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }
  };

  render() {
    const { src, alt, largeImageURL } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <Image onClick={this.openModal} src={src} alt={alt} />
        {isModalOpen && (
          <Modal onClick={this.closeModal} src={largeImageURL} alt={alt} />
        )}
      </>
    );
  }
}
