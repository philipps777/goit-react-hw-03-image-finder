import React, { Component } from 'react';
import { ModalDiv, ImageModalDiv } from './Modal.styled';

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: true,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape' && this.state.isModalOpen) {
      this.handleCloseModal();
    }
  };

  handleOverlayClick = event => {
    if (event.target === event.currentTarget && this.state.isModalOpen) {
      this.handleCloseModal();
    }
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      this.state.isModalOpen && (
        <ModalDiv className="overlay" onClick={this.handleOverlayClick}>
          <ImageModalDiv className="modal">
            <img src={largeImageURL} alt="" />
          </ImageModalDiv>
        </ModalDiv>
      )
    );
  }
}
