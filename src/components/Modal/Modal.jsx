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

  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, isOpen } = this.props;

    return (
      isOpen && (
        <ModalDiv className="overlay" onClick={this.handleOverlayClick}>
          <ImageModalDiv className="modal">
            <img src={largeImageURL} alt="" />
          </ImageModalDiv>
        </ModalDiv>
      )
    );
  }
}
