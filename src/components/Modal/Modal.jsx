import React, { Component } from 'react';
import { ModalDiv, ImageModalDiv } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, onOverlayClick } = this.props;

    return (
      <ModalDiv className="overlay" onClick={onOverlayClick}>
        <ImageModalDiv className="modal">
          <img src={largeImageURL} alt="" />
        </ImageModalDiv>
      </ModalDiv>
    );
  }
}
