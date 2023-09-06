import { ModalDiv, ImageModalDiv } from './Modal.styled';

export const Modal = ({ largeImageURL, onOverlayClick }) => {
  return (
    <ModalDiv className="overlay" onClick={onOverlayClick}>
      <ImageModalDiv className="modal">
        <img src={largeImageURL} alt="" />
      </ImageModalDiv>
    </ModalDiv>
  );
};
